import { AddButton } from "@/component/GridStyle";
import { addDistance } from "@/redux/localitySlice";
import dynamic from "next/dynamic";
import Head from "next/head";
import { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomGrid = dynamic(() => import("@/component/CustomGrid"));

function Home() {
  const houses = useSelector((state) => state.locality.houses);
  const dispatch = useDispatch();

  const handleRecomendation = useCallback(() => {
    houses.map((item) => {
      item.house.map((pin, ids) => {
        item.facilities.map((pon, idx) => {
          // console.log(pin, ids);
          // console.log(pon, idx);

          const distance = Math.abs(pin.x - pon.x) + Math.abs(pin.y - pon.y, 2);

          dispatch(
            addDistance({
              id: item.id,
              distance,
              cord: pin.x.toString() + pin.y.toString(),
              facility: pon.name,
            })
          );
        });
      });
    });
  }, [houses]);

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
