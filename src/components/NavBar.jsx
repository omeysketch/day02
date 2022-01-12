import React from "react";
import "./NavBar.css";
import { AiFillApple } from "react-icons/ai";

function NavBar() {
  return (
    <div className="NavBar">
      <AiFillApple className="CompanyIcon" />
      <div className="Links">
        <button>Home</button>
        <button>About</button>
        <button>Help</button>
      </div>
    </div>
  );
}

export default NavBar;
