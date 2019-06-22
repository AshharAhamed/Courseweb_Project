import React, {Component} from 'react'
import {Link} from "react-router-dom";


class OneCourse extends Component{
    constructor(props){
        super(props);
        this.state ={
            course:{},

        };
        this.delete=this.delete.bind(this);
        this.editCourse=this.editCourse.bind(this);
    }

    editCourse(){

    }

    delete(){

    }
   render() {
        return (
            <tr>
                <td>{this.props.obj.CourseId}</td>
                <td>{this.props.obj.CourseName}</td>
                <td>{this.props.obj.EnrollementKey}</td>
                <td>{this.props.obj.InchargLecture}</td>
                <td>{this.props.obj.Year}</td>
                <td>{this.props.obj.Semester}</td>
                <td>{this.props.obj.Faculty}</td>
                <td>{this.props.obj.Department}</td>
                <td>{this.props.obj.CourseAddedDate}</td>
                <td>{this.props.obj.NumberOfEnrolledStudent}</td>
                {this.props.obj.AcceptByLectureFlag == 0? <td>Lecturer not Accept</td>: <td>Lecturer Accepted</td> }
                <td>
                    <Link to={"/editCourse/"+this.props.obj.CourseId} className="btn btn-warning"><i
                        className="fa fa-edit"/> Edit </Link><a> </a>
                    <button onClick={this.delete} className="btn btn-danger">Delete  <i className="fa fa-trash"/></button>
                </td>
            </tr>
        )
   }
}

export default OneCourse;