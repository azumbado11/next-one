"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import {
  navLinks,
  BagIcon,
  LogoIcon,
  SearchIcon,
  MenuIcon,
  CloseIcon,
} from "../../constants/index";

const NavLinks = ({ style }) => {
  return (
    <nav className={style}>
      {navLinks.map((link) => {
        return (
          <li key={link.title}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        );
      })}
      <Link href={"/cart"} className="bagIcon">
        {BagIcon}
      </Link>
    </nav>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="nav__container">
      <Link href={"/"}>{LogoIcon}</Link>
      <NavLinks style={"nav-section__container"} />
      {/* <section className="nav-section__container">
        <div className="nav-search__container">
          <input type="text" name="search" placeholder="Search" />
          <button>{SearchIcon}</button>
        </div>
      </section> */}
      <section className="navbar-menu">
        <button
          className="nav-toggle-btn"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          {toggleMenu ? CloseIcon : MenuIcon}
        </button>
        {toggleMenu && (
          <div className="navbar_menu_container scale-up-center">
            <NavLinks style={"navbar_menu_container-links"} />
          </div>
        )}
      </section>
    </header>
  );
};

export default Navbar;
