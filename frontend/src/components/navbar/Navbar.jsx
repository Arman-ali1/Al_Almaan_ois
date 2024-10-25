import React, { useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./nav.css";
import Image from "../../assets/menu.png";
import Image1 from "../../assets/remove.png";
import logois from "../../assets/logois.png";

function Navbar() {
  const about = useRef(null);
  const navigate = useNavigate();
  const[mobMenu,setMobMenu]=React.useState(false)
  const[image,setImage]=React.useState(true)
  const navItem = {
    introduction: {
      text: "introduction",
      url: "/",
      active: "handleintroduction",
      style: "font-family: cursive ;",
    },
    home: {
      text: "Home",
      url: "/",
      active: "handleHome",
      style: "font-family: cursive;",
    },
    About: {
      text: "About",
      url: "/",
      active: "handleStudentCorner",
    },
    Courses: {
      text: "Courses",
      url: "/",
      active: "handleExaminationCorner",
    },
    Library: {
      text: "library",
      url: "/",
      active: "handleInvester",
    },
    Contact: {
      text: "Contact",
      url: "/",
      active: "handleContact",
    },
    Donate: {
      text: "Donate",
      url: "/",
      active: "handleContact",
    },
    Login: {
      text: "Login",
      url: "/",
      active: "handleContact",
    },
  };
  // button style
  const buttoncss = {
    button :{
        "--color": "#FFFFFF",
        "font-size": "1.5em",
        "padding": "0.3em .5em",
        "font-weight": "650",
        "fontFamily": "inherit",
        "display": "inline-block",
        // "lineHeight": "1.5em",
        "overflow": "hidden",
        "cursor": "pointer",
        "zIndex": "1",
        "color": "var(--color)",
        // "border": "2px solid var(--color)",
        "borderRadius": "6px",
        "position": "relative",
        // "hover":background-color: #FFFFFF
      },
      list:{
        listStyle:"none"
      }
  } 
  //navbar css 
  // const navcss={
  //   navbar :{
  //     "display": "grid",
  //     "grid-template-columns": "repeat(7, minmax(110px, 1fr))", /* Auto-fit with min 100px, making items responsive */
  //     "justify-items": "center", /* Center each item horizontally */
  //     "gap": "24px" /* Optional: Adjust space between items */
  //   }
  // }

  return (
    <header className="bg-green-930 ">
      <div className="bg-green-800">
        <h2 className="text-white sm:text-base text-xs sm:font-bold  text-center font-serif">
          Get real-time assistance with your queries. Try{" "}
          <span className="text-blue-600 ">
            <a className="cursor-pointer sm:hover:border-b-yellow-500 sm:hover:bg-green-400  ">
              AI Help{" "}
            </a>
          </span>
          now!
        </h2>
      </div>
      <div className='grid grid-cols-3 gap-4 bg-green p-4 text-white' >
        <div className="col-span-1">
          <Link  to="/">
              {/* <h2 className=" text-white   sm:font-bold font-semibold">
                Trinity{" "}
                <span className="text-black rounded-sm pl-1 pr-1  bg-white">
                  InfoTech
                </span>
              </h2> */}
              <img src={logois} alt="logo" className=" rounded-full h-[60px]"/>
            </Link>
        </div>
        <div className=" col-span-2 space-x-6 " > 
          <div style={buttoncss.button} className=" bg-white  cursor-pointer " >
              <Link to="/">
                <h2 className="text-green-930   ">{navItem.home.text}</h2>
              </Link>
          </div>
          <div style={buttoncss.button} className=" hover:bg-white  cursor-pointer hover:text-green-930" >
              <Link to="/" className="hover:text-green-930" >
                <h2 >{navItem.About.text}</h2>
              </Link>
          </div>
          <div className=" cursor-pointer hover:bg-white" style={buttoncss.button}>
              <Link to="/" className="hover:text-green-930" >
                <h2>{navItem.Courses.text}</h2>
              </Link>
          </div>
          <div className=" cursor-pointer hover:bg-white" style={buttoncss.button}>
              <Link to="/" className="hover:text-green-930" >
                <h2>{navItem.Library.text}</h2>
              </Link>
          </div>
          <div className=" cursor-pointer hover:bg-white" style={buttoncss.button}>
              <Link to="/" className="hover:text-green-930" >
                <h2>{navItem.Contact.text}</h2>
              </Link>
          </div>
          <div className=" cursor-pointer hover:bg-white border-gray-100 border-2" style={buttoncss.button}>
              <Link to="/" className="hover:text-green-930" >
                <h2>{navItem.Donate.text}</h2>
              </Link>
          </div>
          <div className=" cursor-pointer hover:bg-white  border-gray-100 border-2 " style={buttoncss.button}>
              <Link to="/" className="hover:text-green-930 " >
                <h2>{navItem.Login.text}</h2>
              </Link>
          </div>     
        </div>
      </div>
      
    </header>
  );
}

export default Navbar;
