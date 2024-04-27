import React from "react";

const AddCraftItem = () => {
  return (
    <div>
      <div className="bg-[#ECEDF1] ">
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center py-24 bg-gradient-to-r transition from-green-400 to-blue-500 rounded">
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
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-semibold">Ratings</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Ratings"
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
                  placeholder="Processing Time?"
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
                  placeholder="Yes or No"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Sub category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Sub category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-semibold">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Short Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-semibold">In Stocks</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="stock"
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
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block bg-[#5C8392] hover:bg-[#587987] text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
