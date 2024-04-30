import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
const SubCategoryPageCard = ({ crafts }) => {
  return (
    <div>
      <div
        data-theme="light"
        className="card md:w-96 w-72 bg-base-100 shadow-xl rounded"
      >
        <figure className="bg-gray-200">
          <img
            src={crafts?.image}
            alt="craft"
            className="md:h-60 h-48 rounded-t"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{crafts?.item_name}</h2>
          <h2 className="py-1 text-xl font-semibold border-t">
            {crafts?.subcategory_Name}
          </h2>
          <p className="font-medium card-actions py-1 border-t">
            {crafts?.short_description}
          </p>
          <div className="md:flex items-center card-actions justify-between w-full gap-5">
            <p className="p-1 md:border rounded">Price: ${crafts?.price}</p>
            <p className="p-1 md:border rounded">
              Process Time: {crafts?.processing_time}
            </p>
          </div>
          <div className="flex justify-between items-center mt-5 w-full">
            <div className="">
              <Link to={`/craftDetails/${crafts?._id}`}>
                <button
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={`${crafts?.item_name} Details`}
                  data-tooltip-place="top"
                  className="btn bg-[#9BD8D9] text-black hover:bg-[#7fbfc0]"
                >
                  View Details
                </button>
              </Link>
              <Tooltip id="my-tooltip" />
            </div>
            <a className="flex gap-2 items-center ">
              <FaStar /> {crafts?.rating}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryPageCard;
