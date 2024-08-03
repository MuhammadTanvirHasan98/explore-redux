import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const Cards = () => {

   const[cards, setCards] =  useState([]);

   useEffect(() => {
          
       fetch('https://server-gold-omega-79.vercel.app/allMeals')
       .then(res=> res.json())
       .then(data=> setCards(data)) 
     
   }, [])

   console.log(cards);


  return (
    <div>
        <h1 className="text-center font-bold ">Food Items: <span className="text-purple-500">{cards.length}</span> </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
            {
              cards.map(card=>(
                <FoodCard key={card._id} card={card}/>
              ))
            }
        </div>
    </div>
  );
};

export default Cards;