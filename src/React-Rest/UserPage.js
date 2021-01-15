import React, { Component } from 'react'
import { Table, link } from 'react-bootstrap';
import CreateUser from "./CreateUser";
import DeleteUser from "./DeleteUser";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
class UserPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employeeDetails: [],
            editEmp: {},
            edit: true
        }
    }
    componentDidMount() {
        fetch("http://localhost:15000/SpringMVCHibernateCRUD/Employee/fetchEmployee").then(
                res => {
                    res.json()
                        .then(endRes => this.setState({ employeeDetails: endRes })).catch(err => console.log(err))
                })
            .catch(err => console.log(err))

    }

    updateEmp = (emp) => {
        this.setState({
            edit: false,
            editEmp: emp

        })
    }
    handleClose = () => {
        this.setState({
            edit: true,
            editEmp: {}
        })
    }

    render() {
        let result = [];
        const { employeeDetails } = this.state
        for (let i = 0; i < employeeDetails.length; i++) {
            result.push( <
                tr >
                <
                td > { employeeDetails[i].empId } < /td> <
                td > { employeeDetails[i].empName } < /td> <
                td > { employeeDetails[i].empAddress } < /td> <
                td > { employeeDetails[i].contactNumber } < /td> <
                td > { employeeDetails[i].emailId } < /td> <
                td > < button class = "btn btn-primary"
                type = "button"
                onClick = {
                    (e) => this.updateEmp(employeeDetails[i]) } >
                update User details <
                /button></td >

                { /* <td><button>Reserve</button>&nbsp;&nbsp;&nbsp;<button>check out</button></td> */ } <
                /tr>
            )

        }
        console.log("employeeDetails", employeeDetails);

        return <React.Fragment > {
                this.state.edit ? < > < div >
                <
                Table >
                <
                thead >
                <
                tr >
                <
                th > User ID < /th> <
                th > User Name < /th> <
                th > Address < /th> <
                th > Contact Number < /th> <
                th > Email Id < /th> <
                th > Update details < /th>

                { /* <th>Availability</th> */ }

                <
                /tr> <
                /thead>

                <
                tbody >

                { result } <
                /tbody> <
                /Table> <
                /div></ > : < > < CreateUser emp = { this.state.editEmp }
                handleClose = { this.handleClose }
                /></ >
            } <
            div className = "para" >
            <
            h2 > Buy Insurance at Policybazaar.com < /h2> <
            p >
            Based out of Gurgaon, Haryana, PolicyBazaar is an insurance broker approved by IRDA of India.We offer an online platform
        for insurance buyers where they can easily compare different insurance policies such as car insurance, life insurance, two - wheeler insurance, term insurance, retirement plans etc.They can make an informed choice in a matter of a single click that too from the comfort of their home.

        As the insurance sector has taken proactive measures upon the outbreak of COVID - 19, PolicyBazaar is also offering Coronavirus term insurance and coronavirus health insurance. <
            /p>

        <
        /div> <
        /React.Fragment>



    }
}

export default UserPage