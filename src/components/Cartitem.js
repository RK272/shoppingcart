import React from 'react';
import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from "../redux/slices/CartSlice";

const Cartitem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item removed");
    };

    return (
        <div>
            <div>
                <img src={item.image} alt={item.title} />
            </div>
            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
            <div>
                <p>{item.price}</p>
                <div onClick={removeFromCart} style={{ cursor: 'pointer' }}>
                    <FcDeleteDatabase />
                </div>
            </div>
        </div>
    );
};

export default Cartitem;

