import React from 'react'
import Card1 from '../../assets/cards/card1.webp'
import Card2 from '../../assets/cards/card2.png'
import Card3 from '../../assets/cards/card3.png'
import Card4 from '../../assets/cards/card4.png'
import { useNavigate } from 'react-router-dom'
import { LOREM } from '../../constants/AppRoutes'

const Cards = () => {

  const navigate=useNavigate()
  
  const items = [
    {
      bgImg: Card1,
      description: (
        <div className="flex flex-col gap-6 md:gap-20">
          <div>
            <h3 className="text-xl font-bold text-slate-500">Credit Card</h3>
            <h6 className="pt-2">Experience a</h6>
            <h6>rewarding</h6>
            <h6>journey</h6>
            <h6>with</h6>
            <h6>RuPay</h6>
          </div>
          <button className="text-sm text-white rounded-full py-1 px-2 bg-red-600 w-28 mx-auto" onClick={()=>navigate(LOREM)}>Know More</button>
        </div>
      ),
    },
    {
      bgImg: Card2,
      description: (
        <div className="flex flex-col gap-6 md:gap-20">
          <div>
            <h3 className="text-xl font-bold text-slate-500">Floating Rate</h3>
            <h3 className="text-xl font-bold text-slate-500">Fixed Deposit</h3>
            <h6 className="pt-2">Book Today</h6>
            <h6>enjoy dynamic</h6>
            <h6>return with</h6>
            <h6>RuPay</h6>
          </div>
          <button className="text-sm text-white rounded-full py-1 px-2 bg-red-600 w-28 mx-auto" onClick={()=>navigate(LOREM)}>Know More</button>
        </div>
      ),
    },
    {
      bgImg: Card3,
      description: (
        <div className="flex flex-col gap-6 md:gap-20">
          <div>
            <h3 className="text-xl font-bold text-slate-500 text-right">Personal Loan</h3>
            <h6 className="pt-2">Book Today</h6>
            <h6>Avail loan</h6>
            <h6>at attractive</h6>
            <h6>Interest rate</h6>
          </div>
          <button className="text-sm text-white rounded-full py-1 px-2 bg-red-600 w-28 mx-auto" onClick={()=>navigate(LOREM)}>Know More</button>
        </div>
      ),
    },
    {
      bgImg: Card4,
      description: (
        <div className="flex flex-col gap-6 md:gap-28">
          <div>
            <h3 className="text-xl font-bold text-slate-500">NRI</h3>
            <h3 className="text-xl font-bold text-slate-500">Banking</h3>
            <h6 className="pt-2">Enjoy carefree</h6>
            <h6>moment at</h6>
            <h6>home</h6>
          </div>
          <button className="text-sm text-white rounded-full py-1 px-2 bg-red-600 w-28 mx-auto" onClick={()=>navigate(LOREM)}>Know More</button>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="w-full h-72 bg-cover bg-center flex flex-col justify-between p-4"
          style={{ backgroundImage: `url(${item.bgImg})` }}
        >
          <div className="flex-grow">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
