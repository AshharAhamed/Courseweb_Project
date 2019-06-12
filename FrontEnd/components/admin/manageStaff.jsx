import React, {Component} from 'react'
import {Button} from 'reactstrap';

export default class ManageStaffContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button color="success" onClick={() => {
                    document.location.href = "registerLecturer.html";
                }}>Add Staff Member</Button>
            </div>
        )
    }
}
