import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import IdDetail from './components/ids/IdDetails';
import CreateId from './components/ids/CreateId';

import CreateNews from './components/news/CreateNews';
import NewsDetail from './components/news/NewsDetails';

import CreateCalendar from './components/calendar/CreateCalendar';
import CalendarDetail from './components/calendar/CalendarDetails';

import 'materialize-css/dist/css/materialize.min.css';


function App() {
  return (
    <BrowserRouter>
      <div >
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>

          <Route path='/id/:id' component={IdDetail}/>
          <Route path='/createid' component={CreateId}/>

          <Route path='/createnews' component={CreateNews}/>
          <Route path='/news/:id' component={NewsDetail}/>

          <Route path='/createcalendar' component={CreateCalendar}/>
          <Route path='/calendar/:id' component={CalendarDetail}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
