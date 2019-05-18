import React, { Component } from 'react'
import axios from "axios";

class OneAdminMember extends Component {
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
        axios.delete('http://localhost:8080/admins/' + this.props.obj.userName).then(response => {
            console.log('Deleted')
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.userName}</td>
                <td>{this.props.obj.email}</td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default OneAdminMember;
