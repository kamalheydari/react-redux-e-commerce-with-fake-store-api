import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Screen from "../styles/Screen";

//? Components
import {
  Breadcrumb,
  CartItem,
  CartTotals,
  EmptyCart,
  Button,
} from "../components";

//? Redux
import { useDispatch, useSelector } from "react-redux";
import { clearCart, countCartTotals } from "../redux/cart/cartAction";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, isCheckout } = useSelector((state) => state.cartState);

  useEffect(() => {
    dispatch(countCartTotals());
  }, [cart, isCheckout]);

  if (cart.length < 1) {
    return <EmptyCart />;
  }
  return (
    <main>
      <Breadcrumb title='Cart' />
      <Wrapper className='page'>
        <div className='cart-content'>
          <div className='cart__items'>
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className='cart__links'>
            <Button variant='primary'>
              <Link to='/products'>Buy more</Link>
            </Button>
            <Button variant='secondary' onClick={() => dispatch(clearCart())}>
              Clear cart
            </Button>
          </div>
        </div>
        <CartTotals />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  ${Screen.lg`
    grid-template-columns: 1fr 1fr 1fr;
    `}

  .cart-content {
    display: grid;
    gap: 1rem;
    ${Screen.lg`
    grid-column: 1/3;
    `}
  }

  .cart__items {
    padding: 1rem;
  }

  .cart__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
`;
export default CartPage;
