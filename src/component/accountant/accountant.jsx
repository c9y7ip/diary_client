import React, { createContext, useContext, useEffect, useState } from "react";
import "../../styles/accountant.css";
import PrimaryTable from "./primaryTable";
import SecondaryTable from "./secondaryTable";
import ExtraTable from "./extraTable";
import { sumContext } from "./sumContext";

function Accountant() {
  const [nessaraySum, setNessaraySum] = useState(0);
  const [secondarySum, setSecondarySum] = useState(0);
  const [extraSum, setExtraSum] = useState(0);

  return (
    <div className="accountant-container " id="accountant">
      {/* <p className="title">Salary : </p> */}

      <div className="boarder">
        <sumContext.Provider value={{ nessaraySum, setNessaraySum }}>
          <PrimaryTable />
        </sumContext.Provider>

        <sumContext.Provider value={{ secondarySum, setSecondarySum }}>
          <SecondaryTable />
        </sumContext.Provider>

        <sumContext.Provider
          value={{ nessaraySum, secondarySum, extraSum, setExtraSum }}
        >
          <ExtraTable />
        </sumContext.Provider>
      </div>
    </div>
  );
}

export default Accountant;
