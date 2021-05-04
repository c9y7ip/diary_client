import React, { useContext, useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "../../styles/accountant.css";
import { Fab, TableContainer } from "@material-ui/core";
import { DataGrid, ukUA } from "@material-ui/data-grid";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import axios from "axios";

const PrimaryTable = () => {
  const [items, setItems] = useState([]);
  const [inputArray, setInputArray] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [sum, setSum] = useState(0);

  const totalSum = () => {
    var result = items.reduce((a, v) => {
      return addition(a, v.price);
    }, 0);

    setSum(result);
  };

  const addition = (a, b) => {
    return Number(a) + Number(b);
  };

  const addInput = () => {
    if (inputArray.length === 0) {
      setInputArray([...inputArray, { item: "item", price: "price" }]);
    } else {
      return;
    }
  };

  const removeInput = () => {
    setInputArray([]);
  };

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

      // items.forEach((e, i) => {
      //   if (e.id === inputItem) {
      //     setItems(items.splice(i, 1));
      //     totalSum();
      //     return;
      //   }
      // });

      // setItems([
      //   ...items,
      //   { id: inputItem, price: inputPrice, action: "Delete" },
      // ]);
      // totalSum();
      setInputItem("");
      setInputPrice("");
      setInputArray([]);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/getNessarary").then((res) => {
      // console.log(res.data);
      setItems(res.data);
      totalSum();
    });
  }, [items]);

  return (
    <div className="left-section">
      <p className="title">Necessary Expenses</p>

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
              // setItems(
              //   items.filter(function (item) {
              //     return item.id !== a.id;
              //   })
              // );

              totalSum();
            }
          }}
        />
      </div>

      {/* input box */}
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
          <ClearIcon className="icon" onClick={removeInput} />
        </div>
      ))}
      <h3 className="total">Total : {sum}</h3>
      <Fab
        className="addButton"
        size="small"
        color="primary"
        aria-label="add"
        onClick={addInput}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default PrimaryTable;
