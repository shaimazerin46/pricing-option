import { useEffect, useState } from "react";
import PriceDiv from "../PriceDiv/PriceDiv";


const PriceOption = () => {
    // const [prices,setprices] = useState([]);
    // useEffect(()=>{
    //     fetch('data.json')
    //     .then(res=>res.json())
    //     .then(data=>setprices(data))
    // },[])
    // console.log('ji')

    const prices =[
        {
          "id": 1,
          "membership": "Basic",
          "features": ["Access to gym equipment", "Locker room access", "1 group class per month"],
          "price": 3299
        },
        {
          "id": 2,
          "membership": "Standard",
          "features": ["Access to gym equipment", "Locker room access", "8 group classes per month", "Access to pool"],
          "price": 5499
        },
        {
          "id": 3,
          "membership": "Premium",
          "features": ["24/7 gym access", "Unlimited group classes", "2 personal training sessions per month", "Access to pool and spa"],
          "price": 8799
        },
        {
          "id": 4,
          "membership": "Family",
          "features": ["24/7 gym access", "Access for up to 4 family members", "Unlimited group classes", "Access to pool, spa, and family events"],
          "price": 12099
        },
        {
          "id": 5,
          "membership": "Student",
          "features": ["Access to gym equipment", "Locker room access", "5 group classes per month", "Discounted personal trainer rates"],
          "price": 4399
        }
      ]
      
    return (
        <div className="grid md:grid-cols-3 md:gap-20 gap-4 w-[1120px] mx-auto">
            {
                prices.map(option=><PriceDiv key={option.id} option={option}></PriceDiv>)
            }
        </div>
    );
};

export default PriceOption;
