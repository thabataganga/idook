import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import IdDetail from './components/ids/IdDetails';
import CreateId from './components/ids/CreateId';
import EditId from './components/ids/EditId';

import UserDetail from './components/personalization/UserDetails';
import EditUser from './components/personalization/EditUser';
import ColorPicker from './components/personalization/ColorPicker';

import CreateCalendar from './components/calendar/CreateCalendar';
import CalendarDetail from './components/calendar/CalendarDetails';

import Home from './components/logout/home/home'

import 'materialize-css/dist/css/materialize.min.css';
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return (
    <div className='container center'>
      <p>Carregando...</p>
    </div>
  )
  return children
}



function App() {
  return (
    <BrowserRouter>
      <AuthIsLoaded>
        <div >
          <Navbar />
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />

            <Route exact path='/id/:id' component={IdDetail} />
            <Route exact path='/editid/:id' component={EditId} />
            <Route exact path='/createid' component={CreateId} />

            <Route exact path='/calendar/:id' component={CalendarDetail} />
            <Route exact path='/calendar' component={CreateCalendar} />

            <Route exact path='/userdetail' component={UserDetail} />
            <Route exact path='/edituser' component={EditUser} />
            <Route exact path='/colorpicker' component={ColorPicker} />



          </Switch>

    
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;
