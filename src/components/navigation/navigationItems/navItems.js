import React from "react";
import { NavLink } from "react-router-dom";

const navigation = {
  data: [
    { id: "orders", text: "Orders", link: "/orders", auth: true }
    // { id: "admin", text: "Admin", link: "/", auth: true }
  ]
};

const authItems = {
  auth: [
    { id: "home", text: "Login", link: "/login", auth: false },
    { id: "about", text: "Signup", link: "/signup", auth: false }
  ]
};

const navItems = props => {
  return (
    <nav className={"nav-" + props.className}>
      <ul
        className={[
          `nav-${props.className}-items`,
          `nav-${props.className}-items__logo`
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
          `nav-${props.className}-items__links`
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
          .filter(item => item.auth === props.isAuth)
          .map(item => (
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
          `nav-${props.className}-items__auth`
        ].join(" ")}
      >
        {authItems.auth
          .filter(item => item.auth === props.isAuth)
          .map(item => (
            <li key={item.id}>
              <NavLink to={item.link} exact>
                {item.text}
              </NavLink>
            </li>
          ))}

        {props.isAuth && (
          <li id="logout-btn">
            <button onClick={props.logoutHandler} className="logout-btn">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default navItems;
