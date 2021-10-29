import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterVehicle, clearFilter } from '../../actions/vehicleAction';

const VehicleFilter = () => {
  const vehicle = useSelector(state=>state.vehicle)
  const dispatch = useDispatch()
  const text = useRef('');

  useEffect(() => {
    if (vehicle.filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      dispatch(filterVehicle(e.target.value));
    } else {
      dispatch(clearFilter());
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Vehicles...'
        onChange={onChange}
      />
    </form>
  );
};


export default VehicleFilter;
