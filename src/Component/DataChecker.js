import React, { Component } from "react";
import RestDataSource from "../Rest/RestDataSource";


export default class DateChecker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: "",
            user: {
                date: "",
                slo: ""
            },
            result: {
                resultDate: ""
            },
            error: {

            },
        }
        this.restDataSource = new RestDataSource("http://localhost:8090/");
    }

    onChange = (p) => {
        console.log(p.target.name);
        this.setState({
            user: {...this.state.user, [p.target.name]: p.target.value },
            result: {},
            error: {}

        });
        console.log(this.state.user.date);
    }

    setResult(data) {
        console.log(data);

        if (data) {
            console.log(this);
            this.setState({
                result: data
            })
        } else {

        }

        console.log(this.state.result.resultDate);
    }

    getResult() {
        if (this.state.user.date !== "" && this.state.user.slo !== null) {


            this.restDataSource.GetData("POST", "dateCheck", this.state.user, data => {
                if (data.resultDate !== undefined) {
                    this.setState({ result: data, error: {}, user: { date: "", slo: "" } });
                } else {
                    console.log(data);
                    this.setState({ error: data, result: {} });
                }
            });
        } else {
            this.setState({
                error: {
                    errorCode: "Not Ok",
                    timestamp: new Date(),
                    message: "Please enter values"
                }
            })
        }
    }
    componentDidMount = () => {
        this.restDataSource.GetData("GET", "", {}, data => {
            if (data !== "") {
                this.setState({ welcome: data });
            } else {
                console.log(data);
                this.setState({ error: data, result: {} });
            }


        })

    }

    render = () => < React.Fragment >
        <
        div className = "container" >
        <
        div className = "bg-primary p-2 text-white" >
        <
        h1 > { this.state.welcome } < /h1> <
        /div> <
        div className = "row mt-5" >
        <
        div className = "col-md-6 mb-3" >
        <
        div className = "form-group" >
        <
        label > Enter the Date < /label> <
        input className = { `form-control ${this.state.error.errorCode === "Not Ok" ? "border-danger" : ""}` }
    name = "date"
    value = { this.state.user.date }
    onChange = {
        (p) => this.onChange(p) }
    required = "required" / >
        <
        /div> <
        div className = "form-group" >
        <
        label > Enter the slo < /label> <
        input className = { `form-control ${this.state.error.errorCode === "Not Ok" ? "border-danger" : ""}` }
    name = "slo"
    value = { this.state.user.slo }
    onChange = {
        (p) => this.onChange(p) }
    required = "required" / >
        <
        /div> <
        div className = "textcenter" >
        <
        button type = "submit"
    className = "btn btn-primary"
    onClick = {
            () => this.getResult() } > Post < /button> <
        /div> <
        /div> <
        div className = "col-md-6 mb-3" > {
            this.state.result.resultDate && < div className = "alert bg-primary text-white mt-5 font-weight-bolder " > { `Result Date is ${this.state.result.resultDate}` } < /div>} {
                this.state.error.errorCode && < div className = "alert bg-danger font-weight-bolder" > { `Something went wrong ${this.state.error.errorCode}` } <
                    ul className = "list-group" >
                    <
                    li className = "list-group-item" > { `Error Code : ${this.state.error.errorCode}` } < /li> <
                    li className = "list-group-item" > { `Time Stamp : ${this.state.error.timestamp}` } < /li> <
                    li className = "list-group-item" > { `Error Message : ${this.state.error.message}` } < /li> <
                    /ul></div >
            } <
            /div> <
            /div> <
            /div>

            <
            /React.Fragment>


        }