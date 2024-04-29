import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdLineStyle } from "react-icons/md";

const Trending = () => {
  const [sortedData, setSortedData] = useState([]);
  const { data, loader } = useFetchData();

  useEffect(() => {
    const sorted = data.sort((a, b) => {
      return b.price - a.price;
    });
    setSortedData(sorted.slice(0, 6));
  }, [data]);
  return (
    <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-5 justify-center">
      <div className="md:w-8/12 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
        {sortedData.map((crafts) => (
          <Link key={crafts._id} to={`/craftDetails/${crafts._id}`}>
            <div
              className="h-60 md:w-60 w-[98vw] cursor-pointer rounded bg-cover bg-no-repeat bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${crafts.image})`,
              }}
            >
              <h1
                id="parent"
                className="hover:bg-[#3e3c3c68] rounded transition-all size-full text-center flex items-center justify-center"
              >
                <MdLineStyle
                  id="child"
                  className="text-white text-3xl scale-0"
                />
              </h1>
            </div>
          </Link>
        ))}
      </div>
      <div className="md:w-1/3 w-full flex justify-center items-center">
        <div>
          <a className="text-center text-6xl mb-5 mx-auto">
            <FaArrowTrendUp className="text-center mx-auto" />
          </a>
          <h1 className="text-center font-semibold text-3xl">Trending Now</h1>
          <p className="text-center md:px-5 px-2 mt-5">
            Discover trending art and craft inspirations to fuel your
            creativity.
          </p>
          <div className="mt-4 mx-auto w-32">
            <Link to={"/allArt&CraftItems"}>
              <button className="btn btn-neutral text-center ">
                Check More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
