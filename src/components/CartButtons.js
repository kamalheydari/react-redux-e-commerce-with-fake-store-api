import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

//? Icons
import { FaShoppingCart } from "react-icons/fa";

//? Redux
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../redux/sidebar/sidebarAction";

const CartButtons = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const { total_items } = useSelector((state) => state.cartState);

  return (
    <Wrapper>
      <Link
        to="/cart"
        onClick={() => dispatch(closeSidebar())}
        className={
          pathname === "/cart" ? "cart__container active " : "cart__container"
        }
      >
        Cart
        <div className="cart-icon">
          <FaShoppingCart />
          <span>{total_items}</span>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .cart__container {
    display: flex;
    margin-right: 3rem;
    border-bottom: 0.2rem solid transparent;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  .active {
    border-color: var(--red-color-1);
  }
  .cart-icon {
    position: relative;
    color: var(--blue-color-1);
    margin-left: 0.4rem;

    span {
      position: absolute;
      top: -12px;
      right: -18px;
      padding: 0.1rem;
      min-width: 2rem;
      background-color: var(--red-color-1);
      border-radius: 50%;
      color: var(--blue-color-3);
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .cart__auth {
    font-size: 1.3rem;
    color: var(--green-color-3);
  }
`;

export default CartButtons;
