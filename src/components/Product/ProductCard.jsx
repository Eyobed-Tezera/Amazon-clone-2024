import React, { useContext, useReducer } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../../components/currencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../utils/action.type";
import { DataContext } from "../DataProvider/DataProvider";
function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating = {}, price, description } = product;
  const { rate = 0, count = 0 } = rating;

  const [state, dispatch] = useContext(DataContext);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
        // amount
      },
    });
  };
  console.log(state)
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          {/* gives five stare and filles with the 0.1 precision */}
          <Rating value={rate} precision={0.1} />
          {/* reating counter */}
          <small>{count}</small>
          {/* We can use the optional chaning ?*/}
          {/* Example:- <small>{rating?.count}  */}
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
