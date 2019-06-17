import React, {Component} from 'react';
import NavigationBar from '../layouts/navigationBar'
import PageFooter from '../layouts/footer'
import AdminList from './list/adminList'
import {Button} from "react-bootstrap";

export default class ManageAdmin extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div>
                    <Button color="success" onClick={() => {
                        window.location.href = "/registerAdmin";
                    }}>Add Admin</Button>
                </div>
                <AdminList/>
                <PageFooter/>
            </div>
        )
    };
}