import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import CategoryPageCard from "../../components/categoryPageCard/CategoryPageCard";

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
     <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
     {filterData.map((art_craft) => (
        <CategoryPageCard key={art_craft._id} artCraft={art_craft} />
      ))}
     </div>
    </div>
  );
};

export default CategoryCraft;
