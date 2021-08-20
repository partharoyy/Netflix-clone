import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlanScreen from "./PlanScreen";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="h-[100vh] text-[#fff]">
      <Nav />
      <div className="flex flex-col ml-auto mr-auto pt-[25%] lg:pt-[7%] max-w-[800px]">
        <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-[400] border-b-[1px] border-solid border-b-[#282c2d] mb-4 ml-[.8rem] md:ml-[1.7rem] text-left">
          Edit Profile
        </h1>
        <div className="flex md:p-[40px] p-[30px]">
          <img
            className="h-[20px] md:h-[50px] ml-2 md:ml-4"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="edit-screen-avatar"
          />
          <div className="text-[#fff] ml-[10px] flex-1">
            <h2 className="bg-gray-600 p-[8px] lg:text-[16px] md:p-[15px] text-[12px] md:text-[20px] pl-[15px] text-left mb-3 w-[92%] md:w-[96%]">
              {user.email}
            </h2>
            <div className="">
              <h3 className="border-b-[1px] border-solid border-b-[#282c2d] md:text-[1.5rem] text-left px-[1rem]">
                Plans
                <PlanScreen />
              </h3>
              <button
                onClick={() => auth.signOut()}
                className="py-[6px] lg:py-[.5rem] lg:text-[16px] px-[8px] md:px-[10px] md:py-[12px] text-[.8rem] md:text-[1.3rem] mt-[5%] w-[92%] text-[#fff] bg-[#e50914] font-[600] border-none cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
