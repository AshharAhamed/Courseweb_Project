import React, { Component } from 'react'
import {Button, ButtonGroup} from "reactstrap";
import axios from "axios";

export default class OneStaffMember extends Component {

    constructor(props) {
        super(props);
    }

    onDelete(id){
        console.log('Satglk123' + id);
        if(id){
            axios.delete('http://localhost:3001/lecturers/'+id).then(data => {
                console.log(data.status);
            });

        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.lecturer.StaffID}</td>
                <td>{this.props.lecturer.FirstName}</td>
                <td>{this.props.lecturer.LastName}</td>
                <td>{this.props.lecturer.Email}</td>
                <td>{this.props.lecturer.Faculty}</td>
                <td>{this.props.lecturer.AdminStatus.toString()}</td>
                <td>
                    <Button onClick={this.onDelete.bind(this, this.props.lecturer.StaffID)}>Update</Button>

                    <Button onClick={this.onDelete.bind(this, this.props.lecturer.StaffID)}>Delete</Button>
                </td>
            </tr>
        )
    }
}