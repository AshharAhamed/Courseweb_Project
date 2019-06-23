import React, {Component} from 'react'
import OneExamItem from "./oneExamItem"
import SISService from '../../../services/SISService'
import QueueAnim from "rc-queue-anim";
import UserService from '../../../services/UserService'

export default class ExamItemList extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            exams: [],
            CreatedBy: this.userService.username
        };
        this.SISService = new SISService();
    }

    componentDidMount() {
        this.SISService.getLectureExams(this.state.CreatedBy).then(response => {
            this.setState({exams: response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }

    tableRow() {
        return this.state.exams.map(function (object, i) {
            return <OneExamItem obj={object} key={i}/>;
        })
    }

    render() {
        return (
            <div className="tableClass">
                <h4>Exams</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th><QueueAnim><div key="1">Course</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Exam</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Title</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Type</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Total Marks</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">GPA Percentage</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Sched. Date</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Duration</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Created By</div></QueueAnim></th>
                        <th><QueueAnim><div key="1">Action</div></QueueAnim></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tableRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}