// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;

//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );
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
import CreateUser from './React-Rest/CreateUser';
import DeleteUser from './React-Rest/DeleteUser';
import './App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function LoginLayout() {

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
        Link to = '/CreateUser'
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
export default LoginLayout