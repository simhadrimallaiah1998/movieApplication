import { useEffect, useState } from "react";
import { imageUrl } from "./config";
import axios from "axios";
import DIalogBox from "./DIalogBox";
import "./App.css";

const MovieWorld = () => {
  const [movieList, setmovieList] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [propData, setPropData] = useState({});
  const [pagination, setPagination] = useState(1);
  const [bannerPoster, serBannerPoster] = useState(
    "https://image.tmdb.org/t/p/w500/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg"
  );

  const APIUrl = imageUrl(pagination);
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODFiYTE2M2JkZTRhNGEwYjNiMzgyZTkxMmRhMzcwNyIsInN1YiI6IjY1ZmMyZjRjMDQ3MzNmMDE0YWU2NGE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fRE9z1jVxeFWw264QTCjVP0OV-esiyyXSmtm7soQwp4",
    },
  };

  const MovieApiCall = async () => {
    try {
      console.log("The pagination Number is", pagination);
      const dataReceived = await axios.get(APIUrl, options);
      console.log(dataReceived.data.results);
      setmovieList(dataReceived.data.results);
    } catch {
      console.log("Error occured while calling MovieAPICall");
    }
  };

  useEffect(() => {
    MovieApiCall();
  });

  const dataToRecived = movieList.map((e) => e.backdrop_path);

  console.log(dataToRecived[0]);

  const showDetailsOfThisFilm = (event) => {
    setDialog(true);
    console.log("The Target event is", event);
    setPropData(event);
    serBannerPoster(`https://image.tmdb.org/t/p/w500${event.backdrop_path}`);
  };
  const handlePrevious = () => {
    if (pagination <= 1) {
      setPagination(1);
    } else {
      setPagination(pagination - 1);
    }
  };

  console.log("The Url of the banner is", bannerPoster);

  return (
    <div className=" h-screen ">
      <div className="relative bg-white h-3/4">
        <img
          className="w-full h-[100%]  object-fill"
          src={bannerPoster}
          alt="Movie Poster"
        />
      </div>
      <div class="overflow-hidden">
        <div class="bg-gray-200 px-4 py-2">
          <div class="marquee">
            <span class="inline-block">
              This is sample Website developed by SIMHADRI by using TMDB API
              Reference
            </span>
          </div>
        </div>
      </div>

      <div className=" h-1/3  flex flex-row items-center flex-wrap">
        {movieList.map((E) => (
          <div
            onClick={() => showDetailsOfThisFilm(E)}
            key={E.id}
            className="mx-2 h-64 flex-grow w-1/6 mt-1   scroll justify-center flex flex-col bg-black hover:bg-green-500 px-3 py-2  rounded-2xl"
          >
            <img
              className="h-1/2  object-contain"
              src={`https://image.tmdb.org/t/p/w500${E.poster_path}`}
              alt="Movie Poster"
            />
            <h1 className="text-white text-center text-md font-bold ">
              {E.title}
            </h1>
          </div>
        ))}
        <div className="absolute bottom-32 left-0">
          {dialog && (
            <DIalogBox data={propData} handleClose={() => setDialog(false)} />
          )}
        </div>
        <div className="text-center py-4 m-4 w-full text-white flex justify-around items-center font-3xl font-bold">
          <button
            onClick={handlePrevious}
            className="text-black font-bold m-4 bg-blue-500 px-4 py-1 rounded-l-full"
          >
            Previous
          </button>
          <button
            onClick={() => setPagination(pagination + 1)}
            className="text-black font-bold m-4 bg-blue-500 px-4 py-1 rounded-r-full"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieWorld;
