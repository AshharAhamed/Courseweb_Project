import React, { Component } from 'react'
import {Table, Button, ButtonGroup} from 'reactstrap';
import axios from "axios";
import OneStaffMember from "./oneStaffMember"

export default class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffMembers: []
        };
        this.loadPatientList();
    }

    loadPatientList() {
        axios.get('http://localhost:3001/lecturers').then(data => {
            this.setState({staffMembers: data.data});
        });

    }

    listRender() {

        let staffJSX = [];

        for (let ind = 0, len = this.state.staffMembers.length; ind < len; ind++) {

            staffJSX.push(<OneStaffMember key={this.state.staffMembers[ind].StaffID} lecturer={this.state.staffMembers[ind]}/>);
        }

        return staffJSX;
    }

    render() {

        return (
            <div>
                <h4>Registered Lecturers</h4>


                <table className="table">
                    <thead>
                    <tr>
                        <th>Staff ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Faculty</th>
                        <th>Admin</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        (this.state.staffMembers.length > 0) ?
                            this.listRender() : null
                    }
                    </tbody>
                </table>
            </div>
        )
    }

    // onDelete(id){
    //     if(id){
    //         axios.delete('http://localhost:3001/lecturers/'+id).then(data => {
    //             let staffMembers = this.state.staffMembers;
    //             let index = staffMembers.findIndex(x => x.id === id);
    //             staffMembers.splice(index, 1);
    //             this.setState({ staffMembers: staffMembers });
    //             alert(`${data.data.id} - ${data.data.name} Deleted!`);
    //         });
    //
    //     }
    // }
    // onUpdate(id){
    //
    //     this.props.history.push(''+id);
    // }
    // onView(){
    //
    // }
    // componentWillUnmount() {
    //     //this.loadMedicineList();
    // }
    //
    // componentDidMount() {
    //     this.loadMedicineList();
    // }
    //
    // render() {
    //     const render = function () {
    //         let StaffMembers;
    //         StaffMembers = this.state.StaffMembers.map(m => {
    //             return (
    //                 <tr key={m.id}>
    //                     <td>{m.StaffID}</td>
    //                     <td>{m.FirstName}</td>
    //                     <td>{m.LastName}</td>
    //                     <td>{m.Email}</td>
    //                     <td>{m.Faculty}</td>
    //                     <td>
    //                         <ButtonGroup>
    //                             <Button color="success" size="sm">View</Button>
    //                             <Button color="warning" size="sm" onClick={this.onUpdate.bind(this, m.id)}>Edit</Button>
    //                             <Button color="danger" size="sm" onClick={this.onDelete.bind(this, m.id)}>Delete</Button>
    //                         </ButtonGroup>
    //                     </td>
    //                 </tr>
    //             );
    //         });
    //         return (
    //
    //             <div>
    //                 <Table hover>
    //                     <thead>
    //                     <tr>
    //                         <th>Staff ID</th>
    //                         <th>First Name</th>
    //                         <th>Last Name</th>
    //                         <th>Email</th>
    //                         <th>Faculty</th>
    //                         <th>Action</th>
    //                     </tr>
    //                     </thead>
    //                     <tbody>
    //                     {StaffMembers}
    //                     </tbody>
    //                 </Table>
    //             </div>
    //         );
    //     };
    // }
}


// export default render;
