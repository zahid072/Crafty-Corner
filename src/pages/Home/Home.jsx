import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Sliders from "../../components/slider/Sliders";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import useFetchData from "../../hooks/useFetchData";
import DefaultCard from "../../components/defaultCard/DefaultCard";

const Home = () => {
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const {data, loader}= useFetchData();
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
            {loader && <svg className='mx-auto' version="1.1" id="L1"  x="0px" y="0px" width="160px" height="160px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve"><circle fill="none" stroke="black" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="15" strokeDasharray="14.2472,14.2472" cx="50" cy="50" r="47"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform></circle><circle fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="10,10" cx="50" cy="50" r="39"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform></circle><g fill="black"><rect x="30" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.1"></animateTransform></rect><rect x="40" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.2"></animateTransform></rect><rect x="50" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform></rect><rect x="60" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.4"></animateTransform></rect><rect x="70" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.5"></animateTransform></rect></g></svg>}
          <div className="w-full flex gap-5 justify-center flex-wrap">
            {subCategoryData.map((subCategory) => (
              <CategoryCard key={subCategory._id} subCategory={subCategory} />
            ))}
          </div>
        </div>
        <div className="md:max-w-7xl lg:mx-auto mx-2">
          <h1 className="md:py-14 pt-10 pb-5 text-center md:text-4xl text-2xl font-medium">Craft item</h1>
          {loader && <svg className='mx-auto' version="1.1" id="L1"  x="0px" y="0px" width="160px" height="160px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve"><circle fill="none" stroke="black" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="15" strokeDasharray="14.2472,14.2472" cx="50" cy="50" r="47"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform></circle><circle fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="10,10" cx="50" cy="50" r="39"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform></circle><g fill="black"><rect x="30" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.1"></animateTransform></rect><rect x="40" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.2"></animateTransform></rect><rect x="50" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform></rect><rect x="60" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.4"></animateTransform></rect><rect x="70" y="35" width="5" height="30"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.5"></animateTransform></rect></g></svg>}
          <div className="grid lg:grid-cols-3 justify-items-center grid-cols-1 gap-5">
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
