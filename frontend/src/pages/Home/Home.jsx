import React, { useRef } from "react";
import video from '../../assets/vid9.mp4'
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";


function Home() {
  

  return (

      <div className="grid grid-rows-6">
        <div className=" bg-black">
        <video
            id="indexvideo"
            src={video}
            autoPlay
            muted
            loop
            style={{ width: '100%' }}
        />
        </div>
        <div className=" bg-slate-500">2</div>
        <div className="bg-red-400 ">3</div>
        <div className=" bg-orange-300">4</div>
        <div className=" bg-lime-500">5</div>
        <div className=" bg-cyan-400">6</div>
          
      </div>
   
  );
}

export default Home;
