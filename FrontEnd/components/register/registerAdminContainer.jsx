'use strict';
import React, {Component} from 'react';
import SISService from '../../services/SISService'
import AdminRegistrationValidation from '../../validation/admin/registration';
import EmailService from "../../services/EmailService";

export default class RegisterAdminContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Email: '',
            Username: '',
            Password: '',
            ConfirmPassword: ''
        };
        this.SISService = new SISService();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    clearForm(e) {
        this.setState({
            Email: '',
            Username: '',
            Password: '',
            ConfirmPassword: ''
        });
    }

    onSubmit(e) {
        e.preventDefault();
        let myAdminRegistrationValidation = new AdminRegistrationValidation(this.state.Username, this.state.Password, this.state.ConfirmPassword);
        if (myAdminRegistrationValidation.validate) {
            this.SISService.addAdmin({
                'userName': this.state.Username,
                'password': this.state.Password,
                'email': this.state.Email
            }).then(response => {
                alert(response.data.message);
                if (response.data.status === "200") {
                    let myEmailService = new EmailService();
                    myEmailService.sendEmailToAdmin(this.state.Email, this.state.Username);
                    document.location.href = "adminHome.html";
                }
            });
        }
    }

    render() {
        return <div className="container-contact100">
            <div className="wrap-contact100">
                <span className="backArrow" onClick={() => {
                    document.location.href = "manageAdmin.html";
                }}>&#8592; Back</span>

                <form className="contact100-form validate-form" onSubmit={this.onSubmit}>
				<span className="contact100-form-title">
					Register Admin
				</span>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Email</span>
                        <input className="input100" type="email" required={true} value={this.state.Email}
                               onChange={this.onChange} name="Email" placeholder="danielasplund@gmail.com"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Username</span>
                        <input className="input100" type="text" required={true} value={this.state.Username}
                               onChange={this.onChange} name="Username"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Password</span>
                        <input className="input100" type="password" required={true} name="Password"
                               value={this.state.Password}
                               onChange={this.onChange}></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Confirm Password</span>
                        <input className="input100" type="password" required={true} name="ConfirmPassword"
                               value={this.state.ConfirmPassword}
                               onChange={this.onChange}></input>
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
                                        <DangerTip title="Failed!" description={this.state.errorMessage}/>
                                    </div>
                                ) : null
                        }
                    </div>
                </form>
            </div>
        </div>;
    }
}