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
        <div className="col-span-2 flex flex-col px-24">
          <h1 className=" bg-[url('https://c4.wallpaperflare.com/wallpaper/429/282/466/tropical-palm-tree-beach-ocean-sunlight-island-hd-wallpaper-preview.jpg')] bg-cover   bg-clip-text  text-transparent  text-3xl font-serif font-extrabold">
            Welcome To The Movie World
          </h1>
          <input
            type="text"
            className="w-3/5 px-4 py-4 font-extrabold m-2 rounded-lg "
            placeholder="Enter Your Name"
            onChange={nameOfThePerson}
          />
          <Link to={`/movie/${name}`}>
            <button className="ml-2 rounded-md px-2 mt-4 border-4 border-blue-600  py-2 bg-[url('https://c4.wallpaperflare.com/wallpaper/429/282/466/tropical-palm-tree-beach-ocean-sunlight-island-hd-wallpaper-preview.jpg')] bg-cover   bg-clip-text  text-transparent  text-xl font-serif font-extrabold">
              Enter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
