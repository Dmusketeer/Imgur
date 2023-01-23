import React from 'react';
<<<<<<< HEAD
//import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarImgur from './components/navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
    <NavbarImgur/>
    </div>
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import New from './components/pages/New';

function App() {
  return (
    <>
      <Router className="main">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/newpost' component={New} />
        </Switch>
      </Router>
    </>
>>>>>>> 433db7ba0f7427fb16aabb2cb2cf8e7ae0710677
  );
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> 433db7ba0f7427fb16aabb2cb2cf8e7ae0710677
