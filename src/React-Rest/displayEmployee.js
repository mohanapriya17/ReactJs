import { fetchUsers } from "./Services";

import React, { Component } from "react";
import DeleteUser from "./DeleteUser";


export default class DisplayEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            show: true
        }
    }


    handleClick = () => {
        if (this.state.employees.length > 0) {
            this.setState({
                employees: [],
                show: false
            })
        } else {
            fetchUsers(this.setEmployee);
        }
    }
    setEmployee = (data) => {
        this.setState({
            employees: data
        })
    }
    render = () => {
        return < > < table className = "table" >
            <
            DeleteUser > < /DeleteUser> <
            h1 > Policy Register details < /h1> { this.state.employees.length > 0 && < tr > < th > User ID < /th><th>User Name</th > < th > User Address < /th><th>Contact Number</th > < th > email Id < /th></tr > } {
                this.state.employees.map(p =>
                    <
                    tr > < td > { p.empId } < /td><td>{p.empName}</td > < td > { p.empAddress } < /td><td>{p.contactNumber}</td > < td > { p.emailId } < /td></tr > )
            }

        <
        /table> <
        button class = "btn btn-primary"
        onClick = {
                () => this.handleClick() } > Display Policy Member details < /button></ >

    }

}