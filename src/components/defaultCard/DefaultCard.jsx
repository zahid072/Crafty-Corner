import React from "react";
import { FaStar } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

const DefaultCard = ({ crafts }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="bg-blue-gray-100">
          <img src={crafts.image} alt="craft" className="h-60 rounded-t" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{crafts.item_name}</h2>
          <p>Price: ${crafts.price}</p>
          <div className="flex justify-between items-center mt-5 w-full">
            <div className="">
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`${crafts.item_name} Details`}
                data-tooltip-place="top"
                className="btn bg-[#9BD8D9] hover:bg-[#7fbfc0]"
              >
                See Details
              </button>
              <Tooltip id="my-tooltip" />
            </div>
            <a className="flex gap-2 items-center ">
              <FaStar /> {crafts.rating}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultCard;
