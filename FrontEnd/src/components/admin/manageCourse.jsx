import React,{Component} from 'react';
import NavigationBar from "../layouts/navigationBar";
import {Button} from "react-bootstrap";
import CourseList from "./list/courseList";
import PageFooter from '../layouts/footer'

export default class ManageCourse extends Component{

    render() {
        return (<div>
            <NavigationBar/>
            <div>
                <Button color="success" onClick={() => {
                    window.location.href = "/registerLecturer";
                }}>Add Staff Member</Button>
            </div>
            <CourseList/>
            <PageFooter/>
        </div>)
    }
}