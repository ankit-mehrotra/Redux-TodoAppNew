import React,{ useReducer } from 'react';

export const AuthContext = React.createContext();

const changeUser = (state={},action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return action.payload
        case 'LOGOUT_SUCESS':
            return {}
        default:
            return state
    }
}

export const AuthProvider = ({children}) => {
   const [user,dispatch] = useReducer(changeUser);

   return (
       <AuthContext.Provider value={{dispatch,currentUser: user}}>
           {children}
       </AuthContext.Provider>
   )
} 