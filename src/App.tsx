import React from "react";
import { ReactDOM } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="w-2/6 mx-auto mt-28">
        <h1 className="text-center font-extrabold text-xl">
          Welcome to Ryans Fitness tracker
        </h1>
      </header>
      <section className="flex flex-row w-5/6 mx-auto mt-10 h-72 shadow-md">
        <div className="w-7/12 justify-center bg-white">
          <form className="flex flex-col px-16 gap-2 mt-8">
            <label htmlFor="">Username</label>
            <input
              className="bg-slate-200 rounded-md pt-1 pb-1 pl-3"
              type="text"
            />
            <label htmlFor="">Password</label>
            <input
              className="bg-slate-200 rounded-md pt-1 pb-1 pl-3"
              type="text"
            />
            <button className="text-white bg-gradient-to-r from-custom-turq2 to-custom-turq mt-3 rounded-md pt-1 pb-1">
              <Link to="/home">Sign in</Link>
            </button>
          </form>
        </div>
        <div className=" text-white flex flex-col w-3/6 text-center bg-gradient-to-r from-custom-turq2 to-custom-turq">
          <h2 className="font-extrabold mt-20 text-2xl">Welcome to login</h2>
          <p className="font-light">Don't have an account ?</p>
          <button className="mt-12 mx-auto  w-1/6 border border-white rounded-md">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
