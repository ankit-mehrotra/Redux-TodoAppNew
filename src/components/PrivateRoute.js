import React,{ useContext } from 'react'
import { Route,Redirect } from 'react-router-dom'
import { AuthContext } from './AuthProvider';

export const PrivateRoute = ({component: Component,...rest}) => {
    const { currentUser } = useContext(AuthContext); console.log(currentUser);
    return (
        <Route {...rest} render={props => (
            !!currentUser ? ( <Component {...props} /> ): (<Redirect to='/'/>)
        )}/>
    );
}
