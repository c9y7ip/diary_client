import React, { useContext, useEffect, useState } from "react";
import "../../styles/accountant.css";
import { sumContext } from "./sumContext";
import TextField from "@material-ui/core/TextField";

function SummaryTable({ click }) {
  const { nessaraySum, secondarySum, extraSum } = useContext(sumContext);
  // calculation
  const addition = (a, b, c) => {
    console.log(a, b, c);
    return Number(a) + Number(b) + Number(c);
  };
  const [salary, setSalary] = useState(0);
  const [sum, setSum] = useState(0);
  const [result, setResult] = useState(0);

  // useEffect update item table
  useEffect(() => {
    setSum(addition(nessaraySum, secondarySum, extraSum));
    setResult(Number(salary) - Number(sum));
  }, [nessaraySum, secondarySum, extraSum, salary, result, sum]);

  const setIncome = () => {
    console.log("hello world");
  };

  return (
    <div className={click ? "right-section-2" : "right-section-2-click"}>
      <h1 className="title">Summary</h1>
      <p style={{ marginRight: 10 }} className="summary">
        Salary :
      </p>
      <TextField
        className="summary"
        id="standard-basic"
        size="small"
        onChange={(e) => {
          setSalary(e.target.value);
        }}
      ></TextField>
      <p className="summary-1">Saving: {result}</p>
    </div>
  );
}

export default SummaryTable;
