import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  let navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-emerald-400 rounded px-5 py-2 m-2 cursor-pointer active:scale-95"
      >
        Return to Home Page
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-emerald-400 rounded px-5 py-2 m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>

      <h1>Aboutt</h1>
    </div>
  );
};

export default About;
