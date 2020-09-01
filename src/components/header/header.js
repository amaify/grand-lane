import React, { Component } from "react";

import MobileNav from "../navigation/mobileNavigation/mobileNav";
import MainNav from "../navigation/mainNavigation/mainNav";

class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 100;
      const header = document.getElementById("header");
      if (header) {
        if (isTop) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => null);
  }

  render() {
    return (
      <header id="header" className="header">
        <MainNav />
        <MobileNav />
      </header>
    );
  }
}

export default Header;
