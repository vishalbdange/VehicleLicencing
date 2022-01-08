import React, { useEffect } from "react";
import "./Dashboard.css";
import VehicleItem from "../vehicle/VehicleItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../layout/Spinner";
import { editProfile } from "../../actions/authAction";
import { getVehicles } from "../../actions/vehicleAction";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const vehicle = useSelector((state) => state.vehicle);

  const EditOption = () => {
    dispatch(editProfile());
  };

  useEffect(() => {
    dispatch(getVehicles());
  }, []);

  return (
    <>
      <div className="profile-container">
        <div className="profile-title">Profile Detail</div>
        <div className="profile-details">Name: {auth?.user?.name}</div>
        <div className="profile-details">Email: {auth?.user?.email}</div>
        <div className="profile-details">Mobile Number: 9874563210</div>
        <div className="profile-details">Aadhar Card No: 7410258963012</div>
        <div className="profile-details">
          Address: Jijau Nagar, Pradhan Layout, Nalwadi, Wardha - 442001
        </div>
        <div className="float-right">
          <button className="edit-button">Edit Profile</button>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>Vehicles Added by {auth?.user?.name}</h2>
          </div>
          <div className="card bg-light">
            <h3 className="text-primary text-left">
              <i className="fa fa-car"></i> 147852
              <span className="badge badge-success">Approved</span>
              <span style={{ float: "right" }} className="badge badge-success">
                TATA
              </span>
            </h3>
            <ul className="list">
              <li>
                <i className="fas fa-industry"></i>
                <span style={{ marginRight: "3px" }}>Type:</span>4
              </li>

              <li>
                <i className="fas fa-clock"></i>{" "}
                <span style={{ marginRight: "5px" }}>Inspection date:</span>
                2022-01-07
              </li>

              <li>
                <i className="fas fa-file-signature"></i>{" "}
                <span style={{ marginRight: "3px" }}>Owner's Name:</span>
                {auth?.user?.name}
              </li>

              <li>
                <i className="fas fa-building"></i>{" "}
                <span style={{ marginRight: "3px" }}>Insurence Company:</span>
                ICICI
              </li>
            </ul>
            <p>
              <button className="btn btn-dark btn-sm">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </p>
          </div>
          {vehicle.vehicles !== null && !auth.loading ? (
            <TransitionGroup>
              {vehicle.filtered !== null
                ? vehicle.filtered.map((vehicle) => (
                    <CSSTransition
                      key={vehicle._id}
                      timeout={500}
                      classNames="item"
                    >
                      <VehicleItem vehicle={vehicle} />
                    </CSSTransition>
                  ))
                : vehicle.vehicles.map((vehicle) => (
                    <CSSTransition
                      key={vehicle._id}
                      timeout={500}
                      classNames="item"
                    >
                      <VehicleItem vehicle={vehicle} />
                    </CSSTransition>
                  ))}
            </TransitionGroup>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
