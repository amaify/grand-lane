import React from "react";

const input = props => (
  <div className="contact-form__content">
    {props.label && <label htmlFor={props.id}>{props.label}</label>}
    {props.control === "input" && (
      <input
        className={[
          !props.valid ? "invalid" : "valid",
          props.touched ? "touched" : "untouched"
        ].join(" ")}
        type={props.type}
        id={props.id}
        required={props.required}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => props.onChange(props.id, e.target.value)}
        onBlur={props.onBlur}
      />
    )}
    {props.control === "textarea" && (
      <textarea
        className={[
          !props.valid ? "invalid" : "valid",
          props.touched ? "touched" : "untouched"
        ].join(" ")}
        id={props.id}
        value={props.value}
        rows={props.rows}
        cols={props.cols}
        required={props.required}
        placeholder={props.placeholder}
        onChange={e => props.onChange(props.id, e.target.value)}
        onBlur={props.onBlur}
      />
    )}
  </div>
);

export default input;
