import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useState } from "react";

const QuantityBox = () => {
    const [inputval , setinputval] = useState(1);

    const Plus = () => {
        setinputval(inputval + 1);
    }
    const minus = () => {
        if (inputval > 1)
        setinputval(inputval - 1);
    }
  return (
    <div className="quantityDrop d-flex align-items-center">
      <Button className="minus" onClick={minus}>
        <FaMinus />
      </Button>
      <input type="text" value={inputval} />
      <Button className="plus" onClick={Plus}>
        <FaPlus />
      </Button>
    </div>
  );
};

export default QuantityBox;
