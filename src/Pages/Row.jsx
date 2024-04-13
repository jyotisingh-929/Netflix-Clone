import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/w500";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // console.log('process.env.REACT_APP_API', process.env.REACT_APP_API);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, []);
  // console.log('movies',movies);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.title || "")
        .then((base_url) => {
          const urlParams = new URLSearchParams(new URL(base_url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "500",
    width: "1000",
    float: "center",
    playerVars: {
      autoplay: 1,
    },
  };



  return (
    <>
      <div className='text-white ml-[35px] '>
        <h2 className='ml-5 text-[22px] font-semibold mt-6 tracking-wide'>{title}</h2>
        <div className='flex scrollbar-hide overflow-y-hidden overflow-x-scroll p-[20px] '>
          {movies && movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`object-contain w-[100%] rounded-[3px] max-h-[120px] transition-transform duration-[450ms] mr-[10px] transform hover:scale-[1.08] ${isLargeRow && 'max-h-[250px] transform hover:scale-[1.09]'}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
        
        <div className=''>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        
        </div>
      </div>

    </>
  )
}

export default Row