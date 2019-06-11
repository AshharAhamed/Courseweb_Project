import React, {Component} from 'react'
import axios from "axios";
import SISService from '../../services/SISService'

class OneStaffMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            type: "",
            edit: false
        };
        this.SISService = new SISService();
        this.delete = this.delete.bind(this);
    }

    delete() {
        this.SISService.deleteStaffMember(this.props.obj.StaffID).then(response => {
            alert(response.data.message);
            window.location.reload();
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.StaffID}</td>
                <td>{this.props.obj.FirstName}</td>
                <td>{this.props.obj.LastName}</td>
                <td>{this.props.obj.Email}</td>
                <td>{this.props.obj.Faculty}</td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default OneStaffMember;
