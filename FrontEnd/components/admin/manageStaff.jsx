import React, { Component } from 'react'

export default class ManageStaffContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <button onClick={() => { document.location.href = "registerLecturer.html";}}>Add Staff Member</button>
            </div>
        )
    }
}
