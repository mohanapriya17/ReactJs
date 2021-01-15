import React, { Component } from 'react'  
import { Link } from 'react-router-dom';  
export class Leftside extends Component {  
    render() {  
        return (  
            <div>  
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">  
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">  
                        <div class="sidebar-brand-text mx-3">React Routing </div>  
                    </a>  
                    <hr class="sidebar-divider my-0" />  
                    <hr class="sidebar-divider" />  
                     <li class="nav-item">  
                        <Link class="nav-link" to="/Dashboard"> <i class="fas fa-fw fa-home"></i>Home</Link>  
                    </li>  
                    <li class="nav-item">  
                        <Link class="nav-link" to="/employee"> <i class="fas fa-fw fa-user"></i>Employee</Link>  
                    </li>  
                    <li class="nav-item">  
                        <Link class="nav-link" to="/setting">  <i class="fas fa-fw fa-cog"></i>Setting</Link>  
                    </li>  
                </ul>  
            </div>  
        )  
    }  
}  
  
export default Leftside  