import React, {Component} from 'react'
import axios from "axios";
import OneAdminMember from "./oneAdmin"

export default class AdminList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admins: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/admins/')
            .then(response => {
                this.setState({admins: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidUpdate() {
        axios.get('http://localhost:8080/admins/')
            .then(response => {
                this.setState({ admins: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.admins.map(function (object, i) {
            return <OneAdminMember obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h4>Registered Admins</h4>


                <table className="table">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}