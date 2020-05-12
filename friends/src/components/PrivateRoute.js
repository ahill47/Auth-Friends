import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const PrivateRoute=({ component: Component, ...rest}) => {
    
    return (
        // <Route
        // {... props}
        // render={()=>{
        //     if (localStorage.getItem("token")){
        //         return <Component/>
        //     } else {
        //         return <Redirect to= "/login" />
        //     }
        // }}
        <Route {...rest} 
        render={props => 
            localStorage.getItem('token')
            ? (<Component {...props} />)
            : (<Redirect to="/login" />)
        } 
        
       />
    );
};

export default PrivateRoute
