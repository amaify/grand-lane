import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionType from "../../../store/actions/actionType";

import NavItems from "../navigationItems/navItems";
import SVGIcon from "../../svgIcons/svg";

function SideDrawer(props) {
	let drawerClass = ["drawer"];
	if (props.openDrawer) {
		drawerClass = ["drawer", "open"].join(" ");
	}

	useEffect(() => {
		window.onload = () => {
			if (props.openDrawer) {
				return props.drawerToggle();
			}
		};
	}, [props]);

	return (
		<div className={drawerClass}>
			<div className="drawer-close" onClick={props.drawerToggle}>
				<SVGIcon name="cancel" className="drawer-close__icon" />
			</div>
			<NavItems className="side" />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		openDrawer: state.sideDrawer.sideDrawerOpen,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// closeDrawer: () => dispatch({ type: actionType.DRAWER_CLOSE }),
		drawerToggle: () => dispatch({ type: actionType.DRAWER_TOGGLE }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
