import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import SubCategoryPageCard from "../../components/subCategoryPageCard/SubCategoryPageCard";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const CategoryCraft = () => {
  const [filterData, setFilterData] = useState([]);
  const { cateName } = useParams();
  const { data, loader } = useFetchData();

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Category Craft || Crafty Corner</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="w-full h-36 flex items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url("https://cdn.create.vista.com/api/media/small/289581984/stock-video-abstract-motion-background-of-shining-particles-digital-wave-sparkling-blue-particles-beautiful-blue-floating-particles?videoStaticPreview=true&token=")`,
        }}
      >
        <h1 className="text-white md:text-4xl text-2xl font-semibold">
          <Fade>{cateName}</Fade>
        </h1>
      </div>
      {loader && (
        <svg
          className="mx-auto mt-5"
          version="1.1"
          id="L1"
          x="0px"
          y="0px"
          width="160px"
          height="160px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100"
          xmlSpace="preserve"
        >
          <circle
            fill="none"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
            strokeMiterlimit="15"
            strokeDasharray="14.2472,14.2472"
            cx="50"
            cy="50"
            r="47"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="5s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            fill="none"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray="10,10"
            cx="50"
            cy="50"
            r="39"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="5s"
              from="0 50 50"
              to="-360 50 50"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <g fill="black">
            <rect x="30" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.1"
              ></animateTransform>
            </rect>
            <rect x="40" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.2"
              ></animateTransform>
            </rect>
            <rect x="50" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.3"
              ></animateTransform>
            </rect>
            <rect x="60" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.4"
              ></animateTransform>
            </rect>
            <rect x="70" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.5"
              ></animateTransform>
            </rect>
          </g>
        </svg>
      )}
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center md:mx-32 gap-5 my-10 ">
        {filterData.map((art_craft) => (
          <SubCategoryPageCard crafts={art_craft} key={art_craft._id}/>
        ))}
      </div>
    </div>
  );
};

export default CategoryCraft;
