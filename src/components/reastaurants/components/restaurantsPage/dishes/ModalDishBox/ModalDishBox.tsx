import React, { useEffect, useState } from "react";
import "./modalDishBox.css";
import { filterDishes } from "../../../../../../store/slices/dishesSlice";
import { addOrder } from "../../../../../../store/slices/orderSlice";
import { useSelector, useDispatch } from "react-redux";
import { Istore } from "../../../../../../types/interfaces/Istore";

interface IModalProps {
    id: number,
    isOpen: boolean,
    onClose: () => void
}

const ModalDishBox: React.FC<IModalProps> = (props: IModalProps) => {

    const dispatch = useDispatch();
    const dishesData = useSelector((state: Istore) => state.dishes.value);
    const [dishQuantity, setDishQuantity] = useState(1);

    useEffect(() => {
        dispatch(filterDishes('all'));
    }, [])

    const increaseQuantity = () => {
        setDishQuantity(dishQuantity + 1)
    }

    const decreaseQuantity = () => {
        if (dishQuantity > 1) {
            setDishQuantity(dishQuantity - 1)
        } else {

        }
    }

    const handleAddToBag = () => {
        dispatch(addOrder({
            name: dishData.name,
            img: dishData.img,
            price: dishData.price,
            quantity: dishQuantity,
        }));
        setDishQuantity(1);
    }

    const dishData = dishesData.filter((dish) => dish.dishNumber === props.id)[0];

    
    return (
        <>
            {props.isOpen &&
                <div className="modal-background">
                    <div id="close-btn-container">
                        <button id="close-btn" onClick={props.onClose}><img src="../Assets/close-btn.svg" alt="" /></button>
                        <div className="modal-dish-box-container">
                            <div id="modal-dish-popup-details-section">
                                <img className="dish-popup-image" src={dishData.img} alt="" />
                                <h1>{dishData.name}</h1>
                                <span id="dish-popup-ingredients">{dishData.ingredients}</span>
                                <div>

                                    {dishData.foodType.map((type, index) =>
                                        <img key={index} className="icon-foodtype-dish-popup" src={`../Assets/food-type/${type}-icon.svg`} alt="" />
                                    )}
                                </div>
                                <div id="price-container-dish-popup" className="price-container">
                                    <span id="price-span-modal">₪{dishData.price}</span>
                                </div>
                            </div>
                            <div className="modal-dish-popup-user-actions">
                                <span className="modal-dish-box-titles">Choose a side</span>
                                <label htmlFor="white-bread"><input className="dish-popup-input" name="side-dish" id="white-bread" type="radio" />White Bread</label>
                                <label htmlFor="white-bread"><input className="dish-popup-input" name="side-dish" id="Sticky rice" type="radio" />Sticky rice</label>
                            </div>
                            <div className="modal-dish-popup-user-actions">
                                <span className="modal-dish-box-titles">Changes</span>
                                <label htmlFor="white-bread"><input className="dish-popup-input" id="Whithout-peanuts" type="checkbox" />Whithout peanuts</label>
                                <label htmlFor="white-bread"><input className="dish-popup-input" id="white-bread" type="checkbox" />Sticky Less spicy</label>
                            </div>
                            <div className="modal-dish-popup-user-actions">
                                <span className="modal-dish-box-titles">Quantity</span>
                                <div id="quantity-buttons-container">
                                    <button onClick={decreaseQuantity}><img src="../Assets/minus-btn.svg" alt="" /></button>
                                    <span>{dishQuantity}</span>
                                    <button onClick={increaseQuantity}><img src="../Assets/plus-btn.svg" alt="" /></button>
                                </div>
                            </div>
                            <button id="add-to-bag-btn" onClick={handleAddToBag}>Add to bag</button>

                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ModalDishBox;