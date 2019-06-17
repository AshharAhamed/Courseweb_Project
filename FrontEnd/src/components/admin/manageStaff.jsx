import React, {Component} from 'react';
import NavigationBar from '../layouts/navigationBar'
import PageFooter from '../layouts/footer'
import StaffList from './list/staffList'
import {Button} from "react-bootstrap";

export default class ManageStaffMembers extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div>
                    <Button color="success" onClick={() => {
                        window.location.href = "/registerLecturer";
                    }}>Add Staff Member</Button>
                </div>
                <StaffList/>
                <PageFooter/>
            </div>
        )
    };
}