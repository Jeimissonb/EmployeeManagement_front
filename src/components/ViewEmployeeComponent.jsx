import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            id: props.match.params.id,
            employee: {},
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then (resp =>{
            this.setState({employee : resp.data});
        });
    }

    render() {
        return (
            <div>
                <div className= "card col-md-6 offset-md-3">
                    <h3>View Employee Details</h3>
                    <div className= "card-body">
                        <div className="row border">
                            <label className="fw-bold font-monospace">Employee First Name: </label>
                            <div className="pb-2 ">{this.state.employee.firstName}</div>
                        </div>
                        <div className="row border">
                            <label className="fw-bold font-monospace">Employee Last Name: </label>
                            <div className="pb-2">{this.state.employee.lastName}</div>
                        </div>
                        <div className="row border">
                            <label className="fw-bold font-monospace">Employee Email ID: </label>
                            <div className="pb-2">{this.state.employee.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
   
}


export default ViewEmployeeComponent;