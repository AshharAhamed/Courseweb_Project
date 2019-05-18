'use strict';
import React, {Component} from 'react';
import SISService from '../../services/SISService';
import axios from 'axios';
import MailService from '../../services/MailService'
import UserService from "../../services/UserService";
import * as mailService from "nodemailer";

export default class RegisterLecturerContainer extends Component {
    constructor(props) {
        super(props);

        this.sisService = new SISService();

        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Mobile: '',
            DoB: '',
            NIC: '',
            StaffID : ''
        };
        this.mailService = new MailService();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });

        setTimeout(() => {
            let isValid = true;

            for (let property in this.state) {

                if (this.state.hasOwnProperty(property)) {

                    if (property === 'isValid' || property === 'errorMessage')
                        continue;

                    let val = this.state[property];

                    if (val === null || val === undefined || val === '') {
                        isValid = false;
                        break;
                    }
                }
            }

            if (this.state.errorMessage) {
                this.setState({
                    isValid: isValid,
                    errorMessage: null
                });
            }
            else {
                this.setState({ isValid: isValid });
            }

        }, 100);
    }

    clearForm(e) {

        this.setState({
            FirstName: '',
            LastName: '',
            Email: '',
            Mobile: '',
            DoB: '',
            NIC: '',
            StaffID : ''
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.refs.Faculty) {
            var faculty = this.refs.Faculty.value;
        }
        if (this.refs.adminMode) {
            var adminMode = this.refs.adminMode.value;
        }
        if (this.refs.Gender) {
            var Gender = this.refs.Gender.value;
        }
        axios.post('http://localhost:3001/lecturers/addLecturer', {
            'FirstName': this.state.FirstName,
            'LastName': this.state.LastName,
            'Email': this.state.Email,
            'Mobile' : this.state.Mobile,
            'DoB' : this.state.DoB,
            'NIC' : this.state.NIC,
            'StaffID' : this.state.StaffID,
            'Username' : this.state.StaffID,
            'Password' : this.state.NIC,
            'Faculty' : faculty,
            'Gender' : Gender,
            'AdminStatus' : adminMode
        }).then(res =>{
            if (res.status === 200){
                this.mailService.sendMail();
                document.location.href = "adminHome.html"
            }
            console.log(res.data);
        })
    }

    render() {
        return <div className="container-contact100">
            <div className="wrap-contact100">
                <span className="backArrow" onClick={() => { document.location.href = "manageStaff.html";}}>&#8592; Back</span>

                <form className="contact100-form validate-form" onSubmit={this.onSubmit}>
				<span className="contact100-form-title">
					Register Lecturer
				</span>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">First Name</span>
                        <input className="input100" type="text" required={true} value={this.state.FirstName} onChange={this.onChange}  name="FirstName" placeholder="Daniel"/>
                        <span className="focus-input100" ></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Last Name</span>
                        <input className="input100" type="text" required={true} value={this.state.LastName} onChange={this.onChange} name="LastName" placeholder="Asplund"/>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Email</span>
                        <input className="input100" type="email" required={true} value={this.state.Email} onChange={this.onChange} name="Email" placeholder="danielasplund@gmail.com"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Mobile No</span>
                        <input className="input100" type="number" required={true} value={this.state.Mobile} onChange={this.onChange} name="Mobile" placeholder="0711234567"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Date of Birth</span>
                        <input className="input100" type="date" required={true} name="DoB" value={this.state.DoB} onChange={this.onChange} placeholder="Enter your Date of Birth"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">NIC</span>
                        <input className="input100" type="text" required={true} name="NIC" value={this.state.NIC} onChange={this.onChange} placeholder="971234567V"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Staff ID is required">
                        <span className="label-input100">Staff ID</span>
                        <input className="input100" type="text" required={true} name="StaffID" value={this.state.StaffID} onChange={this.onChange} placeholder="ST12345678"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select User Type</span>
                        <div>
                            <select className="selection-2" name="adminMode" ref="adminMode">
                                <option value="1">Admin</option>
                                <option value="0">Non Admin</option>
                            </select>
                        </div>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select Faculty</span>
                        <div>
                            <select className="selection-2" name="faculty" ref="Faculty">
                                <option value="Faculty of Computing">Faculty of Computing</option>
                                <option value="Faculty of Business">Faculty of Business</option>
                                <option value="Faculty of Engineering">Faculty of Engineering</option>
                            </select>
                        </div>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select your Gender</span>
                        <div>
                            <select className="selection-2" name="gender" ref="Gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                        <div className="wrap-contact100-form-btn">
                            <div className="contact100-form-bgbtn"></div>
                            <button className="contact100-form-btn">
							<span>
                                Register
                            <input type="submit" disabled={!this.state.isValid} value=""/>
								<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
							</span>
                            </button>
                        </div>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-6 mt-1">
                            <button className="btn btn-secondary btn-block" onClick={this.clearForm}>Clear</button>
                        </div>

                        {
                            this.state.errorMessage ?
                                (
                                    <div className="col-lg-12 mt-3">
                                        <DangerTip title="Failed!" description={this.state.errorMessage} />
                                    </div>
                                ) : null
                        }
                    </div>
                </form>
            </div>
        </div>;
    }
}