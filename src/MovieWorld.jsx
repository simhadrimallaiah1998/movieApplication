import { useEffect, useState } from "react";
import { imageUrl } from "./config";
import axios from "axios";
import DIalogBox from "./DIalogBox";
import "./App.css";
import { useParams } from "react-router-dom";

const MovieWorld = () => {
  const { name } = useParams();
  console.log("The Name of the User is", name);
  const [movieList, setmovieList] = useState([]);

  const [dialog, setDialog] = useState(false);
  const [propData, setPropData] = useState({});
  const [pagination, setPagination] = useState(1);
  const [bannerPoster, serBannerPoster] = useState(
    "https://e1.pxfuel.com/desktop-wallpaper/72/1010/desktop-wallpaper-avatar-movie-for-laptop-avatar-movie-computer.jpg"
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
    <div className="h-screen  flex flex-col">
      <div className=" bg-gradient-to-r from-purple-500 to-pink-500 flex-grow">
        <div className="relative bg-white h-1/4">
          <img
            className="w-full h-[100%]  object-fill"
            src={bannerPoster}
            alt="Movie Poster"
          />
        </div>
        <div className="h-14 w-full bg-gradient-to-r py-4 from-purple-500 to-pink-500 absolute top-0 px-4 flex justify-between items-center">
          <div className="flex justify-center items-center">
            <img
              src="https://api.logoisus.com/wm/647c742ff462f68a4c8ba24f"
              className="w-10 h-10 m-1 rounded-full"
              alt="movieWorld"
            />
            <h1 className="text-green-950 font-serif text-lg font-extrabold">
              MOVIE WORLD
            </h1>
          </div>

          <input
            type="search"
            placeholder="Please search for the movie"
            className="w-3/4 py-2 rounded-lg border-2  font-extrabold p-2 border-black"
          />
          <h1 className="text-green-950 font-serif text-lg font-extrabold">
            {name}
          </h1>
        </div>
        <div className=" h-3/4 flex flex-row items-center flex-wrap">
          {movieList.map((E) => (
            <div
              onClick={() => showDetailsOfThisFilm(E)}
              key={E.id}
              className="mx-2 h-64 flex-grow w-1/3 lg:w-1/6 mt-1 font-serif   scroll justify-center flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-4 hover:p-4 hover:border-green-950 px-3 py-2  rounded-2xl"
            >
              <img
                className="h-2/3  object-cover rounded-xl"
                src={`https://image.tmdb.org/t/p/w500${E.poster_path}`}
                alt="Movie Poster"
              />
              <h1 className="text-green-950 text-center text-md font-bold ">
                {E.title}
              </h1>

              <h1 className="text-green-950 text-center text-md font-bold ">
                Released Date : {E.release_date}
              </h1>
            </div>
          ))}
          <div className="absolute bottom-32 left-0">
            {dialog && (
              <DIalogBox data={propData} handleClose={() => setDialog(false)} />
            )}
          </div>
          <div className="text-center w-full font-serif text-green-950 flex justify-around items-center font-3xl font-bold">
            <button
              onClick={handlePrevious}
              className=" font-bold m-2 border-r-black border-8 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-l-full"
            >
              Previous
            </button>
            <button
              onClick={() => setPagination(pagination + 1)}
              className=" font-bold m-2 border-l-black border-8 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-r-full"
            >
              Next
            </button>
          </div>
        </div>
        <div>
          <hr className="text-green-950 bg-white border-2  border-black w-full" />
          <div className="font-serif bg-gradient-to-r from-purple-500 to-pink-500 py-2 grid grid-flow-col h-40 justify-around ">
            <div>
              <img
                src="https://api.logoisus.com/wm/647c742ff462f68a4c8ba24f"
                className="w-32 h-32 rounded-full"
                alt="movieWorld"
              />
            </div>
            <div className=" text-center ">
              <h1 className="text-green-950 font-extrabold">
                You can me latest Updates through Email
              </h1>
              <input
                type="email"
                className="w-full py-2 rounded-lg border-2 border-black"
                placeholder="Enter You Email"
              />
              <button className="bg-green-950 rounded-xl text-white py-2 px-4 font-extrabold  m-2">
                Send Updates
              </button>
            </div>
            <div className="text-green-950 font-extrabold ">
              <h1>You Can Contact me from</h1>
              <ul className="list-disc pl-6">
                <li>
                  <a href="https://www.facebook.com/nalifenaistam.mr.alone?mibextid=ZbWKwL">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/s_._am_alone_?igsh=MXZibXByeXR5MmZkYg==">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="t.me/na_life_na_istam">Telegram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieWorld;
