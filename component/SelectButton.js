import React, { memo } from "react";
import { SelectBtn } from "./GridStyle";

function SelectButton({ i, idx, handleChnage, cord }) {

  // if (cord.x === i && cord.y === idx) {
  //   console.log(cord);
  // }
  return (
    <SelectBtn
      name="facilities"
      id="names"
      onChange={(e) => handleChnage(i, idx, e.target.value)}
    >
      <option value="">+</option>
      <option value={`house ${cord.length}`}>Home</option>
      <option value="restaurant">Restaurant</option>
      <option value="gym">Gym</option>
      <option value="hospital">Hospital</option>
      <option value="school">School</option>
    </SelectBtn>
  );
}

export default memo(SelectButton);
