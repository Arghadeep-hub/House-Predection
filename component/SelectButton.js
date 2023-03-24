import React, { memo, useEffect, useState } from "react";
import { SelectBtn } from "./GridStyle";

function SelectButton({ i, idx, handleChnage, cord }) {
  const [names, setNames] = useState("");
  useEffect(() => {
    cord.map((items) => {
      if (items.x === i && items.y === idx) {
        // console.log(items);
        setNames(items.count);
      }
    });
  }, [cord]);

  return (
    <SelectBtn
      name="facilities"
      id="names"
      onChange={(e) => handleChnage(i, idx, e.target.value)}
    >
      <option value="">+</option>
      <option value={`house ${cord.length + 1}`}>Home{names}</option>
      <option value="restaurant">Restaurant</option>
      <option value="gym">Gym</option>
      <option value="hospital">Hospital</option>
      <option value="school">School</option>
    </SelectBtn>
  );
}

export default memo(SelectButton);
