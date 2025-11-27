import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../API/api";


const MyOrders = () => {
    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        try {
            const res = await api.get("/api/orders/my-orders");
            setOrders(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="w-[1200px] mx-auto my-10">


            <div className="flex gap-10 text-[#007185] text-lg font-medium border-b pb-3">
                <button className="text-orange-500">Your Orders</button>
                <button>Your Account</button>
            </div>


            <div className="my-6 flex justify-between items-center">
                <select className="border px-3 py-2 rounded">
                    <option>past 3 months</option>
                    <option>2024</option>
                    <option>2023</option>
                </select>

                <input
                    type="text"
                    placeholder="Search all orders"
                    className="border px-3 py-2 rounded w-80"
                />
            </div>


            <div className="space-y-6">

                {orders.length === 0 && (
                    <p className="text-gray-600 text-center py-20 text-lg">
                        You have no orders placed yet.
                    </p>
                )}

                {orders.map((order) => (
                    <div key={order.id} className="border p-5 rounded bg-white shadow">


                        <div className="flex justify-between">
                            <p className="text-sm text-gray-500">
                                ORDER PLACED: {new Date(order.createdAt).toDateString()}
                            </p>
                            <p className="font-medium">Order #{order.orderId}</p>
                        </div>


                        {order.items.map(item => (
                            <div className="flex mt-3 gap-4">
                                <img src={item.image} className="w-20" alt="" />
                                <div>
                                    <p className="font-medium">{item.title}</p>
                                    <p>Qty: {item.qty}</p>
                                </div>

                                <p className="ml-auto font-semibold">₹{item.price}</p>
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </div>
    );
};

export default MyOrders;
