import React, { useState } from 'react'
import { RadioButton, RatingRadioButton } from './RadioButton'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'


const Filter = () => {
    const [delivery, setDelivery] = useState("")
    const [ondelivery, setOnDelivery] = useState("")
    const [availability, setAvailability] = useState("")
    const [rating, setRating] = useState(0);


    const [brand, setBrand] = useState([])
    const toggleBrand = (name) => {
        if (brand.includes(name)) {

            setBrand(brand.filter(b => b !== name));
        } else {

            setBrand([...brand, name]);
        }


    };
    const [price, setPrice] = useState([])
    const togglePrice = (name) => {
        if (price.includes(name)) {

            setPrice(price.filter(b => b !== name));
        } else {

            setPrice([...price, name]);
        }


    };
    const [discount, setDiscount] = useState([])
    const toggleDiscount = (name) => {
        if (discount.includes(name)) {

            setDiscount(discount.filter(b => b !== name));
        } else {

            setDiscount([...discount, name]);
        }


    };
    const [seller, setSeller] = useState([])
    const toggleSeller = (name) => {
        if (seller.includes(name)) {

            setSeller(seller.filter(b => b !== name));
        } else {

            setSeller([...seller, name]);
        }


    };
    return (
        <div className='w-[225px] py-4 ps-4 flex flex-col gap-4'>
            <div>
                <p className='inter-600 text-[14.23px] py-2'>Delivery Day</p>
                <RadioButton selected={delivery === "Get It In 2 Days"} onClick={() => setDelivery(delivery === "Get It In 2 Days" ? "" : "Get It In 2 Days")} label={"Get It In 2 Days"} />
            </div>
            <div>
                <p className='inter-600 text-[14.23px] py-2'>Customer Review</p>
                <div>
                    <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <RatingRadioButton
                                key={num}
                                selected={rating >= num}
                                onClick={() => setRating(num)}
                            />
                        ))}
                        <span className='inter-400 text-[12.45px] '>&up</span>
                    </div> 
                </div>
            </div>
            <div>
                <p className='inter-600 text-[14.23px] py-2'>Brands</p>
                <RadioButton selected={brand.includes("Samsung")} onClick={() => toggleBrand('Samsung')} label={"Samsung"} />
                <RadioButton selected={brand.includes("LG")} onClick={() => toggleBrand('LG')} label={"LG"} />
                <RadioButton selected={brand.includes("Haier")} onClick={() => toggleBrand('Haier')} label={"Haier"} />
                <RadioButton selected={brand.includes("Daikin")} onClick={() => toggleBrand('Daikin')} label={"Daikin"} />
                <RadioButton selected={brand.includes("Godrej")} onClick={() => toggleBrand('Godrej')} label={"Godrej"} />
                <RadioButton selected={brand.includes("IFBPanasonic")} onClick={() => toggleBrand('IFBPanasonic')} label={"IFBPanasonic"} />
                <RadioButton selected={brand.includes("Panasonic")} onClick={() => toggleBrand('Panasonic')} label={"Panasonic"} />
            </div>
            <div>
                <p className='inter-600 text-[14.23px] py-2'>Price</p>
                <RadioButton selected={price.includes("All")} onClick={() => togglePrice('All')} label={"All"} />
                <RadioButton selected={price.includes("₹5900 to ₹10,000")} onClick={() => togglePrice('₹5900 to ₹10,000')} label={"₹5900 to ₹10,000"} />
                <RadioButton selected={price.includes("₹10,000 to ₹20,000")} onClick={() => togglePrice('₹10,000 to ₹20,000')} label={"₹10,000 to ₹20,000"} />
                <RadioButton selected={price.includes("₹20,000 to ₹30,000")} onClick={() => togglePrice('₹20,000 to ₹30,000')} label={"₹20,000 to ₹30,000"} />
                <RadioButton selected={price.includes("₹30,000 to ₹45,000")} onClick={() => togglePrice('₹30,000 to ₹45,000')} label={"₹30,000 to ₹45,000"} />
            </div>
            <div>
                <p className='inter-600 text-[14.23px] py-2'>Deals & Discount</p>
                <p className='inter-400 text-[12.45px] cursor-pointer '>All Discounts</p>
                <p className='inter-400 text-[12.45px] cursor-pointer '>Today’s Deals</p>
            </div>
            <div>
                <p className='inter-600 text-[14.23px] py-2'>Item Condition</p>
                <p className='inter-400 text-[12.45px] cursor-pointer '>New</p>

            </div>
            <div>
                <p className='inter-600 text-[14.23px] py-2'>Pay on Delivery</p>
                <RadioButton selected={ondelivery === "Eligible for Pay On Delivery"} onClick={() => setOnDelivery(ondelivery === "Eligible for Pay On Delivery" ? "" : "Eligible for Pay On Delivery")} label={"Eligible for Pay On Delivery"} />
            </div>
            <div>
                <p className='inter-600 text-[14.23px] py-2'>Discount</p>
                <RadioButton selected={discount.includes("All")} onClick={() => toggleDiscount('All')} label={"All"} />
                <RadioButton selected={discount.includes("10% off or more")} onClick={() => toggleDiscount('10% off or more')} label={"10% off or more"} />
                <RadioButton selected={discount.includes("25% off or more")} onClick={() => toggleDiscount('25% off or more')} label={"25% off or more"} />
                <RadioButton selected={discount.includes("50% off or more")} onClick={() => toggleDiscount('50% off or more')} label={"50% off or more"} />
                <RadioButton selected={discount.includes("70% off or more")} onClick={() => toggleDiscount('70% off or more')} label={"70% off or more"} />

            </div>

            <div>
                <p className='inter-600 text-[14.23px] py-2'>Seller</p>
                <RadioButton selected={seller.includes("DAWNTECH ELECTRONICS PRIVATE LIMITED")} onClick={() => toggleSeller('DAWNTECH ELECTRONICS PRIVATE LIMITED')} label={"DAWNTECH ELECTRONICS PRIVATE LIMITED"} />
                <RadioButton selected={seller.includes("Infiniti E Retail")} onClick={() => toggleSeller('Infiniti E Retail')} label={"Infiniti E Retail"} />
                <RadioButton selected={seller.includes("DIGI WORLD ELECTRONICS")} onClick={() => toggleSeller('DIGI WORLD ELECTRONICS')} label={"DIGI WORLD ELECTRONICS"} />
                <RadioButton selected={seller.includes("Kitchen Brand Store")} onClick={() => toggleSeller('Kitchen Brand Store')} label={"Kitchen Brand Store"} />
                <RadioButton selected={seller.includes("LOWPRICE DEALZ")} onClick={() => toggleSeller('LOWPRICE DEALZ')} label={"LOWPRICE DEALZ"} />
            </div>
            <div>
                <p className='inter-600 text-[14.23px] py-2'>Availability</p>
                <RadioButton selected={availability === "Include Out of Stock"} onClick={() => setAvailability(availability === "Include Out of Stock" ? "" : "Include Out of Stock")} label={"Include Out of Stock"} />
            </div>
        </div>
    )
}

export default Filter