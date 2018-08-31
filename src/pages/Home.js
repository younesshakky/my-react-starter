
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Home</h1>
      <p>i'am a home page</p>
      <Link to="/fucking-not-found">Go to random 404 page</Link>
    </div>
  );
};

export default Home;
