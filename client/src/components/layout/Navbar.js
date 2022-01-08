import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logout, loadUser } from "../../actions/authAction";
import { clearVehicles } from "../../actions/vehicleAction";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = ({ title, icon }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const onLogout = () => {
    dispatch(logout());
    dispatch(clearVehicles());
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/vehicles">
          <span class="dd-buttonVehicle">Vehicles</span>
        </Link>
      </li>

      <li>
        <label class="dropdown">
          <div class="dd-button">Hello {auth.user && auth.user.name}</div>

          <input type="checkbox" class="dd-input" id="test" />

          <ul class="dd-menu">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt" />{" "}
                <span className="hide-sm">Logout</span>
              </a>
            </li>
          </ul>
        </label>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <Link to="/">
        <img
          style={{
            width: "250px",
            margin: "0px 5px 0px 10px",
            position: "centre",
            transition: ".5s",
          }}
          src={logo}
          alt="Drivehicle"
        />
      </Link>
      <ul>{auth.isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Vehicle Register",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
