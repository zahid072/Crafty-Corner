import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../pages/shared/Navbar/Nav";
import Footer from "../pages/shared/footer/Footer";

const Root = () => {
  const [themes, setThemes] = useState("light");

  const handleThemeToggle = ()=>{
     setThemes(themes === "light" ? "dark" : "light")
  }

  return (
    <div data-theme={themes}>
      <div className="bg-[#ECEDF1] py-1 w-full mr-0">
        <Nav handleThemeToggle={handleThemeToggle} themes={themes}/>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
