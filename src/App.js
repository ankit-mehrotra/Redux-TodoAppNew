import React from 'react';
import { Login } from './components/Login';
import Nav from './components/Nav';
import { PrivateRoute } from './components/PrivateRoute';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import { AuthProvider } from './components/AuthProvider';
import { SignUp } from './components/SignUp';
import { TodoApp } from './components/App';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Nav/>
      <TodoApp/>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/signUp' component={SignUp}/>
        <PrivateRoute component={Contact} path='/home' exact />
        <PrivateRoute path='/about' component= {About} exact/>
      </Switch>
     </Router>
     </AuthProvider>
  );
}

export default App;
