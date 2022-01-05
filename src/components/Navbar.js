import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import Screen from "../utils/Screen";

//? Constants
import { links } from "../utils/constants";

//? Components
import { CartButtons } from ".";

//? Icons
import { FaBars, FaStore } from "react-icons/fa";

//? Redux
import { useDispatch } from "react-redux";
import { openSidebar } from "../redux/sidebar/sidebarAction";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Header>
      <div className="header-center">
        <Link to="/" className="header__logo">
          <FaStore />
        </Link>
        <nav className="header__nav">
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
        <div className="header__cart">
          <CartButtons />
        </div>
        <button
          type="button"
          onClick={() => dispatch(openSidebar())}
          className="header__btn"
        >
          <FaBars />
        </button>
      </div>
    </Header>
  );
};

const Header = styled.header`
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 0 1rem 1rem var(--bg-color);
  position: fixed;
  background: var(--blue-color-2);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  .header-center {
    width: min(100%, var(--max-width));
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__logo {
    font-size: 2.2rem;
    color: var(--blue-color-1);
  }

  .header__btn {
    font-size: 2.2rem;
    color: var(--green-color-1);
    ${Screen.md`
      display:none;
      `}
  }

  .header__nav {
    display: none;
    width: 35%;
    ${Screen.md`
      display:inline-block;
      `}
    ul {
      display: flex;
      justify-content: space-between;
      a {
        display: inline-block;
        padding: 0.2rem;
        border-bottom: 0.2rem solid transparent;
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
