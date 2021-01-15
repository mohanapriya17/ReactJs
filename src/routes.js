import  React from 'react';  
const Dashboard=React.lazy(()=>import('./Views/Dashboard'));  
const setting=React.lazy(()=>import('./Views/Setting'))  
const employee=React.lazy(()=>import('./Views/Employee'))  
const addemployee=React.lazy(()=>import('./Views/Addemployee'))  
const editemployee=React.lazy(()=>import('./Views/Editemployee'))  
const profile=React.lazy(()=>import('./Views/Profile')) 
const notfound=React.lazy(()=>import('./PageNotFound'))
const routes = [  
    { path: '/Dashboard', component: Dashboard },  
    { path: '/setting', component: setting },  
    { path: '/employee',  component: employee },  
    { path: '/addemployee',  component: addemployee },  
    { path: '/profile',  component: profile },  
    { path: '/editemployee/:id', exact: true,  component: editemployee }, 
    { component:notfound }
];  
  
export default routes;  