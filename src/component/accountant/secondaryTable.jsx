import React from "react";
import "../../styles/accountant.css";
import { Fab, TableContainer } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function secondaryTable() {
  return (
    <div className="middle-section">
      <p className="title">Secondary Expenses</p>
      <Fab className="addButton" size="small" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default secondaryTable;
