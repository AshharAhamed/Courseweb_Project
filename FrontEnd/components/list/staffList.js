import { Component } from 'react';
import staffList from './staffList';
import axios from "axios";

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffMembers: []
        }
    }

    loadMedicineList() {
        axios.get('http://localhost:3001/lecturers').then(data => {
            this.setState({staffMembers:data.data});
        });

    }

    onDelete(id){
        if(id){
            axios.delete('http://localhost:3001/lecturers/'+id).then(data => {
                let staffMembers = this.state.staffMembers;
                let index = staffMembers.findIndex(x => x.id === id);
                staffMembers.splice(index, 1);
                this.setState({ staffMembers: staffMembers });
                alert(`${data.data.id} - ${data.data.name} Deleted!`);
            });

        }
    }
    onUpdate(id){

        this.props.history.push(''+id);
    }
    onView(){

    }
    componentWillUnmount() {
        //this.loadMedicineList();
    }

    componentDidMount() {
        this.loadMedicineList();
    }

    render = staffList;
}


export default StaffList;