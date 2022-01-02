import React from 'react'
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({id,title,image,price,rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      };
    return (
        <div className="product">
           <div className="product_info">
               <p>{title}</p>
               <p className="product_price">
                   <small>₹</small>
                   <strong>{price}</strong>
               </p>
               <div className="product_rating">
                 <p>{rating}</p>
                   
               </div>
           </div>
<img className="lean" src={image}/>
<button id="btn" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
