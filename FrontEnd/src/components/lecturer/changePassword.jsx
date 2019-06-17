import React, {Component} from 'react';
import UserService from '../../services/UserService'
import SISService from '../../services/SISService'
import AdminRegistrationValidation from "../../validations/admin/registration";
import Footer from '../layouts/footer'
import NavigationBar from '../layouts/navigationBar'

export default class LecturerPassword extends Component {
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
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            edit: true,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        let myLecturerPasswordValidation = new AdminRegistrationValidation(null, this.state.newPassword1, this.state.newPassword2);
        if (myLecturerPasswordValidation.isPassword) {
            this.SISService.changePassword({
                "Username": this.userService.username,
                "OldPassword": this.state.oldPassword,
                "NewPassword": this.state.newPassword1
            }).then(response => {
                alert(response.data.message);
                window.location.reload();
            }).catch(error => {
                console.log(error);
            });
        }
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container p-2" style={{marginBottom: '500px', paddingBottom: '500px'}}>
                    <form onSubmit={this.onSubmit}>
                        <div className="wrap-input100 validate-input" data-validate="Name is required">
                            <span className="label-input100">Old Password : </span>
                            <input className="input100" type="password" required={true} value={this.state.oldPassword}
                                   onChange={this.onChange} name="oldPassword"/>
                            <span className="focus-input100"/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Name is required">
                            <span className="label-input100">Password : </span>
                            <input className="input100" type="password" required={true} value={this.state.newPassword1}
                                   onChange={this.onChange} name="newPassword1"/>
                            <span className="focus-input100"/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Name is required">
                            <span className="label-input100">Confirm Password : </span>
                            <input className="input100" type="password" required={true} value={this.state.newPassword2}
                                   onChange={this.onChange} name="newPassword2"/>
                            <span className="focus-input100"/>
                        </div>

                        <div className="col-lg mt-3">
                            <input type="submit" className="btn btn-info btn-block" value="Change Password"/>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
}