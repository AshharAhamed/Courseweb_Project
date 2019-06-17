import React, {Component} from 'react';
import NavigationBar from '../layouts/navigationBar'
import PageFooter from '../layouts/footer'

export default class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <PageFooter/>
            </div>
        )
    };
}