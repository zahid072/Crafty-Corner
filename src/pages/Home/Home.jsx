import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Sliders from "../../components/slider/Sliders";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import useFetchData from "../../hooks/useFetchData";
import DefaultCard from "../../components/defaultCard/DefaultCard";
import Trending from "../../components/trending/Trending";
import { MdOutlineMailOutline } from "react-icons/md";

const Home = () => {
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const { data, loader } = useFetchData();
  // new arrivals data
  useEffect(() => {
    const sorted = data.sort((a, b) => {
      return b.rating - a.rating;
    });
    setSortedData(sorted.slice(0, 9));
  }, [data]);

  // category data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://assignment-10-server-five-bay.vercel.app/subCategory"
      );
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
        {/* crafts item */}
        <div className="md:max-w-7xl lg:mx-auto mx-2">
          <h1 className="md:py-14 pt-10 pb-5 text-center md:text-4xl text-2xl font-medium">
            Craft Items
          </h1>
          {loader && (
            <svg
              className="mx-auto"
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
          <div className="grid lg:grid-cols-3 justify-items-center grid-cols-1 gap-5">
            {sortedData.map((crafts) => (
              <DefaultCard key={crafts._id} crafts={crafts} />
            ))}
          </div>
        </div>
        {/* category section */}
        <div>
          <h1 className="md:pt-14 pt-10 pb-5 text-center md:text-4xl text-2xl font-medium">
            Browse by Category
          </h1>
          {loader && (
            <svg
              className="mx-auto"
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
          <div className="w-full flex gap-5 justify-center flex-wrap">
            {subCategoryData.map((subCategory) => (
              <CategoryCard key={subCategory._id} subCategory={subCategory} />
            ))}
          </div>
        </div>

        {/* extra section */}
        <div
          className="py-10 mt-10 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0.01)), url("https://img.freepik.com/free-vector/abstract-background-with-distorted-line-shapes-white-background-monochrome-sound-line-waves_1217-6083.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1712275200&semt=ais")`,
          }}
        >
          <div className="flex md:flex-row flex-col gap-5 justify-center  lg:mx-36 md:mx-5 mx-2">
            <div
              className="md:w-8/12 w-full p-4 rounded"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0.01)), url("https://i.ibb.co/rbZgnxn/craft.png")`,
              }}
            >
              <div className="bg-[#f2ecec62] p-4 border rounded text-[#253f58] h-full backdrop-blur-sm">
                <h1 className="text-center md:text-4xl font-semibold max-w-72 md:ml-16">
                  Crafts according to your needs
                </h1>
                <p className="text-center text-xl max-w-80 md:ml-16 mt-3">
                  We promise to deliver quality & creativity
                </p>
              </div>
            </div>
            <div
              className="md:w-1/3 w-full rounded p-5 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0.01)), url("https://media.istockphoto.com/id/1288020112/vector/liquid-style-colorful-pastel-abstract-background-with-elements-vector.jpg?s=612x612&w=0&k=20&c=RVNXsYbufzsIJ2A5bGV4wWY9KJbErCj8DPCWQKOdfjs=")`,
              }}
            >
              <div className="p-5 border space-y-4 rounded bg-[#ffffff5e]">
                <h1 className="text-3xl font-semibold text-black text-center">
                  Subscribe
                </h1>
                <p className="text-black">
                  Register to our newsletter & get 20% OFF for your first order
                </p>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="user@email.com"
                    className="input w-full"
                  />
                  <MdOutlineMailOutline className="text-xl -ml-7" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* trending section */}

        <div className="lg:mx-36 md:mx-5 my-10 mt-16 mx-2">
          <Trending />
        </div>
      </div>
    </>
  );
};

export default Home;
