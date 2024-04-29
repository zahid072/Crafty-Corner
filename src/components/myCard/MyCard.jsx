import React from "react";
import { FaStar } from "react-icons/fa";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const MyCard = ({ crafts, setReFilter }) => {
  const { item_name, image, price, rating, _id, customization } = crafts;


  const handleDelete = (id)=>{
    fetch(`http://localhost:5000/allArts/${id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data =>{
        
        console.log(data)
        
      })
      setReFilter(true)
  }
  return (
    <div>
      <div className="mb-6">
        <div className="md:flex w-full border-2 p-5 rounded-lg space-x-2 sm:space-x-4">
          <div className="md:w-60 md:h-56 bg-gray-500 rounded-lg flex items-center">
            <img
              className="flex-shrink-0 object-cover  md:h-52 mx-auto border-transparent rounded outline-none "
              src={image}
              alt={item_name}
            />
          </div>
          <div className="md:flex flex-col gap-4 space-y-4 w-full">
            <div className="flex justify-between w-full space-x-2">
              <div className="space-y-1 ">
                <h3 className="text-2xl font-semibold leading-snug md:mt-0 mt-5">
                  {item_name}
                </h3>
                <p className="text-sm">Price: {price}</p>
              </div>
            </div>
            <div className="md:flex gap-5 items-center md:space-y-0 space-y-6">
              <p>
                <span className="bg-[#328eff26] rounded-full px-5 py-2 text-[#11a6fc] font-semibold">
                  Customization: {customization}
                </span>
              </p>
              <p>
                <span className="bg-[#ffac3326] rounded-full px-5  py-2 text-[#FFAC33] font-semibold">
                  <FaStar className="inline" /> {rating}
                </span>
              </p>
            </div>

            <div className="flex md:flex-row flex-col border-t-2 pt-4 md:items-center gap-8">
              <div className="">
                <Link to={`/craftDetails/${_id}`}>
                  <button className="px-4 py-3 rounded-lg bg-[#7ea8c8] text-white font-semibold">
                    View details
                  </button>
                </Link>
              </div>
              <div>
                <Link to={`/updateCraft/${_id}`} className="text-2xl w-full text-center btn">
                  <MdModeEdit />
                </Link>
              </div>
              <button onClick={()=>{
                    handleDelete(_id)
                  }} className="text-2xl text-center btn text-red-500">
                    <MdDelete />
                  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
