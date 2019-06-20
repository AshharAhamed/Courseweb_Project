import React,{Component} from 'react';
import NavigationBar from "../layouts/navigationBar";
import {Button} from "react-bootstrap";
import CourseList from "./list/courseList";
import PageFooter from '../layouts/footer'
import Ripples from "react-ripples";


export default class ManageCourse extends Component{

    render() {
        return (<div>
            {/*<QueueAnim duration="3000" interval="400">*/}
                <NavigationBar/>
                <div>
                        <Button className="btn-primary btn-success" onClick={() => {
                            window.location.href = "/addCourse";
                        }}> <i className="fa  fa-file-text"/> Add Course</Button>
                </div>
                <CourseList/>
                <PageFooter/>
            {/*</QueueAnim>*/}
        </div>)
    }
}