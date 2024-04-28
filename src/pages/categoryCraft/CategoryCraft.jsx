import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import DefaultCard from "../../components/defaultCard/DefaultCard";

const CategoryCraft = () => {
  const [filterData, setFilterData] = useState([]);
  const { cateName } = useParams();
  const { data } = useFetchData();

  useEffect(() => {
    const filteredData = data.filter(
      (craft) => craft.subcategory_Name == cateName
    );
    if (filterData) {
      setFilterData(filteredData);
    }
    console.log(filteredData);
  }, [data, cateName]);

  return (
    <div>
      <div
        className="w-full h-36 flex items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url("https://cdn.create.vista.com/api/media/small/289581984/stock-video-abstract-motion-background-of-shining-particles-digital-wave-sparkling-blue-particles-beautiful-blue-floating-particles?videoStaticPreview=true&token=")`,
        }}
      >
        <h1 className="text-white md:text-4xl text-2xl font-semibold">
          {cateName}
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center md:mx-32 gap-5 my-10 ">
        {filterData.map((art_craft) => (
          <DefaultCard crafts={art_craft} key={art_craft._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCraft;
