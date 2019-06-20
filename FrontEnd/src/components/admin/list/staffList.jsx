import React, {Component} from 'react'
import OneStaffMember from "./oneStaffMenber"
import SISService from '../../../services/SISService'

export default class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffMembers: []
        };
        this.SISService = new SISService();

    }

    componentDidMount() {
        this.SISService.getStaffList().then(response => {
            this.setState({staffMembers: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }


    tabRow() {
        return this.state.staffMembers.map(function (object, i) {
            return <OneStaffMember obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <div className="tableClass">
                    <h4>Registered Lecturers</h4>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Staff ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Faculty</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}