import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actionType from "../../../store/actions/actionType";

const navigation = {
  data: [
    { id: "orders", text: "Orders", link: "/orders", auth: true },
    // { id: "admin", text: "Admin", link: "/", auth: true }
  ],
};

const authItems = {
  auth: [
    { id: "home", text: "Login", link: "/login", auth: false },
    { id: "about", text: "Signup", link: "/signup", auth: false },
  ],
};

const NavItems = (props) => {
  return (
    <nav className={"nav-" + props.className}>
      <ul
        className={[
          `nav-${props.className}-items`,
          `nav-${props.className}-items__logo`,
        ].join(" ")}
      >
        <li>
          <NavLink to="/" exact>
            LOGO
          </NavLink>
        </li>
      </ul>

      <ul
        className={[
          `nav-${props.className}-items`,
          `nav-${props.className}-items__links`,
        ].join(" ")}
      >
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" exact>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" exact>
            Services
          </NavLink>
        </li>

        {navigation.data
          .filter((item) => item.auth === props.isAuth)
          .map((item) => (
            <li key={item.id}>
              <NavLink to={item.link} exact>
                {item.text}
              </NavLink>
            </li>
          ))}

        <li>
          <NavLink to="/contact" exact>
            Contact
          </NavLink>
        </li>

        <li id="cta">
          <NavLink to="/reservation" exact>
            book now
          </NavLink>
        </li>
      </ul>

      <ul
        className={[
          `nav-${props.className}-items`,
          `nav-${props.className}-items__auth`,
        ].join(" ")}
      >
        {authItems.auth
          .filter((item) => item.auth === props.isAuth)
          .map((item) => (
            <li key={item.id}>
              <NavLink to={item.link} exact>
                {item.text}
              </NavLink>
            </li>
          ))}

        {props.isAuth && (
          <li id="logout-btn">
            <Link onClick={props.onLogout} className="logout-btn" to="/">
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authentication.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch({ type: actionType.LOGOUT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItems);
