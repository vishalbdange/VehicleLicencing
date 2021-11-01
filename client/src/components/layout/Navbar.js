import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logout, loadUser } from "../../actions/authAction";
import { clearVehicles } from "../../actions/vehicleAction";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ title, icon, user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    // eslint-disable-next-line
  }, []);
  const auth = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(clearVehicles());
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/vehicles">
          <span style={{ color: "#fff" }}>Vehicles</span>
        </Link>
      </li>

      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
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
      <h1>
        <i className={icon} /> {title}
      </h1>
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
