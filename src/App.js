import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './component/menu'
import Accountant from './component/accountant/accountant'
import Diary from './component/diary/diary'
import Todo from './component/todo/todo'

class app extends Component {
  state = {  }

  
  render() { 
    return (
      // <Router>
      //   <Route exact path="/" component={menu}/>
      //   <Route exact path="/accountant" component={accountant}/>
      //   <Route exact path="/diary" component={diary}/>
      //   <Route exact path="/todo" component={todo}/>
      // </Router>
      <div className="App">
        <Menu/>
        <Accountant/>
        <Diary/>
        <Todo/>
      </div>
    );
  }
}
 
export default app;