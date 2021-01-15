import React, { Component } from 'react'  
  
export class Addemployee extends Component {  
    render() {  
        return (  
            <div>  
  
  
  
                <div class="row">  
                    <div class="col-lg-2"></div>  
                    <div class="col-lg-8">  
                        <div  style={{"padding":"0rem!important"}}>  
                            <div class="text-center">  
                                <h1 class="h4 text-gray-900 mb-4">Create new Employee!</h1>  
                            </div>  
                            <form >  
                                <div class="form-group row">  
                                    <div class="col-sm-12 mb-3 mb-sm-0">  
                                        <input type="text" class="form-control form-control-user" id="eEmployeetName" placeholder="Employee Name" />  
                                    </div>  
  
                                </div>  
                                <div class="form-group row">  
  
                                    <div class="col-sm-12">  
                                        <input type="text" class="form-control form-control-user" id="City" placeholder="City" />  
                                    </div>  
                                </div>  
                                <div class="form-group">  
                                    <input type="email" class="form-control form-control-user" id="Email" placeholder="Email Address" />  
                                </div>  
                                <div class="form-group">  
                                    <input type="email" class="form-control form-control-user" id="Department" placeholder="Department" />  
                                </div>  
  
                                <a href="login.html" class="btn btn-primary btn-user btn-block">  
                                    Add  Employee  
                          </a>  
  
  
                            </form>  
  
                        </div>  
                    </div>  
                </div>  
  
            </div>  
        )  
    }  
}  
  
export default Addemployee  