import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import { useParams } from "react-router-dom";

const UpdateCraft = () => {
  const [fetchData, setFetchData] = useState({});
  const [raFetch, setRaFetch] = useState(false);
  const [subcategory_Name, setSubcategory_Name] = useState("");
  const [customization, setCustomization] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  console.log(id);
  useEffect(() => {
    if (!id) {
      return;
    }
    fetch(`https://assignment-10-server-five-bay.vercel.app/allArts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
        setRaFetch(true);
        setCustomization(data.customization);
        setStockStatus(data.stockStatus);
        setSubcategory_Name(data.subcategory_Name);
      });
  }, [id, raFetch]);
  console.log(fetchData);

  const {
    item_name,
    image,
    rating,
    price,
    processing_time,
    short_description,
    _id,
  } = fetchData;

  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const item_name = form.name.value;
    const rating = form.rating.value;
    const processing_time = form.processing_time.value;
    const price = form.price.value;
    const short_description = form.details.value;
    const image = form.photo.value;
    const user_name = user.displayName;
    const email = user.email;

    const newArt = {
      image,
      item_name,
      subcategory_Name,
      rating,
      price,
      processing_time,
      customization,
      short_description,
      stockStatus,
      user_name,
      email,
    };

    console.log(newArt);

    // send data to the server
    fetch(`https://assignment-10-server-five-bay.vercel.app/allArts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully updated");
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update Craft || Crafty Corner</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div data-theme="light" className="bg-[#ECEDF1] ">
        <h2 className="lg:text-5xl md:text-4xl text-2xl text-black font-bold text-center py-24 bg-gradient-to-r transition from-[#5C8392] to-[#9BD8D9] rounded">
          Add Art & Craft
        </h2>
        <form
          className="md:px-24 px-2 md:py-10 py-5 text-black"
          onSubmit={handleAddCoffee}
        >
          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Item Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={item_name}
                  required
                  placeholder="Item Name"
                  className="input input-bordered w-full bg-white"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-semibold">Sub category</span>
              </label>
              <label className="input-group">
                <select
                  onChange={(e) => {
                    setSubcategory_Name(e.target.value);
                  }}
                  name="category"
                  className="px-3 py-3 w-full bg-[#ffffff] rounded-lg outline-none text-black font-semibold"
                >
                  <option
                    className="text-black bg-gray-100"
                    value="Landscape Painting"
                    selected={
                      fetchData?.subcategory_Name === "Landscape Painting"
                    }
                  >
                    Landscape Painting
                  </option>
                  <option
                    className="text-black bg-gray-100"
                    value="Portrait Drawing"
                    selected={
                      fetchData?.subcategory_Name === "Portrait Drawing"
                    }
                  >
                    Portrait Drawing
                  </option>
                  <option
                    className="text-black bg-gray-100"
                    value="Watercolour Painting"
                    selected={
                      fetchData?.subcategory_Name === "Watercolour Painting"
                    }
                  >
                    Watercolour Painting
                  </option>
                  <option
                    className="text-black bg-gray-100"
                    value="Oil Painting"
                    selected={fetchData?.subcategory_Name === "Oil Painting"}
                  >
                    Oil Painting
                  </option>
                  <option
                    className="text-black bg-gray-100"
                    value="Charcoal Sketching"
                    selected={
                      fetchData?.subcategory_Name === "Charcoal Sketching"
                    }
                  >
                    Charcoal Sketching
                  </option>
                  <option
                    className="text-black bg-gray-100"
                    value="Cartoon Drawing"
                    selected={fetchData?.subcategory_Name === "Cartoon Drawing"}
                  >
                    Cartoon Drawing
                  </option>
                </select>
              </label>
            </div>
          </div>

          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-semibold">
                  Short Description
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={short_description}
                  required
                  placeholder="Short Description"
                  className="input input-bordered w-full bg-white"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  required
                  placeholder="Price"
                  className="input input-bordered w-full bg-white"
                />
              </label>
            </div>
          </div>
          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-semibold">Ratings</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  required
                  placeholder="Ratings"
                  className="input input-bordered w-full bg-white"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-semibold">Customization</span>
              </label>
              <label className="input-group">
                <select
                  onChange={(e) => {
                    setCustomization(e.target.value);
                  }}
                  name="category"
                  className="px-3 py-3 w-full bg-[#ffffff] rounded-lg outline-none text-black font-semibold"
                >
                  <option
                    selected={fetchData?.customization === "Yes"}
                    className="text-black bg-gray-100"
                    value="Yes"
                  >
                    Yes
                  </option>

                  <option
                    selected={fetchData?.customization === "No"}
                    className="text-black bg-gray-100"
                    value="No"
                  >
                    No
                  </option>
                </select>
              </label>
            </div>
          </div>
          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">
                  Processing Time
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="processing_time"
                  defaultValue={processing_time}
                  required
                  placeholder="Processing Time?"
                  className="input input-bordered w-full bg-white"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-semibold">Stock Status</span>
              </label>
              <label className="input-group">
                <select
                  onChange={(e) => {
                    setStockStatus(e.target.value);
                  }}
                  name="category"
                  className="px-3 py-3 w-full bg-[#ffffff] rounded-lg outline-none text-black font-semibold"
                >
                  <option
                    selected={fetchData?.stockStatus === "In stock"}
                    className="text-black bg-gray-100"
                    value="In stock"
                  >
                    In stock
                  </option>

                  <option
                    selected={fetchData?.stockStatus === "Made to Order"}
                    className="text-black bg-gray-100"
                    value="Made to Order"
                  >
                    Made to Order
                  </option>
                </select>
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={image}
                  required
                  placeholder="Photo URL"
                  className="input input-bordered w-full bg-white"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update"
            className="btn btn-block bg-[#5C8392] hover:bg-[#587987] text-white"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateCraft;
