import { Helmet } from "react-helmet";
import useFetchData from "../../hooks/useFetchData";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const AllArtCraftItems = () => {
  const { data, loader } = useFetchData();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Art & Craft Item || Crafty Corner</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div
        className="w-full h-36 flex items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://cdn5.vectorstock.com/i/1000x1000/00/09/abstract-background-particles-liquid-dynamic-flow-vector-43770009.jpg")`,
        }}
      >
        <h1 className="text-white md:text-4xl text-2xl font-semibold">
          <Fade>All Art & Craft</Fade>
        </h1>
      </div>

      <div className="overflow-x-auto lg:mx-28 mx-2 my-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="md:block hidden"></th>
              <th>Photo</th>
              <th className="md:block hidden">Name</th>
              <th>Price</th>
              <th className="md:block hidden">Ratings</th>
              <th></th>
            </tr>
          </thead>
           
          <tbody>
            {data.map(({ item_name, price, rating, image, _id }, index) => (
              <tr className="hover">
                <th className="md:block hidden">{index + 1}</th>
                <td>
                  <img className="size-10 rounded-full" src={image} alt="" />
                </td>
                <td className="md:block hidden"> {item_name}</td>
                <td className="text-nowrap">$ {price}</td>
                <td className="md:block hidden">
                  <span className="flex gap-2 items-center">
                    <FaStar /> {rating}
                  </span>
                </td>
                <td>
                 <Link to={`/craftDetails/${_id}`}> <button className="btn btn-outline">View Details</button></Link>
                </td>
              </tr>
            ))}
            {
             loader &&<span className="loading loading-bars mx-auto w-44 text-center block"></span>
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllArtCraftItems;
