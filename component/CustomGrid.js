import {
  addDistance,
  addFacilities,
  addHouseCords,
} from "@/redux/localitySlice";
import dynamic from "next/dynamic";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SelectButton = dynamic(() => import("./SelectButton"));

function CustomGrid({ row, col, id, cord }) {
  const [house, setHouse] = useState(false);
  const dispatch = useDispatch();
  // console.log(cord.length);
  const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  // console.log(cord);

  const handleChnage = (i, idx, value) => {
    if (value === "") {
      // setHouse(false);
      return;
    }
    value = value.split(" ");

    switch (value[0]) {
      case "house":
        dispatch(addHouseCords({ id, i, idx, value, count:value[1] }));
        setHouse(true);
        break;

      default:
        // dispatch(addDistance({ id, cord: i.toString() + idx.toString() }));
        dispatch(addFacilities({ id, i, idx, value:value[0] }));
        break;
    }
    return;
  };

  return (
    <>
      {arrayChunk([...Array(col * row).keys()], row).map((row, i) => (
        <div key={i} className="flex_container">
          {row.map((_, idx) => {
            return (
              <SelectButton
                key={idx}
                i={i}
                idx={idx}
                cord={cord}
                handleChnage={handleChnage}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

export default memo(CustomGrid);
