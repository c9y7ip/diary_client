import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import login from "./component/auth/login"
import dashboard from "./component/dashboard"

class app extends Component {
  state = {  }

  
  render() { 
    return (
      <Router>
        <Route exact path="/" component={login}/>
        <Route exact path="/dashboard" component={dashboard}/>

      </Router>
      

    );
  }
}
 
export default app;