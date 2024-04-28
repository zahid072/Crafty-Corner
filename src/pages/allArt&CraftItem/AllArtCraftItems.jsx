import { Helmet } from "react-helmet";
import useFetchData from "../../hooks/useFetchData";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllArtCraftItems = () => {
  const { data } = useFetchData();

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
          backgroundImage: `url("https://cdn.create.vista.com/api/media/small/289581984/stock-video-abstract-motion-background-of-shining-particles-digital-wave-sparkling-blue-particles-beautiful-blue-floating-particles?videoStaticPreview=true&token=")`,
        }}
      >
        <h1 className="text-white md:text-4xl text-2xl font-semibold">
          All Art & Craft
        </h1>
      </div>

      <div className="overflow-x-auto lg:mx-28 mx-2 my-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="md:block hidden"></th>
              <th >Photo</th>
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
                <td ><img className="size-10 rounded-full" src={image} alt="" /></td>
                <td className="md:block hidden"> {item_name}</td>
                <td className="text-nowrap">$ {price}</td>
                <td className="md:block hidden"><span className="flex gap-2 items-center"><FaStar/> {rating}</span></td>
                <td><button className="btn btn-outline">View Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllArtCraftItems;
