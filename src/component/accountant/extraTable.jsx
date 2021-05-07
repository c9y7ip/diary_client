import React, { useContext, useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "../../styles/accountant.css";
import { Fab, TableContainer } from "@material-ui/core";
import { DataGrid, ukUA } from "@material-ui/data-grid";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import axios from "axios";
import { sumContext } from "./sumContext";
import SummaryTable from "./summaryTable";

function ExtraTable() {
  const [items, setItems] = useState([]);
  const [inputArray, setInputArray] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [sum, setSum] = useState(0);
  const { nessaraySum, secondarySum, extraSum, setExtraSum } = useContext(
    sumContext
  );

  // calculation
  const addition = (a, b) => {
    return Number(a) + Number(b);
  };

  const totalSum = () => {
    var result = items.reduce((a, v) => {
      return addition(a, v.price);
    }, 0);

    setExtraSum(result);
  };

  const [click, setClick] = useState(true);
  const handleCLick = () => {
    setClick(!click);
  };

  // unhide input box
  const showInputBox = () => {
    if (inputArray.length === 0) {
      setInputArray([...inputArray, { item: "item", price: "price" }]);
      handleCLick();
    } else {
      return;
    }
  };

  //hide input box
  const removeInputBox = () => {
    setInputArray([]);
    handleCLick();
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

      axios
        .post("https://diary-server-ray.herokuapp.com/addExtra", item)
        .then((res) => {
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
    axios.get("https://diary-server-ray.herokuapp.com/getExtra").then((res) => {
      setItems(res.data);
      totalSum();
    });
  }, []);

  return (
    <div className="right-section-1">
      <p className="title">Extra</p>
      {/* item table */}
      <div style={{ height: 200, width: "100%" }}>
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
          pageSize={2}
          disableSelectionOnClick
          isCellEditable={true}
          onCellClick={(a, b, c) => {
            if (a.value === "Delete") {
              console.log(a.id, "this is aid");
              console.log(items, "i can call");

              axios.delete(
                "https://diary-server-ray.herokuapp.com/deleteExtra",
                {
                  data: { id: a.id },
                }
              );

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
      <h3 className="total">Total : {extraSum}</h3>
      <Fab
        className="addButton"
        size="small"
        color="primary"
        aria-label="add"
        onClick={showInputBox}
      >
        <AddIcon />
      </Fab>
      <SummaryTable click={click} />
    </div>
  );
}

export default ExtraTable;
