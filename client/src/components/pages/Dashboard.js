import React,{useEffect} from 'react'
import './Dashboard.css'
import VehicleItem from '../vehicle/VehicleItem';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../layout/Spinner";
import {editProfile} from '../../actions/authAction'
import { getVehicles } from "../../actions/vehicleAction";
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state=>state.auth)
    const vehicle = useSelector(state=>state.vehicle)

    const EditOption = ()=>{
        dispatch(editProfile())
    }

    useEffect(() => {
        dispatch(getVehicles());
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="profile-container">
                <div className="profile-title">
                    Profile
                </div>
                <div className="profile-details">
                    Name: {auth?.user?.name}
                </div>
                <div className="profile-details">
                        Email: {auth?.user?.email}
                </div>
                <div className="float-right">
                    <button className="edit-button">
                        Edit Profile
                    </button>
                </div>
            </div>
            <div>
            <div>
                <div><h2>Vehicles Added by User</h2></div>
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
            </div>
            </div>
            <div id="login" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    
                    <div class="modal-content">
                    <div class="modal-body">
                        <button data-dismiss="modal" class="close">&times;</button>
                        <h4>Login</h4>
                        <form>
                        <input type="text" name="username" class="username form-control" placeholder="Username"/>
                        <input type="password" name="password" class="password form-control" placeholder="password"/>
                        <input class="btn login" type="submit" value="Login" />
                        </form>
                    </div>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Dashboard
