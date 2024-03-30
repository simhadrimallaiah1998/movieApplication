import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full ">
      <h1 className="bg-[url('https://c4.wallpaperflare.com/wallpaper/429/282/466/tropical-palm-tree-beach-ocean-sunlight-island-hd-wallpaper-preview.jpg')] bg-cover   bg-clip-text  text-transparent  text-9xl font-serif font-extrabold">
        NOT FOUND !
      </h1>
      <h1 className=" bg-[url('https://c4.wallpaperflare.com/wallpaper/429/282/466/tropical-palm-tree-beach-ocean-sunlight-island-hd-wallpaper-preview.jpg')] bg-cover   bg-clip-text  text-transparent  text-3xl font-serif font-extrabold">
        Please Enter valid UserName
      </h1>
      <Link to="/">
        <button className=" mt-4 border-4 border-blue-600 px-4 py-2 bg-[url('https://c4.wallpaperflare.com/wallpaper/429/282/466/tropical-palm-tree-beach-ocean-sunlight-island-hd-wallpaper-preview.jpg')] bg-cover   bg-clip-text  text-transparent  text-3xl font-serif font-extrabold">
          Go To Login Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
