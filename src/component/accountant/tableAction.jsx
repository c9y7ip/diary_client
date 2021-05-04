export const showInputBox = (inputArray, setInputArray) => {
  if (inputArray.length === 0) {
    setInputArray([...inputArray, { item: "item", price: "price" }]);
  } else {
    return;
  }
};
