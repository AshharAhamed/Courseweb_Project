'use strict';
import React, {Component} from 'react';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Username: '',
            Password: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        document.location.href = "home.html"
    }

    render() {
        return <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form" onSubmit={this.onSubmit}>
                    <span className="contact100-form-title">
					Log In!
				</span>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Username</span>
                        <input className="input100" type="text" required={true} value={this.state.Username} onChange={this.onChange}  name="Username"/>
                        <span className="focus-input100" ></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Password</span>
                        <input className="input100" type="password" required={true} value={this.state.Password} onChange={this.onChange} name="Password"/>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                        <div className="wrap-contact100-form-btn">
                            <div className="contact100-form-bgbtn"></div>
                            <button className="contact100-form-btn">
							<span>
                                Log In
                            <input type="submit" value=""/>
								<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
							</span>
                            </button>
                        </div>
                    </div>


                    <div className="row mt-5">
                        <div className="col-lg-6 mt-1">
                            <button onClick={() => { document.location.href = "registerStudent.html";}} className="btn btn-secondary btn-block" style={{width: '250px'}}>New Student ? Register Here</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>;
    }
}