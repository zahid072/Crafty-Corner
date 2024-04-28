import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Sliders from "../../components/slider/Sliders";
import CategoryCard from "../../components/categoryCard/CategoryCard";

const Home = () => {
  const [subCategoryData, setSubCategoryData] = useState([]);

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
      </div>
    </>
  );
};

export default Home;
