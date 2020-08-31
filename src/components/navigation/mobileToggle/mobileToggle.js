import React from "react";
import * as actionType from "../../../store/actions/actionType";
import { connect } from "react-redux";

const mobileToggle = ({ drawerToggle, className = "" }) => {
  return (
    <div className={["toggle-btn", className].join(" ")} onClick={drawerToggle}>
      <div className="toggle-btn__line" />
      <div className="toggle-btn__line" />
      <div className="toggle-btn__line" />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    drawerToggle: () => dispatch({ type: actionType.DRAWER_OPEN }),
  };
};

export default connect(null, mapDispatchToProps)(mobileToggle);
