import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import Greet from './Components/Greet';
import Login from './Login';

import Cart from './Cart';
import EmployeeForm from './EmployeeForm ';
import DisplayEmployee from './React-Rest/displayEmployee';
import UserPage from './React-Rest/UserPage';
import DeleteUser from './React-Rest/DeleteUser';
import CreateUser from './React-Rest/CreateUser';
import About from './About';
import CardImage from './CardImage';
import BootstrapCarouselDemo from "./BootstrapCarouselDemo";
import used from './used';

function HomePage() {
    return ( <
        div className = "lol" >
        <
        header >
        <
        Navbar expand = "lg"
        variant = "dark"
        bg = "dark" >


        <
        Navbar.Collapse id = "basic-navbar-nav" >
        <
        Nav className = "mr-auto" >
        <
        Nav.Link href = "/BootstrapCarouselDemo" > Home < /Nav.Link> <
        Nav.Link href = "/About" > about < /Nav.Link> <
        Nav.Link href = "/Login" > AdminLogin < /Nav.Link> <
        Nav.Link href = "/CreateUser" > UserLogin < /Nav.Link> <
        Nav.Link href = "/DeleteUser" > DeleteUser < /Nav.Link> <
        NavDropdown title = "LifeInsurance"
        id = "basic-nav-dropdown" >
        <
        NavDropdown.Item > Insurance < /NavDropdown.Item> <
        NavDropdown.Item > travel Insurance < /NavDropdown.Item> <
        NavDropdown.Item > life Insurance < /NavDropdown.Item> <
        NavDropdown.Item > corona term Insurance < /NavDropdown.Item> <
        NavDropdown.Divider / >
        <
        NavDropdown.Item href = "/EmployeeForm" > CoronaVirusInusrance < /NavDropdown.Item> <
        /NavDropdown> <
        NavDropdown title = "InvestementPlans"
        id = "basic-nav-dropdown" >
        <
        NavDropdown.Item > ChildPlans < /NavDropdown.Item> <
        NavDropdown.Item > VehiclePlans < /NavDropdown.Item> <
        NavDropdown.Item > PensionPlans < /NavDropdown.Item> <
        NavDropdown.Item > Money Back Policy < /NavDropdown.Item> <
        NavDropdown.Divider / >
        <
        NavDropdown.Item href = "#action/3.4" > Other < /NavDropdown.Item> <
        /NavDropdown> <
        NavDropdown title = "HealthInsurance"
        id = "basic-nav-dropdown" >
        <
        NavDropdown.Item > HealthInsurancePlans < /NavDropdown.Item> <
        NavDropdown.Item > FamilyInsurancePlans < /NavDropdown.Item> <
        NavDropdown.Item > CoronaHealthInsurancePlans < /NavDropdown.Item> <
        NavDropdown.Item > Arogya sanjeevni Policy < /NavDropdown.Item> <
        NavDropdown.Item > Medicam Policy < /NavDropdown.Item> <
        NavDropdown.Divider / >
        <
        NavDropdown.Item href = "#action/3.4" > Other < /NavDropdown.Item> <
        /NavDropdown> <
        /Nav> <
        Form inline >
        <
        FormControl type = "text"
        placeholder = "Search"
        className = "mr-sm-2" / >
        <
        Button variant = "outline-success" > Search < /Button> <
        /Form> <
        /Navbar.Collapse> <
        /Navbar>


        <
        /header> <
        Router >
        <
        Switch >
        <
        Route path = "/Login"
        component = { Login }
        exact = { true }
        /> <
        Route path = "/CreateUser"
        component = { CreateUser }
        exact = { true }
        /> <
        Route path = "/DisplayEmployee"
        component = { DisplayEmployee }
        exact = { true }
        /> <
        Route path = "/EmployeeForm"
        component = { EmployeeForm }
        exact = { true }
        /> <
        Route path = "/About"
        component = { About }
        exact = { true }
        /> <
        Route path = "/CardImage"
        component = { CardImage }
        exact = { true }
        /> <
        Route path = "/used"
        component = { used }
        exact = { true }
        /> <
        Route path = "/UserPage"
        component = { UserPage }
        exact = { true }
        /> <
        Route path = "/UserPage"
        component = { BootstrapCarouselDemo }
        exact = { true }
        /> <
        Route path = "/DeleteUser"
        component = { DeleteUser }
        exact = { true }
        />



        <
        /Switch> <
        /Router>

        <
        h1 style = {
            { color: 'red' } } > Welcome to Online Policy Management System < /h1> <
        Greet > < /Greet> <
        div className = "container" >
        <
        div className = "row mt-5" >
        <
        div className = "col-lg-4 mb-4 grid-margin" >
        <
        div className = "card h-100" >
        <
        h4 className = "card-header" > Insurance < /h4> <
        div className = "card-body" >
        <
        p className = "card-text" > Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente esse necessitatibus neque. < /p> <
        /div> <
        div className = "card-footer" >
        <
        Button variant = "btn btn-primary" > Learn More < /Button> <
        /div> <
        /div> <
        /div> <
        div className = "col-lg-4 mb-4 grid-margin" >
        <
        div className = "card h-100" >
        <
        h4 className = "card-header" > Registeration Info < /h4> <
        div className = "card-body" >
        <
        p className = "card-text" > Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga. < /p> <
        /div> <
        div className = "card-footer" >
        <
        Button variant = "btn btn-primary" > Learn More < /Button> <
        /div> <
        /div> <
        /div> <
        div className = "col-lg-4 mb-4 grid-margin" >
        <
        div className = "card h-100" >
        <
        h4 className = "card-header" > Agreement < /h4> <
        div className = "card-body" >
        <
        p className = "card-text" > Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente esse necessitatibus neque. < /p> <
        /div> <
        div className = "card-footer" >
        <
        Button variant = "btn btn-primary" > Learn More < /Button> <
        /div> <
        /div> <
        /div> <
        /div>

        <
        /div> <
        /div>
    );
}
export default HomePage