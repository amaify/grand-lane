import React from "react";

import NavItems from "../navigationItems/navItems";
import SVGIcon from "../../svgIcons/svg";

const sideDrawer = props => {
  let drawerClass = ["drawer"];
  if (props.show) {
    drawerClass = ["drawer", "open"].join(" ");
  }
  return (
    <div className={drawerClass}>
      <div className="drawer-close" onClick={props.close}>
        <SVGIcon name="cancel" className="drawer-close__icon" />
      </div>
      <NavItems
        className="side"
        isAuth={props.isAuth}
        logoutHandler={props.logoutHandler}
      />
    </div>
  );
};

export default sideDrawer;
