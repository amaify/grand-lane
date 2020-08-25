import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import SVGIcon from "../../components/svgIcons/svg";

const Button = (props) => {
  return !props.link ? (
    <button
      className={"button-" + props.theme}
      type={props.type}
      disabled={props.disabled}
    >
      {props.loading ? (
        <p style={{ color: "#fff", fontSize: "1.5rem" }}>Loading...</p>
      ) : (
        <Fragment>
          <span className={"button-" + props.theme + "__text"}>
            {props.btnName}
          </span>
          <span className="button__icon">
            <SVGIcon name="right-arrow" className="svg" />
          </span>
        </Fragment>
      )}
    </button>
  ) : (
    <Link className={"button-" + props.theme} to={props.link}>
      <Fragment>
        <span className={"button-" + props.theme + "__text"}>
          {props.btnName}
        </span>
        <span className="button__icon">
          <SVGIcon name="right-arrow" className="svg" />
        </span>
      </Fragment>
    </Link>
  );
};

export default Button;
