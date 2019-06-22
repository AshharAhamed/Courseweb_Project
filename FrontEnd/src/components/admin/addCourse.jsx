import React, {Component} from 'react';
import {Link} from "react-router-dom";
import CourseService from "../../services/CourseService";

export default class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CourseName: '',
            InchargLecture : '',
            CourseId: '',
            EnrollKey: '',
            NumberOfEnrolledStudent: '',
            Year: '',
            Semester: '',
            Faculty: '',
            Department: '',
            CourseAddedDate: '',
            AcceptByLectureFlag: 0
        };
        this.courseService = new CourseService();
        this.onChange = this.onChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    clearForm(e) {
        this.setState({
            CourseName: '',
            CourseId: '',
            InchargLecture : '',
            NumberOfEnrolledStudent: '',
            Year: '',
            Semester: '',
            Faculty: '',
            Department: '',
            CourseAddedDate : ''
        });
    }

    onSubmit(e){
        e.preventDefault();
        if (this.refs.Faculty) {
            var faculty = this.refs.Faculty.value;
        }

        if (this.refs.Year) {
            var year = this.refs.Year.value;
        }

        if (this.refs.Semester) {
            var semester = this.refs.Semester.value;
        }

        var currentDate = new Date();
        var dateInFormate = currentDate.getDay()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getFullYear();
       const data = {
            'CourseName': this.state.CourseName,
            'CourseId': this.state.CourseId,
            'InchargLecture' : this.state.InchargLecture,
            'EnrollmentKey' : this.state.EnrollKey,
            'NumberOfEnrolledStudent': 0,
            'Year': year,
            'Semester': semester,
            'Faculty': faculty,
            'Department': this.state.Department,
            'CourseAddedDate' : dateInFormate,
            'AcceptByLectureFlag': 0
        }
        console.log(data);
        this.courseService.addCourse(data).then(response =>{
            alert(response.data.message);
            if(response.data.status === 200){
                window.location.href = "/manageCourse"
            }
        })
    }

    render() {
        return <div className="container-contact100">
            <div className="wrap-contact100">
                <div className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <div className="navbar-brand"><Link className="navbar-brand" to="/manageCourse"><i
                            className="fa fa-arrow-circle-left" style={{margin: '12px'}}/>Back
                        </Link></div>
                    </ul>
                </div>

                <form className="contact100-form validate-form" onSubmit={this.onSubmit}>
				<span className="contact100-form-title">
					Add New Course
				</span>

                    <div className="wrap-input100 validate-input" data-validate="Course ID is required">
                        <span className="label-input100">Course ID</span>
                        <input className="input100" type="text" value={this.state.CourseId} onChange={this.onChange}
                               name="CourseId" placeholder="SE3020/CS2020" required={true}/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Course ID is required">
                        <span className="label-input100">Course Name</span>
                        <input className="input100" type="text" value={this.state.CourseName} onChange={this.onChange}
                               name="CourseName" placeholder="Software Architecture" required={true}/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Course ID is required">
                        <span className="label-input100">Enrollement Key</span>
                        <input className="input100" type="text" value={this.state.EnrollKey} onChange={this.onChange}
                               name="EnrollKey" placeholder="SE@123" required={true}/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Incharg Lecture is required">
                        <span className="label-input100">Incharg Lecture</span>
                        <input className="input100" type="text" value={this.state.InchargLecture} onChange={this.onChange}
                               name="InchargLecture" placeholder="Paul" required={true}/>
                        <span className="focus-input100"/>
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
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select Year</span>
                        <div>
                            <select className="selection-2" name="year" ref="Year">
                                <option value="1">1st year</option>
                                <option value="2">2nd year</option>
                                <option value="3">3rd year</option>
                                <option value="4">4th year</option>
                            </select>
                        </div>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select Semester</span>
                        <div>
                            <select className="selection-2" name="semester" ref="Semester">
                                <option value="1">1st Semester</option>
                                <option value="2">2nd Semester</option>
                            </select>
                        </div>
                        <span className="focus-input100"/>
                    </div>


                    <div className="wrap-input100 validate-input" data-validate="Course ID is required">
                        <span className="label-input100">Department</span>
                        <input className="input100" type="text" value={this.state.Department} onChange={this.onChange}
                               name="Department" placeholder="SE/IT/CS" required={true}/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="container-contact100-form-btn">
                        <div className="wrap-contact100-form-btn">
                            <div className="contact100-form-bgbtn"/>
                            <button className="contact100-form-btn">
							<span>
                                Add
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
        </div>;
    }
}
