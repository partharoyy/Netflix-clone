import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userAuth) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="max-w-[400px] md:max-w-[500px] lg:max-w-[400px] h-[100vh] lg:h-[45vh] md:h-[40vh] p-[20px] md:p-[15px] mr-auto ml-auto bg-signup-screen rounded">
      <form className="flex flex-col">
        <h1 className="text-left mb-[30px] lg:text-[1.8rem] lg:mt-[1.5rem] text-[1.8rem] md:text-[2rem] font-semibold">
          Sign In
        </h1>
        <input
          className="signup-screen-input lg:text-[18px] md:text-[20px] py-[5px] px-[15px] lg:px-[13px] md:px-[20px] font-thin bg-[#3a3838]"
          type="email"
          placeholder="Email"
          ref={emailRef}
        />
        <input
          className="signup-screen-input lg:text-[18px] md:text-[20px] py-[5px] px-[15px] lg:px-[13px]  md:px-[20px] font-thin bg-[#3a3838]"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button
          type="submit"
          className="py-[16px] px-[20px] lg:py-[.5rem] lg:text-[17px] lg:font-thin lg:text-[#f3eded] text-[1rem] md:text-[1.3rem] text-[#fff] rounded bg-[#e50914] font-[600] border-none cursor-pointer mt-[20px] "
          onClick={signIn}
        >
          Sign In
        </button>
        <h4 className="text-left mt-[30px]">
          <span className="text-[gray] md:text-[1.3rem] lg:text-[1rem]">
            New to Netflix?{" "}
          </span>
          <span
            className="hover:cursor-pointer hover:underline md:text-[1.3rem] lg:text-[1rem]"
            onClick={register}
          >
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
