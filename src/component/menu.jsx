import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../styles/menu.css'

class menu extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div className="split">

                <div className="left">
                    <Link className="hyperlink" to="/accountant">Accountant</Link>
                </div>

                <div className="middle">
                    <Link className="hyperlink" to="/diary">Diary</Link>
                </div>

                <div className="right">
                    <Link className="hyperlink" to="/todo">TODO</Link>
                </div>
           
            </div>
         );
    }
}
 
export default menu;