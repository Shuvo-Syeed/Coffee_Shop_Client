import React from 'react'
import Swal from 'sweetalert2';
import { Link } from 'react-router';


const CoffeeCard = ({coffee}) => {
    if (!coffee) return null; // crash avoidance
  const {photo,name,quantity,taste,price,details}=coffee;
  return (
    <div>
      <div className="card card-side glass border border-gray-30 shadow-lg mb-4 mx-2">
  <figure>
    <img
      src={photo}
      alt="photo"
       className="w-18 h-18 md:w-28 md:h-28" />
  </figure>
  <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-400"><span className="font-medium">Price:</span> ${price}</p>
            <p className="text-gray-400"><span className="font-medium">Taste:</span> {taste}</p>
            <p className="text-gray-400"><span className="font-medium">Quantity:</span> {quantity}</p>
            <p className="text-gray-400"><span className="font-medium">Details:</span> {details}</p>
          </div>

          {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-2 md:flex-col md:justify-end">
  <button className="btn btn-sm glass bg-blue-500 text-white hover:bg-blue-400 border-0">View</button>
  <button className="btn btn-sm glass bg-green-500 text-white hover:bg-green-400 border-0">Edit</button>
  <button className="btn btn-sm glass bg-red-500 text-white hover:bg-red-400 border-0">Delete</button>
</div>
</div>
    </div>
    </div>
  )
}

export default CoffeeCard
