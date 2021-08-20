import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="relative h-[300px] md:h-[500px] lg:h-[600px] text-white bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="ml-[20px] pt-[100px] md:pt-[120px] h-[190px] flex flex-col items-start">
        <h1 className="font-semibold text-[1.3rem] md:text-[2.2rem] lg:text-[3.5rem] pb-[0.3rem]">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className="text-[11px] lg:mt-[1.5rem] md:text-[17px] lg:text-[19px] lg:font-thin lg:px-[25px] lg:py-[5px] btn hover:text-[#000] hover:bg-[#e6e6e6] transition-all duration-200">
            Play
          </button>
          <button className="text-[11px] lg:mb-[1.2rem] md:text-[17px] lg:text-[19px] lg:font-thin lg:px-[25px] lg:py-[5px] btn hover:text-[#000] hover:bg-[#e6e6e6] transition-all duration-200">
            My List
          </button>
        </div>
        <h1 className="w-[45rem] md:w-[70rem] lg:mt-[1rem] lg:text-[1.5rem] lg:font-normal lg:max-w-[1300px] leading-[1.3] py-[1rem] pr-[2rem] text-[0.8rem] md:text-[1.1rem] max-w-[360px] md:max-w-[700px] h-[80px] text-left">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="h-[4rem] mt-[3rem] md:mt-[15.5rem] lg:mt-[22rem] bg-gradient-to-b from-transparent via-mid-black to-[#111] " />
    </header>
  );
};

export default Banner;
