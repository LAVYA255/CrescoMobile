import React from "react";
import Navbar from "../components/Navbar";
import Menu from "./Menu";

const Kitchen = () => (
  <>
    <Navbar />
    {/* ...Kitchen page content... */}
    <div className="container mx-auto mt-24">
      <h1 className="text-3xl font-bold">Kitchen</h1>
    </div>
    <Menu></Menu>
  </>
);

export default Kitchen;
