import React, { Component } from 'react'
import { deleteUser, deleteUserByName } from './Services'

class DeleteUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empId: 0,
            empName: "Name"
        }
    }
    handleChange = (event) => {
        //console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        const delId = this.state.empId;
        console.log(delId);
        const d = deleteUser(delId);
        console.log(d);
        const delName = this.state.empName;
        const f = deleteUserByName(delName);
        console.log(f);
    }
    render() {
        return ( <
            div >
            <
            form onSubmit = { this.handleSubmit } >
            <
            div >
            <
            label > Delete By Policy Person Id < /label> <
            input type = 'text'
            name = "empId"
            value = { this.state.empId }
            onChange = { this.handleChange }
            /> <
            /div>  <
            button type = 'submit'
            onChange = {
                (e) => this.handleSubmit(e) } > Delete < /button> <
            div >
            <
            label > Delete By Policy Name < /label> <
            input type = 'text'
            name = "empName"
            value = { this.state.empName }
            onChange = { this.handleChange }
            />

            <
            button type = 'submit'
            onChange = {
                (e) => this.handleSubmit(e) } > Delete < /button> <
            /div> <
            /form> <
            div className = "para" >
            <
            h2 > Terms and condition
            for deleting the policy details < /h2> <
            p >
            . < h2 > Life Insurance < /h2>- Life insurance is a contract between an insurer and an insured. Under a life insurance plan, in exchange for a premium, the insurer promises to provide the policy nominee with a pre-decided sum of money upon the death of the policyholder (as per applicable terms and conditions).

            Life insurance includes term life insurance plan, whole life plans, endowment plans, money back plans, ULIPs, child Plans, investment plans and retirement plans.

            2. General Insurance– Also known as non - life insurance, general insurance is defined as any insurance that that doesn’ t fall in the category of life insurance.As per applicable terms and conditions, it provides pre - decided insurance coverage to the insured in exchange of a specific premium.

            General insurance includes car insurance, health insurance, two - wheeler insurance, travel insurance, home insurance, corporate insurance, critical illness, and personal accident insurance.

            <
            h3 > Our Partners < /h3>

            Our partners are from diverse insurance sectors - motor insurance, term insurance, health insurance, travel insurance, and corporate insurance.We have partnered with them in order to be a one - stop solution
            for all the insurance needs.

            <
            h3 > Benefits of Buying / Renewing Insurance through PolicyBazaar < /h3>

            Quick Decision Making: Our online platform helps you make an informed insurance decision simply and conveniently.You can compare the cost and features of the various insurance policies in a matter of a few seconds.Our platform helps you understand each product’ s features so that you can easily shortlist the plan that suits your needs.High Coverage at Low Premium: As compared to the offline mode of buying insurance, we offer high insurance coverage at the lower insurance premium.Since there are no agents involved, no commission is paid to the insurance agent.As a result, you can buy insurance online at the best insurance premium.At PolicyBazaar, you can check various insurer premium rates such as HDFC life premium, LIC premium and so forth to make a smart and an informed decision.Seamless navigation: We have a strong technological edge that makes the insurance application process seamless.We have online forms that ask questions based on the applicant’ s demographics and profile.Error Free Calculation: The insurance quotes are system generated, which eradicates the scope of human error.Additionally, the time taken to calculate premiums is considerably reduced.No matter what type of insurance policy you intend to buy— life, health, home, car, or two wheeler insurance among others, Policybazaar.com offers an unbiased and data - driven platform to buy insurance hassle - free. <
            /p>

            <
            /div>

            <
            /div>
        )
    }
}

export default DeleteUser