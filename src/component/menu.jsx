import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/menu.css";
import { Link } from "react-scroll";

class menu extends Component {
  state = {};

  render() {
    return (
      <div className="split">
        <div className="left">
          <Link
            className="hyperlink"
            to="accountant"
            smooth={true}
            spy={true}
            duration={500}
            offest={50}
          >
            Accountant
          </Link>
        </div>

        <div className="middle">
          <Link
            className="hyperlink"
            to="diary"
            smooth={true}
            spy={true}
            duration={500}
            offest={50}
          >
            Diary
          </Link>
        </div>

        <div className="right">
          <Link
            className="hyperlink"
            to="todo"
            smooth={true}
            spy={true}
            duration={500}
            offest={50}
          >
            TODO
          </Link>
        </div>
      </div>
    );
  }
}

export default menu;
