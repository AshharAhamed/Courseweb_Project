import React, {Component} from 'react';
import UserService from '../../services/UserService'
import SISService from '../../services/SISService'
import NavigationBar from '../layouts/navigationBar'
import Footer from '../layouts/footer'


export default class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CourseId: '',
            ExamId: '',
            Title: '',
            Type: '',
            TotalMarks: 0,
            PerFinalMark: 0,
            Date: '',
            Duration: '',
            CreatedBy: ''
        };
        this.userService = new UserService();
        this.SISService = new SISService();
        let username = this.userService.username;
        this.setState({CreatedBy: username});
        this.onChange = this.onChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.onSubmitExam = this.onSubmitExam.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            edit: true
        });
    }

    clearForm(e) {
        this.setState({
            CourseId: '',
            ExamId: '',
            Title: '',
            Type: '',
            TotalMarks: 0,
            PerFinalMark: 0,
            Date: '',
            Duration: ''
        });
    }

    onSubmitExam(e) {
        e.preventDefault();
        this.SISService.addNewExam( {
            CourseId: this.state.CourseId,
            ExamId: this.state.ExamId,
            Title: this.state.Title,
            Type: this.state.Type,
            TotalMarks: this.state.TotalMarks,
            PerFinalMark: this.state.PerFinalMark,
            Date: this.state.Date,
            Duration: this.state.Duration,
            CreatedBy: this.state.CreatedBy
        }).then(response => {
            console.log(response);
            alert('New Exam Successfully Added');
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container-contact100">
                    <div className="wrap-contact100">
                        <form className="contact100-form validate-form" onSubmit={this.onSubmitExam}>
				<span className="contact100-form-title">
					Add New Exam
				</span>

                            <div className="wrap-input100 validate-input" data-validate="Course ID is required">
                                <span className="label-input100">Course ID</span>
                                <input className="input100" type="text" value={this.state.CourseId} onChange={this.onChange}
                                       name="CourseId" placeholder="SE3020/CS2020" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                <span className="label-input100">Exam ID</span>
                                <input className="input100" type="text" value={this.state.ExamId} onChange={this.onChange}
                                       name="ExamId" placeholder="E001" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                <span className="label-input100">Title</span>
                                <input className="input100" type="text" value={this.state.Title} onChange={this.onChange}
                                       name="Title" placeholder="Software Architecture Online Exam" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 input100-select">
                                <span className="label-input100">Select Type of Examination</span>
                                <div>
                                    <select className="selection-2" name="Type" ref="Type" value={this.state.Type}>
                                        <option value="MCQ">M.C.Q.</option>
                                        <option value="WRITTEN">Written Exam</option>
                                        <option value="ONLINE">Online Exam</option>
                                        <option value="SPOT">Spot Test</option>
                                    </select>
                                </div>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                <span className="label-input100">Total Marks</span>
                                <input className="input100" type="number" value={this.state.TotalMarks} onChange={this.onChange}
                                       name="TotalMarks" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                <span className="label-input100">Percentage for Final GPA</span>
                                <input className="input100" type="number" value={this.state.PerFinalMark} onChange={this.onChange}
                                       name="PerFinalMark" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                <span className="label-input100">Scheduled Date</span>
                                <input className="input100" type="date" value={this.state.Date} onChange={this.onChange}
                                       name="Date" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Exam ID is required">
                                <span className="label-input100">Duration of Exam</span>
                                <input className="input100" type="text" value={this.state.Duration} onChange={this.onChange}
                                       name="Duration" placeholder="Hours/Minutes" required={true}/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="container-contact100-form-btn">
                                <div className="wrap-contact100-form-btn">
                                    <div className="contact100-form-bgbtn"/>
                                    <button className="contact100-form-btn">
							<span>
                                Add Exam
                            <input type="submit" value=""/>
								<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"/>
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
                </div>
                <Footer/>
            </div>
        );
    }
}
