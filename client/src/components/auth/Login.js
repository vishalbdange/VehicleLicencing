import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setAlert } from "../../actions/alertAction";
import { clearErrors, login } from "../../actions/authAction";
// import { connect } from "react-redux";

const Login =() => {
  const dispatch = useDispatch()
  const auth = useSelector(state=>state.auth)
  const history = useHistory()
  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/vehicles");
    }
    if (auth.error === "Invalid Credentials") {
      console.log(auth.error);
      dispatch(setAlert(auth.error, "danger"));
      dispatch(clearErrors());
    }
    // eslint-disable-next-line
  }, [auth, history]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e =>
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      dispatch(setAlert("Please fill in all fields", "danger"));
    } else {
      dispatch(login({
        email,
        password
      }));
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};


export default Login;
