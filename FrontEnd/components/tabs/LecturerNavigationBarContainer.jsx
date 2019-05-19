'use strict';
import React, {Component} from 'react';
import UserService from "../../services/UserService";

export default class LecturerNavigationBarContainer extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.logOut = this.logOut.bind(this);
    }
    logOut(){
        this.userService.logout();
        document.location.href = "login.html";
    }
    render() {
        return <div><nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" >Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >Manage Exams</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >Manage Assignments</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  onClick={() => { document.location.href = "lecturerProfile.html";}}>My Profile</a>
                </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto">
                    <a className="navbar-brand" onClick={this.logOut}>Log Out<i className="fa fa-sign-out" style={{margin : '12px'}}></i></a>
                </ul>
            </div>
        </nav></div>;
    }
}