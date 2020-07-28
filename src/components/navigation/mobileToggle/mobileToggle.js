import React from "react";

const mobileToggle = ({ drawerToggle, className = "" }) => {
  return (
    <div className={["toggle-btn", className].join(" ")} onClick={drawerToggle}>
      <div className="toggle-btn__line" />
      <div className="toggle-btn__line" />
      <div className="toggle-btn__line" />
    </div>
  );
};

export default mobileToggle;
