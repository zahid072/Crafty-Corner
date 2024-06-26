import { useState } from "react";
import { useEffect } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [reFetch, setReFetch] = useState(false);

  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://assignment-10-server-five-bay.vercel.app/allArts"
      );
      const jsonData = await res.json();
      setData(jsonData);
      setLoader(false);
     
    };
    fetchData();
    setReFetch(false)
  }, [reFetch]);
  console.log(reFetch)

  return { data, loader, setReFetch };
};

export default useFetchData;
