import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./Displayhome";
import Displayalbum from "./Displayalbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayuseref = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");

  const albumId = isAlbum ? location.pathname.slice(-1) : "";

  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayuseref.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayuseref.current.style.background = `#121212`;
    }
  });

  return (
    <div
      ref={displayuseref}
      className="w-[100%] m-2 px-6 rounded bg-[#121121] text-white overflow-auto lg:w-[75%] lg:ml-0 "
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<Displayalbum />} />
      </Routes>
    </div>
  );
};

export default Display;
