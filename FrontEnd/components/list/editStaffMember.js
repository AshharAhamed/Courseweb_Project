import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Staff_ID: '',
            FirstName: '',
            LastName:'',
            Mobile:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/lecturers/getStaff/'+ this.props.match.params.StaffID)
            .then(response => {
                this.setState({
                    Staff_ID: response.data.StaffID,
                    FirstName: response.data.FirstName,
                    LastName: response.data.LastName,
                    Mobile: response.data.Mobile});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangePersonName(e) {
        this.setState({
            FirstName: e.target.value
        });
    }
    onChangeBusinessName(e) {
        this.setState({
            LastName: e.target.value
        })
    }
    onChangeGstNumber(e) {
        this.setState({
            Mobile: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Mobile: this.state.Mobile
        };
        axios.put('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('adminHome.html');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Lecturer</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.FirstName}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Business Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.LastName}
                               onChange={this.onChangeBusinessName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Mobile}
                               onChange={this.onChangeGstNumber}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Update Business"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}