import React, {Component} from 'react'
import SISService from '../../../services/SISService'
import Modal from "react-awesome-modal";
import AdminRegistrationValidation from "../../../validations/admin/registration";
import Ripples from "react-ripples";
import {Button} from "react-bootstrap";

class OneCourse extends Component{
    constructor(props){
        super(props);
        this.state ={
            course:{},
            visibleModal: false,
            enrollmentKey : ''
        };
        this.SISService = new SISService();
        this.enroll = this.enroll.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            visibleModal: true
        });
    }

    closeModal() {
        this.setState({
            visibleModal: false
        });
    }

    enroll(e) {
        e.preventDefault();
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.CourseId}</td>
                <td>{this.props.obj.CourseName}</td>
                <td>{this.props.obj.InchargLecture}</td>
                <td>{this.props.obj.Year}</td>
                <td>{this.props.obj.Semester}</td>
                <td>{this.props.obj.Faculty}</td>
                <td>{this.props.obj.Department}</td>
                <td>
                    <button style={{marginRight: '10px'}} onClick={() => this.openModal()} className="btn btn-warning">Enroll  <i className="fa fa-edit"/></button>
                </td>

                <Modal visible={this.state.visibleModal} width="500" height="200" effect="fadeInRight"
                       onClickAway={() => this.closeModal()}>
                    <i className="fa fa-times" onClick={() => this.closeModal()} aria-hidden="true" style={{marginLeft : "480px"}}/>
                    <div className="container p-2" style={{marginBottom: '500px', paddingBottom: '500px'}}>
                        <form onSubmit={this.onSubmitPassword}>
                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Enrollement Key : </span>
                                <input className="input100" type="password" required={true}
                                       value={this.state.enrollmentKey}
                                       onChange={this.onChange} name="oldPassword"/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="col-lg mt-3">
                                <input type="submit" className="btn btn-info btn-block" value="Enroll"/>
                            </div>
                        </form>
                    </div>
                </Modal>

            </tr>
        )
    }
}

export default OneCourse;