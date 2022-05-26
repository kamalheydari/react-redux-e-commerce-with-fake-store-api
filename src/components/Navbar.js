import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

//? Helper
import Screen from "../styles/Screen";

//? Constants
import { links } from "../utils/constants";

//? Components
import { CartButtons, Icons } from ".";

//? Redux
import { useDispatch } from "react-redux";
import { openSidebar } from "../redux/sidebar/sidebarAction";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Header>
      <div className='header-center'>
        <Link to='/'>
          <Icons.FaStoreStyled />
        </Link>
        <nav className='header__nav'>
          <ul>
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <NavLink
                  to={url}
                  className={({ isActive }) => (isActive ? "active" : null)}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='header__cart'>
          <CartButtons />
        </div>
        <button
          type='button'
          onClick={() => dispatch(openSidebar())}
          className='header__btn'
        >
          <Icons.FaBarsStyled />
        </button>
      </div>
    </Header>
  );
};

const Header = styled.header`
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding-inline: 2rem;
  box-shadow: 0 0 5rem 0.5rem var(--bg-color);
  position: fixed;
  background: var(--blue-color-2);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  .header-center {
    width: min(100%, var(--max-width));
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__btn {
    ${Screen.md`
      display:none;
      `}
  }

  .header__nav {
    display: none;
    ${Screen.md`
      display:inline-block;
      `}

    ul {
      display: inline-flex;
      gap: 2.5rem;

      a {
        display: inline-block;
        font-size: var(--fs-500);
        padding: 0.2rem;
        border-bottom: 0.3rem solid transparent;
      }

      .active {
        border-bottom-color: var(--red-color-1);
      }
    }
  }

  .header__cart {
    display: none;
    ${Screen.md`
      display:inline-block;
      `}
  }
`;

export default Navbar;
