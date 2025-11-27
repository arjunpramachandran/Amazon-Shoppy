import Order from "../models/Order.js";


export const createOrder = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Not authorized" });
    }
    const { items, shippingAddress, paymentMethod, totalAmount } = req.body;

    const order = await Order.create({
      user: userId,
      items,
      shippingAddress,
      paymentMethod,
      totalAmount,
    });

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};