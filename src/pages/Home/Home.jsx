import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Sliders from "../../components/slider/Sliders";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import useFetchData from "../../hooks/useFetchData";
import DefaultCard from "../../components/defaultCard/DefaultCard";

const Home = () => {
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const {data}= useFetchData();
  // new arrivals data
  useEffect(() => {
    const sorted = data.sort((a, b) => {
        return b.rating - a.rating;
    });
    setSortedData(sorted.slice(0, 9))
  }, [data]);
 
  // category data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/subCategory");
      const data = await response.json();
      setSubCategoryData(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Crafty Corner</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <Sliders />
        <div>
          <h1 className="md:py-14 pt-10 pb-5 text-center md:text-4xl text-2xl font-medium">
            Browse by Category
          </h1>
          <div className="w-full flex gap-5 justify-center flex-wrap">
            {subCategoryData.map((subCategory) => (
              <CategoryCard key={subCategory._id} subCategory={subCategory} />
            ))}
          </div>
        </div>
        <div className="md:max-w-7xl lg:mx-auto mx-2">
          <h1 className="md:py-14 pt-10 pb-5 text-center md:text-4xl text-2xl font-medium">New Arrivals</h1>
          <div className="grid lg:grid-cols-3 justify-items-center md:grid-cols-2 grid-cols-1 gap-5">
              {
                sortedData.map(crafts => <DefaultCard key={crafts._id} crafts={crafts}/>)
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
