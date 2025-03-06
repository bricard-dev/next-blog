import React from "react";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="max-w-5xl w-full h-16 mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="font-bold">Next Blog</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
