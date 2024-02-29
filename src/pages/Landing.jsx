import { Link } from "react-router-dom";
import React from 'react';

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-pink-900 text-2xl font-semibold mb-2">⸜(｡˃ ᵕ ˂ )⸝♡</h1>
      <div>
        <h1 className="text-pink-900 text-2xl font-semibold mb-3">Welcome to your to-do list!</h1>
      </div>
      <div>
        <Link to="/todo">
          <button className="btn bg-gray border border-pink-500 text-pink-500 hover:text-white hover:bg-pink-500">Go to Todo List</button>
        </Link>
      </div>
    </div>
  );
}