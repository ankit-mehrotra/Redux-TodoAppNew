import React,{ useEffect, useCallback } from 'react'
import { Formik ,Field, Form, getIn } from 'formik';
import { useHttp } from './useHttp';
import { TextField, Button } from '@material-ui/core';
import * as yup from 'yup';

const TextFieldComponent = ({field,form,...props}) => {
  
  const errorText = getIn(form.touched,field.name) && getIn(form.errors,field.name);
  return (
    <><br/>
  <TextField
  margin='normal' 
  error={!!errorText}
  {...props} 
  {...field}/>
  </>
  )
}

const validationSchema = yup.object().shape({
  name: yup.string('Enter username').required().min(2).max(10),
  email: yup.string().email(),
  password: yup.string().required().min(5).max(10)
});



export const SignUp = ({ history }) => {
 
const handleSignUp = useCallback(async (event,values) => {
    event.preventDefault();
    const { email,password,name } = values;
  try {
    const data = await fetch('http://localhost:4000/signUp',
    {
        body: JSON.stringify({email,password,name}),
        headers: { 'Content-type': 'application/json' },
        method:'post'
    });
        alert('User Successfully Created');
        history.push('/');
    
    } catch(err) {
    alert(err);
    }

}, [history]);

    return (
      <Formik initialValues={{
        name: 'abc',
        email: '',
        password: ''
      }} onSubmit={(values,actions) => {
          actions.setSubmitting(false);
      }} validationSchema={validationSchema}>
        {({values})=> (
          <Form onSubmit={e=> handleSignUp(e,values)}>
            <Field name="name" placeholder="FirstName" label="First Name" component={TextFieldComponent}/>
            <Field name="email" placeholder="Email" label="Email" component={TextFieldComponent}/>
            <Field name="password" placeholder="Password" label="Password" component={TextFieldComponent}/>
            <br/><br/><Button type="submit" variant="contained" color="primary">Submit</Button>
          </Form>
          
        )}
        </Formik>
  
    )
}