import React from "react";
import Menu from "./menu";
import Accountant from "./accountant/accountant";
import Diary from "./diary/diary";
import Todo from "./todo/todo";

function dashboard() {
  return (
    <div className="App">
      <Menu />
      <Accountant />
      <Diary />
      <Todo />
    </div>
  );
}

export default dashboard;
