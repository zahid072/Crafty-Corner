import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../provider/AuthProvider";
import useFetchData from "../../hooks/useFetchData";
import DefaultCard from "../../components/defaultCard/DefaultCard";

const MyCraftList = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { user } = useContext(AuthContext);
  const { data } = useFetchData();

  useEffect(() => {
    const userAddedData = data.filter((crafts) => crafts.email === user.email);
     setFilteredData(userAddedData)
    console.log(userAddedData);
  }, [data, user]);

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
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center my-5">
        {
          filteredData.map(craft => <DefaultCard key={craft._id} crafts={craft}/>)
        }
      </div>
    </>
  );
};

export default MyCraftList;
