import React, { useState } from "react";
import { Link } from "react-router-dom";

//? Redux
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartAction";

//? Components
import { AmountButtons, Button } from ".";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  //? Local State
  const [amount, setAmount] = useState(1);

  //? Handlers
  const increase = () => {
    setAmount((oldAmount) => oldAmount + 1);
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <Button variant='primary'>
        <Link
          to='/cart'
          id='link'
          onClick={() => dispatch(addToCart(product, amount))}
        >
          Add to cart
        </Link>
      </Button>
    </>
  );
};

export default AddToCart;
