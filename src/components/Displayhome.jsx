import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import Songitem from "./Songitem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Albumitem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>

      {/* second time */}

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Today's Trending</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <Songitem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
