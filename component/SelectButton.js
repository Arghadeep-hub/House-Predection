import React, { memo } from "react";
import { SelectBtn } from "./GridStyle";

function SelectButton({ i, idx, handleChnage }) {

    return (
    <SelectBtn
      name="facilities"
      id="names"
      onChange={(e) => handleChnage(i, idx, e.target.value)}
    >
      <option value="">+</option>
      <option value="house">Home</option>
      <option value="restaurant">Restaurant</option>
      <option value="gym">Gym</option>
      <option value="hospital">Hospital</option>
      <option value="school">School</option>
    </SelectBtn>
  );
}

export default memo(SelectButton);
