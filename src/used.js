import React ,{Component} from 'react'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';  
import { Collapse, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import './App.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'
class used extends React.Component
{
    render(){
        return(
            <div className="jumbotron">
               <h1>CORONA KAVACH POLICY-NATIONAL</h1>
              <div className="mohana">
                  <p>Call Us On:    1800 345 0330</p>
                  <p>Email Us: policy@yahoo.com
</p>
<p>Policy Details: </p><p>In view of the global pandemic COVID-19 a standard CORONA KAVACH POLICY - NATIONAL is introduced:

To have a COVID specific product addressing basic health insurance needs of insuring public related to COVID-19.

To have a standard product with common policy wordings across the industry</p>
<p><b>No pre policy health check-up is required in this policy.</b> </p>
              </div>
              <Navbar color="info" light expand="md">  
                                <Nav color="info" navbar>  
                               
                                 </Nav>  
                                </Navbar>  
                                <Button color="info" id="toggler" style={{ marginTop: '1rem' }}>  
                                Highlights(active tab)
                                 </Button>  
                                <UncontrolledCollapse toggler="#toggler">  
                                        <Card>  
                                         <CardBody style={{textAlign:'center'}}>  
                                         <li>Sum Insured range – Rs.50,000/- to Rs.5, 00,000/-</li>
                                         <li>Entry Age – 18 to 65 years</li>
                                         <li>Who can be covered – Policy can be issued covering self (proposer), legally wedded spouse, parents and parents-in-law, dependent children (i.e., naturally or legally adopted) between the age day 1 to 25 years. If the child above 18 years of age is financially independent, he or she shall be ineligible for coverage.</li>
                                         
                                      
                                         </CardBody>  
                                        </Card>  
                                </UncontrolledCollapse>  
                                <div className="topnav-right">
                                <Button type="submit">
         <Router>
      <Link to='/Login' className="btn btn-primary">Login
                </Link></Router></Button></div>
                        </div>  
                        
             
               
               );
               }
               }
               export default used;
