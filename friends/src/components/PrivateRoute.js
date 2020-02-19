import React from 'react'
import {Route} from 'react-router-dom'

const PrivateRoute=({ component: Component, ...props}) => {
    
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
        <Route {...props} 
        render={props => 
            localStorage.getItem('token')
            ? (<Component {...props} />)
            : (<Redirect to="/login" />)
        } 
        
       />
    );
};

export default PrivateRoute
