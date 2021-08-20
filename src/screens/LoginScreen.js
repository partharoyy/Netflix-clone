import React, { useState } from "react";
import SignupScreen from "./SignupScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="relative h-[100%]"
      style={{
        background: `url(
          "https://hcdevilsadvocate.com/wp-content/uploads/2019/01/netflix-background-9-900x506.jpg"
        )`,
        backgroundPosition: "center no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="loginPageLogo"
          className="fixed left-0 top-[10px] w-[120px] md:w-44 lg:w-[13rem] lg:ml-[2rem] lg:mt-[.1rem] object-contain pl-[10px] cursor-pointer"
        />
        {!signIn && (
          <button
            onClick={() => setSignIn(true)}
            className="rounded fixed right-[17px] top-[25px]  py-[3px] lg:font-extrathin px-[8px] bg-[#e50914] font-normal border-none text-[.8rem] md:text-[1.2rem] lg:px-[16px] lg:py-[4px] lg:text-[1rem] text-[#f3eded] cursor-pointer"
          >
            Sign In
          </button>
        )}
        <div className="w-[100%] z-[1] h-[100vh] bg-login-bg bg-gradient-to-t from-login-bg-img-from via-login-bg-img-via to-login-bg-img-to" />
      </div>
      <div className="left-0 right-0 absolute z-[1] text-[#f3eded] top-[20%] md:top-[25%]">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1 className="text-[1.7rem] md:text-[2.5rem] lg:text-[4rem] mb-[12px] font-medium px-[1.3rem] leading-tight">
              Unlimited movies, TV shows and more.
            </h1>
            <h3 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-light mb-[12px]">
              Watch anywhere. Cancel anytime.
            </h3>
            <h2 className="text-[1rem] lg:text-[1.4rem] md:text-[1.5rem] px-[3rem]  font-extralight">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h2>
            <div className="m-[20px]">
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="text-[#000] text-[12px] md:text-[15px] rounded-sm px-[10px] py-[23px] outline-none h-[20px] w-[100%] border-none max-w-[600px]"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="rounded-sm relative top-[12px] md:top-[.2px] py-[.6rem] md:py-[.7rem] pr-[1.7rem] pl-[1rem] text-[1rem] text-[#f3eded] bg-[#e50914] border-none font-normal cursor-pointer"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-4 absolute right-[.03rem] top-[8.5px] md:top-[10px] mr-[6px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
