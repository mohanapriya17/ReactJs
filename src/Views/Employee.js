import React, { Component } from 'react'  
import { Link } from 'react-router-dom';  
export class Color extends Component {  
      
    render() {  
        const employee = `/editemployee/${1}`  
        return (  
            <div>  
                <div class='container-fluid' >        
           <div className="row title" style={{marginBottom: "20px"}} >        
           <div class="col-sm-12 ">     
           <div class="col-sm-9 btn">  
               </div>  
               <div class="col-sm-3 btn btn-info nav-item">  
               <Link style={{"color":"white"}} class="nav-link" to="/addemployee"> <i style={{"color":"white"}} class="fas fa-fw fa-user"></i>Add Employee</Link>  
               </div>  
            
           </div>        
           </div>    
       </div>    
                <table class="table">  
                    <thead>  
                        <tr>  
                            <th>Employee name</th>  
                            <th>City</th>  
                            <th>Email</th>  
                            <th>Department</th>  
                            <th></th>  
                        </tr>  
                    </thead>  
                    <tbody>  
                        <tr>  
                            <td>John</td>  
                            <td>Doe</td>  
                            <td>john@example.com</td>  
                            <td>IT</td>  
                            <td>  
                             
                            <Link class="btn btn-info" to={employee}>Edit</Link>  
                                  
                                     
                            </td>  
  
                        </tr>  
                        <tr>  
                            <td>Mary</td>  
                            <td>Moe</td>  
                            <td>mary@example.com</td>  
                            <td>HR</td>  
                            <td>  
                                <button type="button" class="btn btn-info">Edit</button>  
                                  
                            </td>  
                        </tr>  
                        <tr>  
                            <td>July</td>  
                            <td>Dooley</td>  
                            <td>july@example.com</td>  
                            <td>IT</td>  
                            <td>  
                              <button type="button" class="btn btn-info">Edit</button>  
                                     
                            </td>  
                        </tr>  
                    </tbody>  
                </table>  
            </div>  
        )  
    }  
}  
  
export default Color  