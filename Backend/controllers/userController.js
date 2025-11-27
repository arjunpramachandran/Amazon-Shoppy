
import bcrypt from "bcryptjs";
import  jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

import User from "../models/User.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const register = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { phoneNumber }]
    });

    if (existingUser)
      return res.status(400).json({ message: "Email or Phone Number  already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    const user = await User.findOne({ 
      $or :[{email : emailOrPhone},{phoneNumber:emailOrPhone}]
    });
    if (!user)
      return res.status(400).json({ message: "Invalid email or Phone Number or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const googleLogin = async (req, res) => {
try {
    const {token} = req.body
    console.log(token);
    

    const ticket = await client.verifyIdToken({
        idToken:token,
        audience:process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const {email,name , picture , sub} = payload

    let user = await User.findOne({email});

    if(!user){
        user = await User.create({
            name,
            email,
            googleId:sub,
            avatar:picture,
            password:null,
            phoneNumber:null

        })
    }
const accessToken = jwt.sign(
    {id:user._id , email: user.email},
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
);

res.cookie ("token",accessToken,{
    httpOnly:true,
    secure:true,
    sameSite :"none",
    maxAge : 1 * 24 * 60 * 60 * 1000
})


return res.json({
      message: "Google login success",
      user: {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        phoneNumber: user.phoneNumber,
        googleId: user.googleId,
      },
    });

} catch (error) {
    console.log("Google Auth Error:", error);
    res.status(500).json({ message: "Google authentication failed" });
}
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
