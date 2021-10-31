import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from './components/pages/Dashboard'
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Alerts />
            <Switch>
              <PrivateRoute exact path="/vehicles" component={Home} />
              <Route exact path="/" component={About} />
              
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
};

export default App;
