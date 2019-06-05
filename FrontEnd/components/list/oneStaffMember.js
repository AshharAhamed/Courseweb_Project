import React, { Component } from 'react'
import axios from "axios";

class OneStaffMember extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            user: {},
            type: "",
            edit: false
        };
    }
    delete() {
        axios.delete('http://localhost:3000/lecturer/' + this.props.obj.StaffID).then(response => {
            alert(response.data.message);
            window.location.reload();
        }).catch(err => console.log(err))
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
