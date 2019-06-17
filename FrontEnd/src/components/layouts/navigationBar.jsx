import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserService from '../../services/UserService'

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            isLoggedIn: this.userService.isLoggedIn,
            userType: this.userService.Type
        };
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                {
                    (this.state.isLoggedIn && this.state.userType === "Lecturer") ? (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/lecturerHome">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">My Courses</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">My Notifications</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/lecturerProfile">My Profile</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/changePassword">Change Password</Link>
                            </li>
                        </ul>
                    ) : (this.state.isLoggedIn && this.state.userType === "Admin") ? (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/adminHome">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/manageAdmin">Manage Admin Panel</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/manageStaff">Manage Staff Panel</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="">Manage Courses</Link>
                            </li>
                        </ul>
                    ) : null


                }
                <div className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <div className="navbar-brand"><Link className="navbar-brand" to="/login">Log Out <i
                            className="fa fa-sign-out" style={{margin: '12px'}}/>
                        </Link></div>
                    </ul>
                </div>
            </nav>)
    };
}