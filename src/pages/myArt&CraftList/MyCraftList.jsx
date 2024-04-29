import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../provider/AuthProvider";
import useFetchData from "../../hooks/useFetchData";
import MyCard from "../../components/myCard/MyCard";

const MyCraftList = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const { user } = useContext(AuthContext);
  const { data } = useFetchData();

  useEffect(() => {
    if (!user) {
      return;
    }
    const userAddedData = data.filter((crafts) => crafts.email === user.email);
    if (filterBy === "Yes") {
      const filterData = userAddedData.filter(
        (crafts) => crafts.customization === filterBy
      );
      setFilteredData(filterData);
    } else if (filterBy === "No") {
      const filterData = userAddedData.filter(
        (crafts) => crafts.customization === filterBy
      );
      setFilteredData(filterData);
    } else {
      setFilteredData(userAddedData);
    }
    console.log(userAddedData);
  }, [data, user, filterBy]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Craft List || Crafty Corner</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="w-full h-36 flex items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url("https://thumbs.dreamstime.com/z/abstract-technology-particle-virtual-molecule-background-compu-abstract-technology-particle-virtual-molecule-imagination-computer-107178396.jpg")`,
        }}
      >
        <h1 className="text-black md:text-4xl text-2xl font-semibold">
          My Art & Craft
        </h1>
      </div>
      <div className="w-full flex justify-center py-5">
        <select
          onChange={(e) => {
            setFilterBy(e.target.value);
          }}
          name="category"
          required
          className="px-3 py-3 bg-[#91bbdd] rounded-lg mx-auto outline-none text-black font-semibold"
        >
          <option className="text-black bg-gray-100" value="">
            Filter By
          </option>
          <option className="text-black bg-gray-100" value="Yes">
            Customization Yes
          </option>
          <option className="text-black bg-gray-100" value="No">
            Customization No
          </option>
        </select>
      </div>
      <div className=" lg:mx-32 mx-2 my-5">
        {filteredData.map((craft) => (
          <MyCard key={craft._id} crafts={craft} />
        ))}
      </div>
    </>
  );
};

export default MyCraftList;
