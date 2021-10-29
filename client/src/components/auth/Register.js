import { connect } from "mongoose";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../actions/alertAction";
import { clearErrors, register } from "../../actions/authAction";
// import { connect } from "react-redux";

const Register = ({
  history
}) => {
  const dispatch = useDispatch()
  const auth = useSelector(state=>state.auth)
  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/vehicles");
    }

    if (auth.error === "User already exists") {
      dispatch(setAlert(auth.error, "danger"));
      clearErrors();
    }

    if(auth.error){
      dispatch(setAlert(auth.error,"danger"))
    }
    // eslint-disable-next-line
  }, [history,auth]); // want this to run when the error changes

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      console.log("Helo")
      dispatch(setAlert("Please enter all fields", "danger"));
    } else if (password !== password2) {
      dispatch(setAlert("Passwords do not match", "danger"));
    } else {
      console.log({ name, email, password })
      dispatch(register({ name, email, password }));
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};


export default Register;