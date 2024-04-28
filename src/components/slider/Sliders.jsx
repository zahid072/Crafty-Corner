import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper styles
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { FaStar } from "react-icons/fa6";

const Sliders = () => {
  const { data } = useFetchData();
  const sliceData = data.slice(1, 5);

  return (
    <div className="mt-5 relative">
      <Swiper
        key={sliceData.map((item) => item._id).join("_")} // Add a unique key to force re-render
        className="md:h-[600px] h-[500px] z-0"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {sliceData.map((arts_craft) => (
          <SwiperSlide className="w-full" key={arts_craft._id}>
            <div
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${arts_craft.image})`,
              }}
              className="w-full px-5 bg-no-repeat flex items-center justify-center bg-cover bg-center rounded-lg h-full"
            >
              <div className="max-w-3xl">
                <h1 className="text-white lg:text-5xl md:text-3xl text-2xl font-bold animate__animated animate__fadeInUp hover:text-orange-500 transition cursor-pointer">
                  {" "}
                  <Link
                    className="leading-snug "
                    to={`/estateDetails/${arts_craft._id}`}
                  >
                    {arts_craft.item_name}
                  </Link>
                </h1>
                <div className="md:flex md:gap-8 gap-6 items-center text-white text-xl font-semibold mt-4 animate__animated animate__fadeInUp ">
                  <p className="md:mb-0 mb-5 w-[112px] text-center bg-[#5C8392] rounded">
                    {arts_craft.stockStatus}
                  </p>
                  <p className="flex gap-2 md:text-2xl text-sm items-center">
                    Ratings: <FaStar />
                    {arts_craft.rating}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white mt-5 text-xl font-bold animate__animated animate__fadeInUp">
                  Price: ${arts_craft.price}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex md:w-[90vw] w-28 justify-between">
          <div className="swiper-button-prev swiperBtn font-bold text-white bg-[#5C8392] hover:bg-emerald-500 transition h-16 px-3 rounded"></div>
          <div className="swiper-button-next swiperBtn font-bold text-white bg-[#5C8392] hover:bg-emerald-500 transition h-16 px-3 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
