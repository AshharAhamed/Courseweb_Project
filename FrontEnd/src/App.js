import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/login/login'
import RegisterStudent from './components/register/registerStudent'
import UserService from './services/UserService'
import LecturerHome from './components/lecturer/lecturerDashboard'
import LecturerProfile from './components/lecturer/profile'
import ChangePassword from './components/lecturer/changePassword'

import AdminHome from './components/admin/adminDashboard'
import ManageStaff from './components/admin/manageStaff'
import RegisterLecturer from './components/admin/registerLecturer'
import ManageAdmin from './components/admin/manageAdmin'
import RegisterAdmin from './components/admin/registerAdmin'


class App extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            isLoggedIn: this.userService.isLoggedIn
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/registerStudent" component={RegisterStudent}/>
                    <Route exact path="/lecturerHome" component={LecturerHome}/>
                    <Route exact path="/lecturerProfile" component={LecturerProfile}/>
                    <Route exact path="/changePassword" component={ChangePassword}/>


                    <Route exact path="/adminHome" component={AdminHome}/>
                    <Route exact path="/manageStaff" component={ManageStaff}/>
                    <Route exact path="/registerLecturer" component={RegisterLecturer}/>
                    <Route exact path="/manageAdmin" component={ManageAdmin}/>
                    <Route exact path="/registerAdmin" component={RegisterAdmin}/>

                </div>
            </Router>
        );
    }
}

export default App;