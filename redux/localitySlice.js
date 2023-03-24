import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  houses: [
    {
      id: "62daf27c3ac584f264a6d382",
      plot: {
        row: 5,
        col: 6,
      },
      house: [
        // {
        //   x: 0,
        //   y: 0,
        // },
      ],
      facilities: [],
    },
  ],
};

export const localitySlice = createSlice({
  name: "locality",
  initialState,
  reducers: {
    addPlot: (state, action) => {
      // console.log(action.payload);
      state.houses = state.houses.concat(action.payload);
    },

    addHouseCords: (state, action) => {
      // console.log(action.payload);
      const { id, i, idx, value, count } = action.payload;
      state.houses.map((params) => {
        if (params.id === id) {
          // if the array is blank
          if (params.house.length === 0) {
            params.house = params.house.concat({
              x: i,
              y: idx,
              count,
            });
            return;
          }

          const arrVal = params.house.map((items) => {
            return items.x.toString() + items.y.toString();
          });

          const isDuplicate = arrVal.indexOf(i.toString() + idx.toString());

          if (isDuplicate === -1) {
            params.house = params.house.concat({
              x: i,
              y: idx,
              count,
            });
            return;
          }
        }
        return;
      });
    },

    addFacilities: (state, action) => {
      // console.log(action.payload);
      const { id, i, idx, value } = action.payload;
      state.houses.map((params) => {
        if (params.id === id) {
          // If the arr is blank
          if (params.facilities.length === 0) {
            params.facilities = params.facilities.concat({
              name: value,
              x: i,
              y: idx,
            });
            return;
          }

          const arrVal = params.facilities.map((items) => {
            if (items.x === i && items.y === idx) {
              items.name = value;

              return items.x.toString() + items.y.toString();
            }
            return items.x.toString() + items.y.toString();
          });
          const isDuplicate = arrVal.indexOf(i.toString() + idx.toString());

          // console.log(arrVal);

          if (isDuplicate === -1) {
            params.facilities = params.facilities.concat({
              name: value,
              x: i,
              y: idx,
            });
            return;
          }
        }
        return;
      });
    },
    addDistance: (state, action) => {
      const { id, distance, cord, facility } = action.payload;
      state.houses.map((params) => {
        if (params.id === id) {
          params.house.map((items) => {
            const itemId = items.x.toString() + items.y.toString();
            if (itemId === cord) {
              // console.log(facility);

              switch (facility) {
                case "restaurant":
                  items.restaurant = distance;
                  break;
                case "gym":
                  items.gym = distance;
                  break;
                case "hospital":
                  items.hospital = distance;
                  break;
                case "school":
                  items.school = distance;
                  break;

                default:
                  items.restaurant = null;
                  items.gym = null;
                  items.hospital = null;
                  items.school = null;
                  break;
              }
              return;
            }
          });
        }
      });
    },

    addAvgValue: (state, action) => {
      const { id, cord } = action.payload;
      let sum = 0;
      let len = 0;
      state.houses.map((items) => {
        if (items.id === id) {
          items.house.map((pin) => {
            const itemId = pin.x.toString() + pin.y.toString();

            if (pin.restaurant !== undefined) {
              sum += pin.restaurant;
              len++;
            }
            if (pin.gym !== undefined) {
              sum += pin.gym;
              len++;
            }
            if (pin.hospital !== undefined) {
              sum += pin.hospital;
              len++;
            }
            if (pin.school !== undefined) {
              sum += pin.school;
              len++;
            }

            if (itemId === cord) {
              // console.log(
              //   itemId,
              //   cord,
              //   sum,
              //   len,
              //   parseFloat((sum / len).toFixed(2))
              // );
              pin.avg = parseFloat((sum / len).toFixed(2));
            }
            return;
          });
        }
      });
    },
    addMinValue: (state, action) => {
      const { id, cord } = action.payload;
      let minValue = {};
      state.houses.map((items) => {
        if (items.id === id) {
          items.house.map((pin) => {
            const houseId = pin.x.toString() + pin.y.toString();

            if (pin.restaurant !== undefined && pin.avg !== undefined) {
              minValue = {
                min: Math.abs(pin.restaurant - pin.avg),
                houseId,
              };
            }
            if (pin.gym !== undefined && pin.avg !== undefined) {
              minValue = {
                min: Math.abs(pin.gym - pin.avg),
              };
            }
            if (pin.hospital !== undefined && pin.avg !== undefined) {
              minValue = {
                min: Math.abs(pin.hospital - pin.avg),
              };
            }
            if (pin.school !== undefined && pin.avg !== undefined) {
              minValue = {
                min: Math.abs(pin.school - pin.avg),
              };
            }
            if (houseId === cord) {
              // console.log(houseId, cord, minValue);
              pin.minScore = parseFloat(minValue.min.toFixed(2));
            }
            return;
          });
        }
      });
    },
  },
});

export const {
  addPlot,
  addHouseCords,
  addFacilities,
  addDistance,
  addAvgValue,
  addMinValue,
} = localitySlice.actions;
