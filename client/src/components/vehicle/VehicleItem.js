import React from 'react';
import {
  deleteVehicle,
  setCurrent,
  clearCurrent
} from '../../actions/vehicleAction';
import {useDispatch } from 'react-redux';

const VehicleItem = ({vehicle}) => {
  const dispatch = useDispatch()
  const {
    _id,
    plateNumber,
    manufacturer,
    type,
    inspection,
    owner,
    insurence
  } = vehicle;

  const onDelete = () => {
    dispatch(deleteVehicle(_id));
    dispatch(clearCurrent());
  };

  const onEdit = ()=>{
    dispatch(setCurrent(vehicle))
  }

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        <i className='fa fa-car'></i> {plateNumber}{' '}
        <span style={{ float: 'right' }} className='badge badge-success'>
          {manufacturer[0].toUpperCase() + manufacturer.substr(1)}
        </span>
      </h3>
      <ul className='list'>
        {type && (
          <li>
            <i className='fas fa-industry'></i>
            <span style={{ marginRight: '3px' }}>Type:</span>
            {type}
          </li>
        )}
        {inspection && (
          <li>
            <i className='fas fa-clock'></i>{' '}
            <span style={{ marginRight: '5px' }}>Inspection date:</span>
            {inspection}
          </li>
        )}
        {owner && (
          <li>
            <i className='fas fa-file-signature'></i>{' '}
            <span style={{ marginRight: '3px' }}>Owner's Name:</span>
            {owner}
          </li>
        )}
        {insurence && (
          <li>
            <i className='fas fa-building'></i>{' '}
            <span style={{ marginRight: '3px' }}>Insurence Company:</span>
            {insurence}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={onEdit}>
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default VehicleItem;
