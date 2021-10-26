import React from "react";
import * as actionType from "../../../store/actions/actionType";
import { connect } from "react-redux";

function MobileToggle(props) {
	return (
		<div
			className={["toggle-btn", props.className].join(" ")}
			onClick={props.drawerToggle}
		>
			<div className="toggle-btn__line" />
			<div className="toggle-btn__line" />
			<div className="toggle-btn__line" />
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		drawerToggle: () => dispatch({ type: actionType.DRAWER_TOGGLE }),
	};
};

export default connect(null, mapDispatchToProps)(MobileToggle);
