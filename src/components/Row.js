import React, { useEffect, useState } from "react";
import axios from "../axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="text-[#fff] ml-[12px]">
      <h2 className="flex text-[.8rem] md:text-[1.2rem] lg:text-[1.4rem]">
        {title}
      </h2>
      <div className="flex overflow-y-hidden overflow-x-scroll hideScrollBar p-[10px] md:p-[15px]">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`max-h-[50px] md:max-h-[100px] lg:max-h-[150px] object-contain mr-[10px] w-[100%] transition transform hover:scale-105 duration-[450ms] ${
                  isLargeRow &&
                  "max-h-[110px] md:max-h-[230px] lg:max-h-[350px] "
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
