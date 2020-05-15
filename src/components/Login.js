import React,{ useCallback,useContext,Redirect } from 'react'
import { Formik ,Field, Form, getIn } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { AuthContext } from './AuthProvider';
import * as yup from 'yup';

const TextFieldComponent = ({field,form,...props}) => {
  
  const errorText = getIn(form.touched,field.name) && getIn(form.errors,field.name);
  return (
    <>
    <br/>
      <TextField
      margin='normal' 
      error={!!errorText}
      {...props} 
      {...field}/>
  </>
  )
}

const validationSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required().min(5).max(10)
});


export const Login = ({ history }) => {
  const {dispatch} = useContext(AuthContext);
  
  const handleLoginIn = async (event,values) => {
  event.preventDefault();
  const { email,password } = values;
  try {
    const data = await fetch('http://localhost:4000/signIn',
    {
        body: JSON.stringify({email,password}),
        headers: { 'Content-type': 'application/json' },
        method:'post'
    });
    const result = await data.json(); 
    dispatch({type:'LOGIN_SUCCESS',payload: result.user.name});
    history.push('/home');
    } catch(err) { console.log(err);
    alert("Incorect user name or password");
    }

  }
    return (
      <Formik initialValues={{
        email: '',
        password: ''
      }} onSubmit={(values,actions) => {
          actions.setSubmitting(false);
          // handleSignUp();
      }} validationSchema={validationSchema}>
        {({values})=> (
          <Form onSubmit={e=>handleLoginIn(e,values)}>
            <Field name="email" placeholder="Email" label="Email" component={TextFieldComponent}/>
            <Field name="password" placeholder="Password" label="Password" component={TextFieldComponent}/>
            <br/><br/><Button type="submit" variant="contained" color="primary">Submit</Button>
          </Form>
          
        )}
        </Formik>
  
    )
}
