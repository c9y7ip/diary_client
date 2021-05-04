import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import menu from './component/menu'
import accountant from './component/accountant/accountant'
import diary from './component/diary/diary'
import todo from './component/todo/todo'

class app extends Component {
  state = {  }

  
  render() { 
    return (
      <Router>
        <Route exact path="/" component={menu}/>
        <Route exact path="/accountant" component={accountant}/>
        <Route exact path="/diary" component={diary}/>
        <Route exact path="/todo" component={todo}/>
      </Router>
    );
  }
}
 
export default app;