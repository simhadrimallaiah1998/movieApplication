import { useEffect, useState } from "react";
import { imageUrl } from "./config";
import axios from "axios";
import DIalogBox from "./DIalogBox";

const MovieWorld = () => {
  const [movieList, setmovieList] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [propData, setPropData] = useState({});
  const APIUrl = imageUrl;
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODFiYTE2M2JkZTRhNGEwYjNiMzgyZTkxMmRhMzcwNyIsInN1YiI6IjY1ZmMyZjRjMDQ3MzNmMDE0YWU2NGE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fRE9z1jVxeFWw264QTCjVP0OV-esiyyXSmtm7soQwp4",
    },
  };

  const MovieApiCall = async () => {
    try {
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

  const showDetailsOfThisFilm = (event) => {
    setDialog(!dialog);
    console.log("The Target event is", event);
    setPropData(event);
  };

  return (
    <div className=" bg-black">
      <h1 className="text-center text-white font-3xl font-bold">
        The Sample Movies In This Website
      </h1>
      <div className="bg-green-950  h-full flex flex-row items-center flex-wrap">
        {movieList.map((E) => (
          <div
            onClick={() => showDetailsOfThisFilm(E)}
            key={E.id}
            className="mx-2 h-64 flex-grow w-1/6 mt-1 relative  scroll justify-center flex flex-col bg-black hover:bg-green-500 px-3 py-2  rounded-2xl"
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
        {dialog && (
          <DIalogBox data={propData} handleClose={() => setDialog(false)} />
        )}
      </div>
    </div>
  );
};

export default MovieWorld;
