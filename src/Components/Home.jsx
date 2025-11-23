import React from 'react'
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard.jsx';


const Home = () => {
  const coffees=useLoaderData();
  console.log(coffees);
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      {
  Array.isArray(coffees) &&
  coffees.map(coffee =>
    <CoffeeCard key={coffee._id} coffee={coffee} />
  )
}
</div>
     <div>
    
     </div>
    </div>
  )
}

export default Home
