import React from "react";
import { connect } from "react-redux";
import * as actionType from "../../store/actions/actionType";

const backdrop = ({ removeBackdrop, click }) => (
  <div className="backdrop" onClick={click || removeBackdrop} />
);

const mapDispatchToProps = (dispatch) => {
  return {
    removeBackdrop: () => dispatch({ type: actionType.DRAWER_CLOSE }),
  };
};

export default connect(null, mapDispatchToProps)(backdrop);
