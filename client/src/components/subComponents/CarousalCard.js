import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Banner1 from "../../assets/Carousal/Banner1.jpg";
import Banner2 from "../../assets/Carousal/Banner2.jpg";
import Banner3 from "../../assets/Carousal/Banner3.jpg";
import { useNavigate } from "react-router-dom";
import { LOREM } from "../../constants/AppRoutes";

const CarousalCard = () => {

  const navigate=useNavigate()

  var items = [
    {
      bgImg: Banner1,
      description:<div className="pl-10">
        <h2 className="text-5xl text-blue-700 pl-20 font-bold pt-20">Introducing</h2>
        <h2 className="text-4xl text-blue-700 pl-20 font-bold ">YES Grandeur</h2>
        <h2 className="text-2xl text-slate-500 pl-20 pt-10 font-semibold">Make every moment grand!</h2>
        <div className="pl-16 pt-10 space-x-3"> 
      <button className="text-xl text-white rounded-full py-2 px-5 bg-red-600" onClick={()=>navigate(LOREM)}>Apply</button>
      <button className="text-xl text-white rounded-full py-2 px-5 bg-red-600" onClick={()=>navigate(LOREM)}>Know More</button>
      </div> 
      </div>,
    },
    {
      bgImg: Banner2,
      description: <div className="pl-16">
      <h2 className="text-5xl text-blue-700 pl-20 font-bold pt-20">LIFE KO BANAO</h2>
      <h2 className="text-4xl text-blue-700 pl-20 font-bold ">RICH</h2>
      <h2 className="text-2xl text-slate-500 pl-20 pt-10 font-semibold">Earn upto 7% PTA</h2>
      <div className="pl-16 pt-10 space-x-3"> 
      <button className="text-xl text-white rounded-full py-2 px-5 bg-red-600" onClick={()=>navigate(LOREM)}>Apply</button>
      <button className="text-xl text-white rounded-full py-2 px-5 bg-red-600" onClick={()=>navigate(LOREM)}>Know More</button>
      </div>  
    </div>,
    },
    {
      bgImg: Banner3,
      description: <div className="pl-16">
      <h2 className="text-5xl text-blue-700 pl-20 font-bold pt-20">GET UPTO</h2>
      <h2 className="text-4xl text-blue-700 pl-20 font-bold ">8.25% INTEREST</h2>
      <h2 className="text-2xl text-slate-500 pl-20 pt-10 font-semibold">Interest for Senior Citizens on Fixed Deposit</h2>
      <div className="pl-16 pt-10 space-x-3"> 
      <button className="text-xl text-white rounded-full py-2 px-5 bg-red-600" onClick={()=>navigate(LOREM)}>Apply</button>
      <button className="text-xl text-white rounded-full py-2 px-5 bg-red-600" onClick={()=>navigate(LOREM)}>Know More</button>
      </div>  
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
