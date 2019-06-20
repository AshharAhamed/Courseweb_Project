import React, {Component} from 'react';
import OneCourse from "./oneCourse";
import CourseService from "../../../services/CourseService";

export default class CourseList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            courses :[]
        }
        this.courseService = new CourseService()
    }

    componentDidMount() {
        this.courseService.getAllCourses().then(response=>{
            this.setState({
                courses : response.data
            });
        }).catch(err=>{
            console.log(err);
        })
    }

    tableRow(){
        return this.state.courses.map(function (object,i) {
            return <OneCourse obj={object} key={i}/>
        })
    }
    render(){
        return <div>
            <div className="tableClass">
                <h4>Courses</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Incharg Lecture</th>
                        <th>Year</th>
                        <th>Semester</th>
                        <th>Faculty</th>
                        <th>Department</th>
                        <th>CourseAddedDate</th>
                        <th>NumberOfEnrolledStudent</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tableRow()}
                    </tbody>
                </table>
            </div>
        </div>
    }
}
