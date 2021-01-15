import React, { Component } from 'react'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Collapse, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css'
export class CollapseDemo extends Component {
    render() {
        return ( <
            div >
            <
            Navbar color = "info"
            light expand = "md" >
            <
            Nav color = "info"
            navbar >

            <
            /Nav>   <
            /Navbar>   <
            div className = "butonuse" >
            <
            Button color = "info"
            id = "toggler"
            style = {
                { marginTop: '1rem' } } >
            NMEICT <
            /Button>   <
            UncontrolledCollapse toggler = "#toggler" >
            <
            Card >
            <
            CardBody style = {
                { textAlign: 'center' } } >
            To make available to the learners community learning resources through a single - window, National Mission on Education through Information and Communication Technology(NMEICT) has sponsored the National Digital Library of India(NDLI) project and arranged funding through Ministry of Education. <
            /CardBody>   <
            /Card>   <
            /UncontrolledCollapse>  </div >

            <
            /div>  

        )
    }
}

export default CollapseDemo