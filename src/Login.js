/*import React from 'react';  
import Button from '@material-ui/core/Button';  
import TextField from '@material-ui/core/TextField';  
import Grid from '@material-ui/core/Grid';  
import Typography from '@material-ui/core/Typography';  
import 'typeface-roboto';  
import {Link} from 'react-router-dom';
class Login extends React.Component {  
   handleLogin = () => {  
   alert("Logined Successfully");  
}  
render() {  
    <h1>New User</h1>
   return (  
      
      <Grid  
         container  
         spacing={0}  
         direction="column"  
         alignItems="center"  
         justify="center"  
         style={{ minHeight: '100vh' }}  
         >  
   <Typography component="h1" variant="h5">  
      Log in  
   </Typography>  
   <form onSubmit={this.handleLogin}>  
   <TextField  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Email Address"  
   />  
   <TextField  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Password"  
      type="password"  
   />  
   <Button type="submit">
      <Link to='/Cart' className="btn btn-primary">Submit
                </Link></Button>
      <br /><br /><br />
      <br />
   </form>  
  </Grid>  
  );  
 }    
}  
export default Login;*/
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import Cart from './Cart';
import UserPage from './React-Rest/UserPage';
import DeleteUser from './React-Rest/DeleteUser';
import './App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Login() {

    return ( <
        div className = "col-md-3 center" >
        <
        Form >
        <
        h2 > Login < /h2> <
        hr / >
        <
        Form.Group controlId = "formBasicEmail" >
        <
        Form.Label > Email address < /Form.Label> <
        Form.Control type = "email"
        placeholder = "Enter email"
        required / >
        <
        Form.Text className = "text-muted" >

        <
        /Form.Text> <
        /Form.Group>

        <
        Form.Group controlId = "formBasicPassword" >
        <
        Form.Label > Password < /Form.Label> <
        Form.Control type = "password"
        placeholder = "Password"
        required / >
        <
        /Form.Group> <
        Form.Group controlId = "formBasicCheckbox" >
        <
        Form.Check type = "checkbox"
        label = "Check me out"
        className = "required" / >
        <
        /Form.Group> <
        Button type = "submit" >
        <
        Router >
        <
        Link to = '/UserPage'
        className = "btn btn-primary" > Login <
        /Link></Router > < /Button> <
        br / > < br / > < br / >
        <
        br / >
        <
        /Form><br / > < br / > < br / >
        <
        br / > < br / > < br / >
        <
        /div>


    );

}
export default Login