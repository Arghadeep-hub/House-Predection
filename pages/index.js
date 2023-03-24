import { AddButton } from "@/component/GridStyle";
import { addAvgValue, addDistance, addMinValue } from "@/redux/localitySlice";
import dynamic from "next/dynamic";
import Head from "next/head";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomGrid = dynamic(() => import("@/component/CustomGrid"));

function Home() {
  const [recomend, setRecomend] = useState([]);
  const houses = useSelector((state) => state.locality.houses);
  const dispatch = useDispatch();

  const handleRecomendation = useCallback(() => {
    let houseId = "";
    let cord = "";
    houses.map((item) => {
      houseId = item.id;

      item.house.map((pin) => {
        cord = pin.x.toString() + pin.y.toString();
        item.facilities.map((pon, idx) => {
          // console.log(pin, ids);
          // console.log(pon, idx);

          const distance = Math.abs(pin.x - pon.x) + Math.abs(pin.y - pon.y); //Manhatten Distance

          dispatch(
            addDistance({
              id: houseId,
              distance,
              cord,
              facility: pon.name,
            })
          );
        });
        dispatch(addAvgValue({ id: houseId, cord }));
        dispatch(addMinValue({ id: houseId, cord }));
      });
    });
  }, [houses]);

  useEffect(() => {
    let min;
    houses.map((items) => {
      const res = items.house.filter((pin, i) => {
        console.log(pin.minScore, `${pin.x} ${pin.y}`);
        if (i === 0) min = pin.minScore;
        return min >= pin.minScore;
      });
      setRecomend(res);
    });
  }, [houses]);

  // console.log(recomend.length > 0 && recomend);

  return (
    <>
      <Head>
        <title>Housing Recomendation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {houses.length !== 0 &&
        houses.map((params) => {
          const { id, plot, house } = params;

          return (
            <div key={id} className="grid_div">
              <CustomGrid {...plot} id={id} cord={house} />
              <AddButton onClick={handleRecomendation}>
                recomend a house
              </AddButton>
            </div>
          );
        })}
    </>
  );
}
export default memo(Home);
