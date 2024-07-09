import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Banner1 from "../../assets/Carousal/Banner1.png";
import Banner2 from "../../assets/Carousal/Banner2.png";
import Banner3 from "../../assets/Carousal/Banner3.jpg";
import { useNavigate } from "react-router-dom";
import { LOREM } from "../../constants/AppRoutes";

const CarousalCard = () => {

  const navigate = useNavigate()

  var items = [
    {
      bgImg: Banner1,
      description: <div className="pl-10">
      </div>,
    },
    {
      bgImg: Banner2,
      description: <div className="pl-16">
      </div>,
    },
    {
      bgImg: Banner3,
      description: <div className="pl-16">
      </div>,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper>
      <div class="w-screen h-96 bg-cover" style={{ backgroundImage: `url(${props.item.bgImg})` }}>
        <p>{props.item.description}</p>
      </div>
    </Paper>
  );
}

<Carousel
  NextIcon={<img src="http://random.com/next" alt="next" />}
  PrevIcon={<img src="http://random.com/prev" alt="prev" />}
></Carousel>;

export default CarousalCard;
