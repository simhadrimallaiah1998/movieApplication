import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { trailerUrl } from "./config";

const DIalogBox = ({ data, handleClose }) => {
  console.log("The message came here", data);
  const [play, setPlay] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");
  const videoKey = `https://www.youtube.com/watch?v=${trailerKey}`;
  const APIUrl = trailerUrl(data.id);
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
      console.log("The Trailer data is", dataReceived.data.results[0].key);
      setTrailerKey(dataReceived.data.results[0].key);
    } catch {
      console.log("Error occured while calling MovieAPICall");
    }
  };

  useEffect(() => {
    MovieApiCall();
  });

  return (
    <div className="px-10 py-10 absolute top-0 bottom-0 right-0 left-0 w-full grid grid-cols-5 justify-center items-center">
      <div className="px-8 py-8  col-start-2  bg-opacity-50 text-center col-end-5 bg-white text-black font-semibold rounded-md">
        <h1 className="text-lg font-bold ">{data.title}</h1>
        <p className="text-md font-semibold ">{data.overview}</p>

        <button
          className="text-black font-bold m-4 bg-blue-500 px-4 py-1"
          onClick={handleClose}
        >
          Close
        </button>

        <button
          className="text-black font-bold m-4 bg-blue-500 px-4 py-1"
          onClick={() => setPlay(true)}
        >
          Play Video
        </button>

        {play && <ReactPlayer url={videoKey} width="100%" controls="true" />}
      </div>
    </div>
  );
};

export default DIalogBox;
