import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

const CraftDetails = () => {
  const [findData, setFindData] = useState({});
  const { id } = useParams();
  const { data } = useFetchData();
  

  useEffect(() => {
    const findBookData = data.find((craft) => craft._id === id);
    if (findBookData) {
      setFindData(findBookData);
    }
  }, [data, id]);
  const {
    image,
    item_name,
    short_description,
    price,
    rating,
    stockStatus,
    processing_time,
    customization,
    subcategory_Name,
  } = findData;
  const handleAddToCart = () => {
    toast.success("Successfully added.");
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Craft Details || Crafty Corner</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full h-full flex gap-12 md:flex-row flex-col mx-2">
        <div className="md:w-1/2 w-full md:h-[600px] bg-[#F3F3F3] rounded-xl flex items-center justify-center">
          <img src={image} alt="" className=" md:h-[550px]" />
        </div>
        <div className="md:w-1/2 w-full">
          <div>
            <h1 className="md:text-4xl text-2xl my-5 font-bold">{item_name}</h1>
            <p className="text-xl font-semibold text-[#131313cc]">
              Price: ${price}
            </p>
            <h3 className="border-t-2 mt-4 py-4 text-xl font-semibold text-[#131313cc]">
              {short_description}
            </h3>
            <div className="border-y-2 py-6">
              <p>
                <span className="font-bold flex gap-2 items-center">
                  Rating: <FaStar /> {rating}{" "}
                </span>
              </p>
            </div>
            <div className="py-6 flex gap-10">
              <div>
                <h3 className="text-[#131313b3] mb-4">Painting Type</h3>
                <h3 className="text-[#131313b3] mb-4">Processing Time</h3>
                <h3 className="text-[#131313b3] mb-4">Available</h3>
                <h3 className="text-[#131313b3] ">Customization</h3>
              </div>
              <div>
                <p className="text-[#131313b3] font-bold mb-4">:</p>
                <p className="text-[#131313b3] font-bold mb-4">:</p>
                <p className="text-[#131313b3] font-bold mb-4">:</p>
                <p className="text-[#131313b3] font-bold ">:</p>
              </div>
              <div>
                <h3 className="font-bold mb-4">{subcategory_Name} </h3>
                <h3 className="font-bold mb-4">{processing_time}</h3>
                <h3 className="font-bold mb-4">{stockStatus} </h3>
                <h3 className="font-bold ">{customization}</h3>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 rounded-lg bg-[#50B1C9] hover:bg-[#469cb2] text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CraftDetails;
