import React, { Fragment, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import VehicleItem from "./VehicleItem";
import Spinner from "../layout/Spinner";
import { setAlert } from "../../actions/alertAction";
import { clearVehicleErrors } from "../../actions/vehicleAction";
import {useDispatch, useSelector } from "react-redux";
import { getVehicles } from "../../actions/vehicleAction";

const Vehicles = () => {
  const dispatch = useDispatch()
  const vehicle = useSelector(state=>state.vehicle)
  const auth = useSelector(state=>state.auth)

  useEffect(() => {
    if (vehicle.error) {
      console.log(vehicle.error);
      dispatch(setAlert(vehicle.error, "danger"));
      dispatch(clearVehicleErrors());
    }
    // eslint-disable-next-line
  }, [vehicle, history]);

  useEffect(() => {
    dispatch(getVehicles());
    // eslint-disable-next-line
  }, []);

  if (vehicle.vehicles !== null && vehicle.vehicles.length === 0 && !auth.loading) {
    return <h4>Please add a vehicle...</h4>;
  }

  return (
    <Fragment>
      {vehicle.vehicles !== null && !auth.loading ? (
        <TransitionGroup>
          {vehicle.filtered !== null
            ? vehicle.filtered.map(vehicle => (
                <CSSTransition
                  key={vehicle._id}
                  timeout={500}
                  classNames="item"
                >
                  <VehicleItem vehicle={vehicle} />
                </CSSTransition>
              ))
            : vehicle.vehicles.map(vehicle => (
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
    </Fragment>
  );
};

export default Vehicles;
