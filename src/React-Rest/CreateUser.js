import React, { Component } from 'react'
import { insertUser, updateUser } from './Services'

class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emp: props.emp,
            empId: "",
            empName: '',
            empAddress: '',
            contactNumber: "",
            emailId: ''
        }
    }
    componentDidMount = () => {
        if (this.state.emp !== undefined) {
            this.setState({
                empId: this.state.emp.empId,
                empName: this.state.emp.empName,
                empAddress: this.state.emp.empAddress,
                contactNumber: this.state.emp.contactNumber,
                emailId: this.state.emp.emailId

            })
        }
    }
    handleChange = (event) => {
        //console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit = () => {
        const userObj = {
            "empId": this.state.empId,
            "empName": this.state.empName,
            "empAddress": this.state.empAddress,
            "contactNumber": this.state.contactNumber,
            "emailId": this.state.emailId
        }
        if (this.state.empId !== "") {
            updateUser(userObj, this.props.callback)
        } else {
            const insertResult = insertUser(userObj);
            alert("Inserted Successfully")
        }
        //   alert("Inserted Successfully")
    }
    render() {
        return ( <
            div className = "loginpage" >
            <
            form onSubmit = { this.handleSubmit } >
            <
            div >
            <
            label > Policy Id: < /label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <
            input disabled = { true }
            type = 'text'
            name = "empId"
            value = { this.state.empId }
            onChange = { this.handleChange }
            required / >
            <
            /div> <
            div >
            <
            label > User Name: < /label>&nbsp;&nbsp; <
            input type = 'text'
            name = "empName"
            value = { this.state.empName }
            onChange = { this.handleChange }
            required / >
            <
            /div> <
            div >
            <
            label > User Address: < /label> <
            input type = 'text'
            name = "empAddress"
            value = { this.state.empAddress }
            onChange = { this.handleChange }
            required / >
            <
            /div> <
            div >
            <
            label > ContactNumber: < /label> <
            input type = 'text'
            name = "contactNumber"
            value = { this.state.contactNumber }
            onChange = { this.handleChange }
            required / >
            <
            /div> <
            div >
            <
            label > EmailId: < /label> <
            input type = 'text'
            name = "emailId"
            value = { this.state.emailId }
            onChange = { this.handleChange }
            required / >
            <
            /div> <
            div >

            <
            button class = "btn btn-primary"
            type = 'submit'
            onChange = { this.handleSubmit } > Submit < /button> <
            /div> <
            /form> <
            div className = "para" >
            <
            h2 > Buy Insurance at Policybazaar.com < /h2> <
            p >
            Based out of Gurgaon, Haryana, PolicyBazaar is an insurance broker approved by IRDA of India.We offer an online platform
            for insurance buyers where they can easily compare different insurance policies such as car insurance, life insurance, two - wheeler insurance, term insurance, retirement plans etc.They can make an informed choice in a matter of a single click that too from the comfort of their home.

            As the insurance sector has taken proactive measures upon the outbreak of COVID - 19, PolicyBazaar is also offering Coronavirus term insurance and coronavirus health insurance.Moreover, as per the IRDAI regulations, all the health and general insurers are now offering two specific products namely, Corona Kavach Policy and Corona Rakshak Policy.The policies cover COVID - 19 hospitalization, home treatment, Ayush treatment along with the cost of PPE kits, and other expensive consumable items.This year IRDAI has also introduced another standard health insurance policy
            for people who cannot afford to pay higher premiums.They can buy Arogya Sanjeevani Policy from Policybazaar.com Apart from buying insurance online, existing policyholders can renew insurance plans and file a claim.In addition to that, individuals can also opt
            for best mutual funds, investment options, and tax - saving investments at our platform.

            At PolicyBazaar, you can easily compare the insurance quotes, get detailed information and zero down plans such as a LIC term plan, LIC, HDFC child plan, LIC pension plan, etc.whichever fulfils the requirements.

            Our sole objective is to help insurance applicants make an informed decision when they buy a policy online.Insurance companies offer various policies to fulfil the insurance needs of different insurance buyers.To come across the best insurance plan, it is necessary to compare insurance plans based on features, benefits, offered coverage, and premium rates. <
            /p>

            <
            /div> <
            /div>


        )
    }
}

export default CreateUser;