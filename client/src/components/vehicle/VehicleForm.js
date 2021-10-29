import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../actions/alertAction';
import {
  addVehicle,
  updateVehicle,
  clearCurrent
} from '../../actions/vehicleAction';
// import { connect } from 'react-redux';


const VehicleForm = () => {
  const vehicle = useSelector(state=>state.vehicle)
  const dispatch = useDispatch()
  useEffect(() => {
    if (vehicle.current !== null) {
      setCurrentVehicle(vehicle.current);
    } else {
      setCurrentVehicle({
        plateNumber: '',
        manufacturer: '',
        type: '',
        inspection: '',
        owner: '',
        insurence: ''
      });
    }
  }, [addVehicle, updateVehicle, vehicle.current]); // if the vehicleContext or the current value is changed

   // Since this is a form we need component level state
 const [currentVehicle, setCurrentVehicle] = useState({
  plateNumber: '',
  manufacturer: '',
  type: '',
  inspection: '',
  owner: '',
  insurence: ''
});
 

  const onChange = e =>
    setCurrentVehicle({ ...currentVehicle, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (vehicle.current === null) {
      if (currentVehicle.plateNumber.length < 6) {
        dispatch(setAlert(
          'The license plate number has to be at least 6 charcaters long',
          'danger'
        ));
      } else {
        dispatch(addVehicle(currentVehicle)); // if there is no current we are adding a new contact
        clearAll();
      }
    } else {
      // we are updating
      if (currentVehicle.plateNumber.length < 6) {
        dispatch(setAlert(
          'The license plate number has to be at least 6 letters long',
          'danger'
        ));
      } else {
        dispatch(updateVehicle(currentVehicle));
        clearAll();
      }
    }
  };

  const clearAll = () => {
    dispatch(clearCurrent());
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {vehicle.current ? 'Edit Vehicle' : 'Register Vehicle'}
      </h2>
      <h5>License Plate Number</h5>
      <input
        type='text'
        placeholder='Plate number...'
        name='plateNumber'
        value={currentVehicle.plateNumber} // the destructured value from vehicle
        onChange={onChange}
        required
      />
      <h5>Manufacturer</h5>
      <input
        type='text'
        placeholder='Manufacturer...'
        name='manufacturer'
        value={currentVehicle.manufacturer}
        onChange={onChange}
        required
      />
      <h5>Type</h5>
      <input
        type='text'
        placeholder='Type'
        name='type'
        value={currentVehicle.type}
        onChange={onChange}
        required
      />
      <h5>Inspection Date</h5>
      <input
        type='date'
        placeholder='Inspection date...'
        name='inspection'
        value={currentVehicle.inspection}
        onChange={onChange}
        required
      />
      <h5>Owner's name</h5>
      <input
        type='text'
        placeholder='Owner'
        name='owner'
        value={currentVehicle.owner}
        onChange={onChange}
        required
      />
      <h5>Insurence company</h5>
      <input
        type='text'
        placeholder='Insurence company'
        name='insurence'
        value={currentVehicle.insurence}
        onChange={onChange}
        required
      />
      <div>
        <input
          type='submit'
          value={vehicle.current ? 'Update Vehicle' : 'Add Vehicle'}
          className='btn btn-primary btn-block'
          onChange={onChange}
        />
      </div>
      <div>
        {vehicle.current && (
          <div>
            <button className='btn btn-dark btn-block' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default VehicleForm;
