import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className="">
      <div className="">
        <div className="p-4 text-[2rem] mt-[20vh] ">Welcome Home !!!</div>
        <div>please login to continue</div>
        <div>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            <div className="bg-slate-50 w-[30vh] py-2 mt-6 flex justify-center items-center font-semibold text-lg hover:text-slate-500 hover:bg-slate-200 duration-300">
              Log In
            </div>
          </button>
        </div><div>
          <button
            onClick={() => {
              navigate("/signin");
            }}
          >
            <div className="bg-slate-50 w-[30vh] py-2 mt-6 flex justify-center items-center font-semibold text-lg hover:text-slate-500 hover:bg-slate-200 duration-300">
              Sign Up
            </div>
          </button>
        </div>
      </div>
      <div>
        <img
          className="absolute w-[100vw] object-cover h-[100vh] opacity-80 top-0 -z-10"
          src="https://img.freepik.com/free-photo/cabinets-wall-tv-living-room_41470-1524.jpg"
        />
      </div>
    </div>
  );
}
