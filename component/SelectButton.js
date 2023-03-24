import React, { memo, useEffect, useState } from "react";
import { SelectBtn } from "./GridStyle";

function SelectButton({ i, idx, handleChnage, cord, max }) {
  const [names, setNames] = useState("");
  useEffect(() => {
    cord.map((items) => {
      if (items.x === i && items.y === idx) {
        // console.log(Math.floor(Math.random() * max));
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
      <option value={`house ${Math.floor(Math.random() * 30) + 1}`}>
        Home{names}
      </option>
      <option value="restaurant">Restaurant</option>
      <option value="gym">Gym</option>
      <option value="hospital">Hospital</option>
      <option value="school">School</option>
    </SelectBtn>
  );
}

export default memo(SelectButton);
