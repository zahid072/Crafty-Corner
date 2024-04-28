import { useState } from "react";
import { useEffect } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    const res = await fetch(
      "http://localhost:5000/allArts"
    );
    const jsonData = await res.json();
    setData(jsonData);
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loader };
};

export default useFetchData;
