import React, {Component} from 'react'


class OneCourse extends Component{
    constructor(props){
        super(props);
        this.state ={
            course:{},

        }
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
                <td>{this.props.obj.InchargLecture}</td>
                <td>{this.props.obj.Year}</td>
                <td>{this.props.obj.Semester}</td>
                <td>{this.props.obj.Faculty}</td>
                <td>{this.props.obj.Department}</td>
                <td>{this.props.obj.CourseAddedDate}</td>
                <td>{this.props.obj.NumberOfEnrolledStudent}</td>
                <td>
                    <button style={{marginRight: '10px'}} onClick={this.editCourse} className="btn btn-warning">Edit</button>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
   }
}

export default OneCourse;