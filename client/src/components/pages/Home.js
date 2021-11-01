import React, { useEffect } from "react";
import Vehicles from "../vehicle/Vehicles";
import VehicleForm from "../vehicle/VehicleForm";
import VehicleFilter from "../vehicle/VehicleFilter";
import { loadUser } from "../../actions/authAction";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Hello");
    dispatch(loadUser());
  }, []);

  return (
    <div className="grid-2">
      <div>
        <VehicleForm />
      </div>
      <div>
        <VehicleFilter />
        <Vehicles />
      </div>
    </div>
  );
};

export default Home;
