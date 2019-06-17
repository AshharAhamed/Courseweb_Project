import React, {Component} from 'react';
import UserService from '../../services/UserService'
import NavigationBar from '../layouts/navigationBar'
import PageFooter from '../layouts/footer'

export default class LecturerDashboard extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            isLoggedIn: this.userService.isLoggedIn,
            userType : this.userService.Type
        };
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                    <PageFooter/>
            </div>
        )
    };
}