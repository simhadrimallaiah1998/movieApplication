import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const changeToPage = () => {
    console.log("This is clicked");
  };
  return (
    <div className="h-screen bg-blue-950 w-full flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl font-serif font-extrabold">
        Welcome To The Movie Application
      </h1>
      <Link to="/movie">
        <button
          className="bg-white py-2 px-6 text-black font-bold"
          onClick={changeToPage}
        >
          Click Me..!
        </button>
      </Link>
    </div>
  );
};

export default Login;
