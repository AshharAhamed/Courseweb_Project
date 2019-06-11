import React, {Component} from 'react';
import UserService from '../../../services/UserService'
import SISService from '../../../services/SISService'
// import axios from 'axios'

export default class LecturerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword1: '',
            newPassword2: ''
        };
        this.userService = new UserService();
        this.SISService = new SISService();
        this.onChange = this.onChange.bind(this);
        // this.loadUserDetails.bind(this);
        let username = this.userService.username;
        // this.loadUserDetails(username);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            edit: true,
        });
    }

    // loadUserDetails(username) {
    //     this.SISService.getMemberProfile(username).then(response => {
    //         let oldDate = new Date(response.data.DoB),
    //             month = '' + (oldDate.getMonth() + 1),
    //             day = '' + oldDate.getDate(),
    //             year = oldDate.getFullYear();
    //         if (month.length < 2)
    //             month = '0' + month;
    //         if (day.length < 2)
    //             day = '0' + day;
    //         const myDate = [year, month, day].join('-');
    //         this.setState({
    //             firstName: response.data.FirstName,
    //             lastName: response.data.LastName,
    //             email: response.data.Email,
    //             mobile: response.data.Mobile,
    //             dob: myDate,
    //             nic: response.data.NIC,
    //             staffId: response.data.StaffID,
    //             faculty: response.data.Faculty,
    //             gender: response.data.Gender,
    //             userName: response.data.Username
    //         });
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    onSubmit(e) {
        e.preventDefault();
        // this.SISService.modifyMember(this.state.userName, {
        //     FirstName: this.state.firstName,
        //     LastName: this.state.lastName,
        //     Email: this.state.email,
        //     Mobile: this.state.mobile,
        //     DoB: this.state.dob,
        //     NIC: this.state.nic,
        //     StaffID: this.state.staffId,
        //     Faculty: this.state.faculty,
        //     Gender: this.state.gender
        // }).then(response => {
        //     console.log(response);
        //     alert('Your Profile has been Successfully Updated');
        // }).catch(error => {
        //     console.log(error);
        // });
    }

    render() {
        return (
            <div className="container p-2" style={{marginBottom: '500px', paddingBottom: '500px'}}>
                <form onSubmit={this.onSubmit}>
                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Old Password : </span>
                        <input className="input100" type="password" required={true} value={this.state.oldPassword}
                               onChange={this.onChange} name="oldPassword"/>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">New Password : </span>
                        <input className="input100" type="password" required={true} value={this.state.newPassword1}
                               onChange={this.onChange} name="newPassword1"/>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Confirm Password</span>
                        <input className="input100" type="password" required={true} value={this.state.newPassword2}
                               onChange={this.onChange} name="newPassword2" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="col-lg mt-3">
                        <input type="submit" className="btn btn-info btn-block" value="Change"/>
                    </div>
                </form>
            </div>
        );
    }
}