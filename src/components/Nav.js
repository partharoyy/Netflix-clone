import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div
      className={
        "fixed top-0 p-[20px] w-full h-[70px] z-[1] transition-all duration-500 ease-in" +
        (showNav && " bg-black")
      }
    >
      <div className="flex justify-between ">
        <img
          onClick={() => history.push("/")}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
          className="fixed left-0  top-[10px] md:top-[10px] w-[100px] md:w-[150px] object-contain pl-[5px] cursor-pointer"
        />

        <img
          onClick={() => history.push("/profile")}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          className="fixed md:right-[20px] right-[15px] w-[25px] top-[1.5rem] md:w-[40px] md:top-[1.5rem] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;
