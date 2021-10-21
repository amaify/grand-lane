import * as actionType from "./actionType";
import { useMemo } from "react";

export const drawerOpen = () => {
	return {
		type: actionType.DRAWER_OPEN,
	};
};

export const drawerClose = () => {
	return {
		type: actionType.DRAWER_CLOSE,
	};
};
