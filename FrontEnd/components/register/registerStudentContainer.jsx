'use strict';
import React, {Component} from 'react';

export default class RegisterStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Mobile: '',
            DoB: '',
            NIC: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearForm(e) {
        this.setState({
            FirstName: '',
            LastName: '',
            Email: '',
            Mobile: '',
            DoB: '',
            NIC: ''
        });
    }

    render() {
        return <div className="container-contact100">
            <div className="wrap-contact100">
                <span className="backArrow" onClick={() => {
                    document.location.href = "login.html";
                }}>&#8592; Back</span>

                <form className="contact100-form validate-form">
				<span className="contact100-form-title">
					Register!
				</span>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your First Name</span>
                        <input className="input100" type="text" required={true} value={this.state.FirstName}
                               onChange={this.onChange} name="FirstName" placeholder="Daniel"/>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your Last Name</span>
                        <input className="input100" type="text" required={true} value={this.state.LastName}
                               onChange={this.onChange} name="LastName" placeholder="Asplund"/>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your Email</span>
                        <input className="input100" type="email" required={true} value={this.state.Email}
                               onChange={this.onChange} name="Email" placeholder="danielasplund@gmail.com"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your Mobile No</span>
                        <input className="input100" type="number" required={true} value={this.state.Mobile}
                               onChange={this.onChange} name="Mobile" placeholder="0711234567"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your Date of Birth</span>
                        <input className="input100" type="date" required={true} name="DoB" value={this.state.DoB}
                               onChange={this.onChange} placeholder="Enter your Date of Birth"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your NIC</span>
                        <input className="input100" type="text" required={true} name="NIC" value={this.state.NIC}
                               onChange={this.onChange} placeholder="971234567V"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select your Faculty</span>
                        <div>
                            <select className="selection-2" name="gender">
                                <option value="FoC">Faculty of Computing</option>
                                <option value="FoB">Faculty of Business</option>
                                <option value="FoE">Faculty of Engineering</option>
                            </select>
                        </div>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select your Gender</span>
                        <div>
                            <select className="selection-2" name="gender">
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
                            <input type="submit" value=""/>
								<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
							</span>
                            </button>
                        </div>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-6 mt-1">
                            <button className="btn btn-secondary btn-block" onClick={this.clearForm}>Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>;
    }
}