import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//? Helper
import Screen from "../styles/Screen";

//? Components
import { Typography } from "../components";

//? Redux
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../redux/cart/cartAction";

const CartTotals = () => {
  const dispatch = useDispatch();
  const { total_items, total_price } = useSelector((state) => state.cartState);

  return (
    <Wrapper>
      <div>
      <Typography.H3 className='total__items'>
          Total Items : <span>{total_items}</span>
        </Typography.H3>
        <br />
        <Typography.H4 className='total__price'>
          Total Price : <span>${total_price.toFixed(2)}</span>
        </Typography.H4>
      </div>
      <hr />
      <Link
        to="/checkout"
        type="button"
        className="total__btn "
        onClick={() => dispatch(checkout())}
      >
        Checkout
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border: 0.2rem solid var(--green-color-1);
  border-radius: var(--radius);
  padding: 1rem 1.5rem;

  ${Screen.lg`
  align-self: flex-start;
    `}

  .total__items {
    span {
      color: var(--blue-color-1);
      display: inline-block;
      text-align: center;
      width: 12rem;
      font-size: var(--fs-600);
    }
  }

  .total__price {
    span {
      color: var(--red-color-1);
      display: inline-block;
      text-align: center;
      font-size: var(--fs-600);
      width: 12rem;
    }
  }

  hr {
    border-bottom: 0.2rem solid var(--red-color-1);
    margin: 1.5rem 0;
  }

  .total__btn {
    background: var(--green-color-1);
    width: 100%;
    padding: 0.5rem;
    color: var(--white-color);
    font-size: 1.4rem;
    display: inline-block;
    text-align: center;
    letter-spacing: 0.2rem;
    border: 0.2rem solid var(--green-color-1);
    transition: var(--transition);
    &:hover {
      background: transparent;
      color: var(--red-color-1);
    }
  }
`;

export default CartTotals;
