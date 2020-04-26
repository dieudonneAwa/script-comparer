import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';

const App = () => (
  <>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/sign_up" component={SignUp} />
        <Route path="/sign_in" component={SignIn} />
      </Switch>
    </div>
    <Footer />
  </>
);

export default App;
