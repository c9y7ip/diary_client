import React, { useContext, useEffect, useState } from "react";
import "../../styles/accountant.css";
import PrimaryTable from "./primaryTable";
import SecondaryTable from "./secondaryTable";
import ExtraTable from "./extraTable";

function Accountant() {
  return (
    <div className="accountant-container " id="accountant">
      <p className="title">Salary : </p>

      <div className="boarder">
        <PrimaryTable />
        <SecondaryTable />
        <ExtraTable />
      </div>
    </div>
  );
}

export default Accountant;
