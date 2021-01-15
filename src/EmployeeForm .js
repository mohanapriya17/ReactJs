import React from 'react';  
import './App.css'  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

import CardImage from './CardImage';
import Login from './Login';
import Cart from './Cart';

import {BrowserRouter as Router,Link} from 'react-router-dom'


class EmployeeForm extends React.Component {  
    constructor() {  
      super();  
      this.state = {  
        entities: {},  
        errors: {} ,
        gender: "",
      state: "Maharashtra",
       
      }  
      this.onChangeHandler = this.onChangeHandler.bind(this); 
      this.handleChange = this.handleChange.bind(this);  
      this.EmployeeForm = this.EmployeeForm.bind(this);  
    };  
    onChangeHandler(e) {  
      this.setState({  
        [e.target.name]: e.target.value  
      });  
    } 
    handleChange(e) {  
      let entities = this.state.entities;  
      entities[e.target.name] = e.target.value;  
      this.setState({  
        entities  
      });  
  
    }  
  
    EmployeeForm(e) {  
      e.preventDefault();  
      if (this.validateemployee()) {  
          let entities = {};  
          entities["EmployeeName"] = "";  
          entities["Email"] = "";  
          entities["City"] = "";  
          entities["Password"] = ""; 
          entities["Department"] = "";
          this.setState({entities:entities});  
          alert("Corona virus policy register");  
      }  
    }  
    validateemployee() {  
      let entities = this.state.entities;  
      let errors = {};  
      let IsValid = true;  
  
      if (!entities["EmployeeName"]) {  
        IsValid = false;  
        errors["EmployeeName"] = " Name is Required";  
      }  
        
      if (!entities["Email"]) {  
        IsValid = false;  
        errors["Email"] = "Email is Required";  
      }  
  
      if (typeof entities["Email"] !== "#ff0000") {  
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);  
        if (!pattern.test(entities["Email"])) {  
          IsValid = false;  
          errors["Email"] = "Email is not Valid";  
        }  
      }  
      if (!entities["City"]) {  
        IsValid = false;  
        errors["City"] = "City is Required";  
      }  
      if (!entities["Department"]) {  
        IsValid = false;  
        errors["Department"] = "Department is Required";  
      }  
      if (!entities["Password"]) {  
        IsValid = false;  
        errors["Password"] = "Password is Required";  
      }  
      this.setState({  
        errors: errors  
      });  
      return IsValid;  
    }  
    
  render() {  
    return (  
        <div className="app flex-row align-items-center">  
        
        <Container>  
          <Row className="justify-content-center">  
            <Col md="9" lg="7" xl="6">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                  <Form  method="post"  name="EmpForm"  onSubmit= {this.EmployeeForm}>  
                  <h3 style={{ color: 'red' }}>1 Core life Cover at Rs.490/month*</h3>
                    <Input type="text" className="mrgn" name="EmployeeName" value={this.state.entities.EmployeeName} onChange={this.handleChange}  placeholder="Enter Name" />  
                      <div className="errorMsg">{this.state.errors.EmployeeName}</div> 
                      <div className="radiobutton">
                       <label>Gender: </label>  
          <label>Male</label>  
          <input  
            type="radio"  
            name="gender"  
            value="male"  
            checked={this.state.gender === "male"}  
            onChange={this.onChangeHandler}  
          />  
          <label>Female</label>  
          <input  
            type="radio"  
            name="gender"  
            value="female"  
            checked={this.state.gender === "female"}  
            onChange={this.onChangeHandler}  
          />  
          <br />  
          <br />   
          <label>State: </label>  
          <select  
            name="state"  
            value={this.state.state}  
            onChange={this.onChangeHandler}  
          >  
            <option value="Maharashtra">Maharashtra</option>  
            <option value="Madhya Pradesh">Madhya Pradesh</option>  
            <option value="Karnataka">Karnataka</option>  
            <option value="West Bengal">West Bengal</option>  
          </select> </div>
                      <Input type="text" className="mrgn" name="Email" value={this.state.entities.Email} onChange={this.handleChange}  placeholder="Enter Email" />  
                      <div className="errorMsg">{this.state.errors.Email}</div>  
                      <Input type="password"  className="mrgn" name="Password" value={this.state.entities.Password} onChange={this.handleChange} placeholder="Enter Password" />  
                      <div className="errorMsg">{this.state.errors.Password}</div>  
                      <Input type="text"  className="mrgn" name="City" value={this.state.entities.City} onChange={this.handleChange} placeholder="Enter City" />  
                      <div className="errorMsg">{this.state.errors.City}</div>  
                      
                      <button type="submit" color="success" block></button>
                      <Button type="submit">
         <Router>
      <Link to='/CardImage' className="btn btn-primary">View Free quotes
                </Link></Router></Button>
                    
                    <div classname="policy"> <p>"By clicking view on quotes"You agree to our privacy statement and policy</p>
                    </div></Form>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </Container>  
        <br/><br/><br/>
        
      </div>  
      
      );  
  }  
}  
export default EmployeeForm;  