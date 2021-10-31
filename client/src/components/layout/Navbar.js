import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import { logout, loadUser } from "../../actions/authAction";
import { clearVehicles } from "../../actions/vehicleAction";
import { useDispatch, useSelector } from "react-redux";
import './Navbar.css'

const Navbar = ({
  title,
  icon,
}) => {
  const dispatch = useDispatch()
  const auth = useSelector(state=>state.auth)
  useEffect(() => {
    dispatch(loadUser());
    // eslint-disable-next-line
  }, []);

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


      <li>
        <label class="dropdown">

          <div class="dd-button">
            Hello {auth.user && auth.user.name}
          </div>

          <input type="checkbox" class="dd-input" id="test"/>

          <ul class="dd-menu">
            <li>
              <Link to="/dashboard">
                Dashboard
              </Link>
            </li>   
            <li>
              <a onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt" />{" "}
                <span className="hide-sm">Logout</span>
              </a>
            </li>
          </ul>

        </label>
        {/* <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          Hello {auth.user && auth.user.name}
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#">Dashboar</a></li>
          <li><a class="dropdown-item" href="#">Logout</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul> */}
      </li>
        
      {/* <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li> */}
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
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Vehicle Register",
  icon: "fas fa-id-card-alt"
};

export default Navbar
