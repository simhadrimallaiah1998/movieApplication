import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const nameOfThePerson = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  return (
    <div className="h-screen bg-[url('https://e1.pxfuel.com/desktop-wallpaper/72/1010/desktop-wallpaper-avatar-movie-for-laptop-avatar-movie-computer.jpg')] bg-contain w-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 w-full">
        <div className="col-span-1 px-24">
          <h1 className="text-white px-2 font-extrabold">
            Welcome To The Movie World
          </h1>
          <input
            className="w-full px-2 py-2 font-extrabold m-2 "
            placeholder="Enter Your Name"
            onChange={nameOfThePerson}
          />
          <Link to={`/movie/${name}`}>
            <button className="bg-white py-2  m-2 px-6 text-black font-bold">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
