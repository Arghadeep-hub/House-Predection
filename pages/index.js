import {
  AddButton,
  Heading,
  ItemsSection,
  Paragraph,
} from "@/component/GridStyle";
import { addAvgValue, addDistance, addMinValue } from "@/redux/localitySlice";
import { Grid } from "@mui/material";
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
    try {
      houses.map((item) => {
        houseId = item.id;
        if (item.house.length === 0) throw "There is no House";
        if (item.facilities.length === 0)
          throw "There is no Faciliteis present";

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
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, [houses]);

  useEffect(() => {
    let min;
    houses.map((items) => {
      const res = items.house.filter((pin, i) => {
        // console.log(pin.minScore, `${pin.x} ${pin.y}`);
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

      {recomend && (
        <Grid container spacing={2}>
          {recomend.map((item, los) => {
            //console.log(item);
            return (
              <Grid key={los} item xs={12} md={6} lg={3}>
                <ItemsSection>
                  <Heading>Home {item.count}</Heading>
                  {item.restaurant && (
                    <Paragraph>resturant:&nbsp; {item.restaurant} km</Paragraph>
                  )}
                  {item.gym && <Paragraph>gym:&nbsp; {item.gym} km</Paragraph>}
                  {item.hospital && (
                    <Paragraph>hospital:&nbsp; {item.hospital}km</Paragraph>
                  )}
                  {item.school && (
                    <Paragraph>school:&nbsp; {item.school}km</Paragraph>
                  )}
                </ItemsSection>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}
export default memo(Home);
