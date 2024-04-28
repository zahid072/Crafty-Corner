import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";

const AddCraftItem = () => {
  const [subcategory_Name, setSubcategory_Name] = useState("Landscape_Painting");
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const item_name = form.name.value;
    const rating = form.rating.value;
    const processing_time = form.processing_time.value;
    const customization = form.customization.value;
    const price = form.price.value;
    const short_description = form.details.value;
    const image = form.photo.value;
    const stockStatus = form.stock.value;

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
    };

    console.log(newArt);

    // send data to the server
    fetch("http://localhost:5000/allArts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
           toast.success("Successfully added")
           form.reset()
        }
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Craft Item || Crafty Corner</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-[#ECEDF1] ">
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center py-24 bg-gradient-to-r transition from-[#5C8392] to-[#9BD8D9] rounded">
          Add Art & Craft
        </h2>
        <form
          className="md:px-24 px-2 md:py-10 py-5"
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
                  required
                  placeholder="Item Name"
                  className="input input-bordered w-full"
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
                  required
                  className="px-3 py-3 w-full bg-[#ffffff] rounded-lg  outline-none text-black font-semibold"
                >
                  <option
                    className="text-black bg-gray-100"
                    value=""
                  >
                    Select Sub Category
                  </option>
                  <option
                    className="text-black bg-gray-100"
                    value="Landscape Painting"
                  >
                    Landscape Painting
                  </option>
                  <option
                    className="text-black bg-gray-100"
                    value="Portrait Drawing"
                  >
                    Portrait Drawing
                  </option>
                  <option
                    className="text-black bg-gray-100 "
                    value="Watercolour Painting"
                  >
                    Watercolour Painting
                  </option>
                  <option
                    className="text-black bg-gray-100 "
                    value="Oil_Painting"
                  >
                    Oil Painting
                  </option>
                  <option
                    className="text-black bg-gray-100 "
                    value="Charcoal Sketching"
                  >
                    Charcoal Sketching
                  </option>
                  <option
                    className="text-black bg-gray-100 "
                    value="Cartoon Drawing"
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
                  required
                  placeholder="Short Description"
                  className="input input-bordered w-full"
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
                  required
                  placeholder="Price"
                  className="input input-bordered w-full"
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
                  required
                  placeholder="Ratings"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-semibold">Customization</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="customization"
                  required
                  placeholder="Yes or No"
                  className="input input-bordered w-full"
                />
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
                  required
                  placeholder="Processing Time?"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-semibold">Stock Status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="stock"
                  required
                  placeholder="Stock status"
                  className="input input-bordered w-full"
                />
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
                  required
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Craft"
            className="btn btn-block bg-[#5C8392] hover:bg-[#587987] text-white"
          />
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AddCraftItem;
