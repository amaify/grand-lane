import React from "react";
import { connect } from "react-redux";
import * as actionType from "../../../store/actions/actionType";

import NavItems from "../navigationItems/navItems";
import SVGIcon from "../../svgIcons/svg";

const SideDrawer = (props) => {
  let drawerClass = ["drawer"];
  if (props.openDrawer) {
    drawerClass = ["drawer", "open"].join(" ");
  }

  React.useEffect(() => {
    window.onload = () => props.closeDrawer();
  }, [props]);

  return (
    <div className={drawerClass}>
      <div className="drawer-close" onClick={props.closeDrawer}>
        <SVGIcon name="cancel" className="drawer-close__icon" />
      </div>
      <NavItems className="side" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    openDrawer: state.sideDrawer.sideDrawerOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeDrawer: () => dispatch({ type: actionType.DRAWER_CLOSE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
