import React, { useContext, useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "../../styles/accountant.css";
import { Fab, TableContainer } from "@material-ui/core";
import { DataGrid, ukUA } from "@material-ui/data-grid";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import axios from "axios";
import { sumContext } from "./sumContext";

const PrimaryTable = () => {
  const [items, setItems] = useState([]);
  const [inputArray, setInputArray] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [sum, setSum] = useState(0);

  const { nessaraySum, setNessaraySum } = useContext(sumContext);

  // calculation
  const addition = (a, b) => {
    return Number(a) + Number(b);
  };

  const totalSum = () => {
    var result = items.reduce((a, v) => {
      return addition(a, v.price);
    }, 0);

    setNessaraySum(result);
  };

  // unhide input box
  const showInputBox = () => {
    if (inputArray.length === 0) {
      setInputArray([...inputArray, { item: "item", price: "price" }]);
    } else {
      return;
    }
  };

  //hide input box
  const removeInputBox = () => {
    setInputArray([]);
  };

  // add data to database
  const appendInput = async () => {
    if (inputItem === "" || inputPrice === "") {
      return;
    } else {
      const item = {
        id: inputItem,
        price: inputPrice,
        action: "Delete",
      };
      console.log(item);

      axios.post("http://localhost:5000/addNessaray", item).then((res) => {
        console.log(res.data);
        totalSum();
        window.location.reload();
      });

      setInputItem("");
      setInputPrice("");
      setInputArray([]);
    }
  };

  // useEffect update item table
  useEffect(() => {
    axios.get("http://localhost:5000/getNessarary").then((res) => {
      setItems(res.data);
      totalSum();
    });
  }, [items]);

  return (
    <div className="left-section">
      <p className="title">Necessary Expenses</p>
      {/* item table */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          columns={[
            {
              field: "id",
              headerAlign: "center",
            },
            {
              field: "price",
              headerAlign: "center",
            },
            {
              field: "action",
              headerAlign: "center",
            },
          ]}
          rows={items}
          pageSize={5}
          disableSelectionOnClick
          isCellEditable={true}
          onCellClick={(a, b, c) => {
            if (a.value === "Delete") {
              console.log(a.id, "this is aid");
              console.log(items, "i can call");

              axios.delete("http://localhost:5000/deleteNessaray", {
                data: { id: a.id },
              });

              totalSum();
            }
          }}
        />
      </div>
      {/* input box ordering */}
      {inputArray.map((input) => (
        <div className="wrapper" key={input.item}>
          <input
            className="inputBox"
            type="text"
            placeholder="item"
            onChange={(e) => {
              setInputItem(e.target.value);
            }}
          />
          <input
            className="inputBox"
            type="number"
            placeholder="0"
            onChange={(e) => {
              setInputPrice(e.target.value);
            }}
          />
          <CheckIcon className="icon" onClick={appendInput} />
          <ClearIcon className="icon" onClick={removeInputBox} />
        </div>
      ))}
      {/* Show total sum */}
      <h3 className="total">Total : {nessaraySum}</h3>
      {/* + button */}
      <Fab
        className="addButton"
        size="small"
        color="primary"
        aria-label="add"
        onClick={showInputBox}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default PrimaryTable;
