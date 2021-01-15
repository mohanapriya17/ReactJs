import React, { Component } from 'react'  
import { Link } from 'react-router-dom'  
  
export class Header extends Component {  
  render() {  
    return (  
      <div>  
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">  
          <ul class="navbar-nav ml-auto">  
  
            <li class="nav-item dropdown no-arrow d-sm-none">  
            </li>  
            <li class="nav-item dropdown no-arrow mx-1">  
            </li>  
            <div class="topbar-divider d-none d-sm-block"></div>  
            <li class="nav-item dropdown no-arrow">  
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Sanwar</span>  
                <img src="https://img.icons8.com/officel/16/000000/user.png" />  
              </a>  
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">  
                <Link class="dropdown-item" to="/profile">  
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>  
        Profile  
      </Link>  
                <div class="dropdown-divider"></div>  
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">  
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>  
        Logout  
      </a>  
              </div>  
            </li>  
          </ul>  
        </nav>  
      </div>  
    )  
  }  
}  
  
export default Header  