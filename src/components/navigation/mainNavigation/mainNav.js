import React from "react";

import NavItems from "../navigationItems/navItems";

import "../../../scss/main.css";

const mainNav = props => {
  return (
    <NavItems
      className="main"
      isAuth={props.isAuth}
      logoutHandler={props.logoutHandler}
    />
  );
};

export default mainNav;
