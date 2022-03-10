import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div>
      <Link style={{margin: "10px"}} to="/home">
        Home
      </Link>
      <Link style={{margin: "10px"}} to='/about'>About</Link>
      <Link style={{margin: "10px"}} to="/discover">Discover</Link>
    </div>
  );
}
