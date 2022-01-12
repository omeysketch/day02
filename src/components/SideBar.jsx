import React from "react";
import "./SideBar.css";
import {
  BsFillBookFill,
  BsFillBookmarksFill,
  BsFillCalendar2MinusFill,
  BsFillCameraFill
} from "react-icons/bs";

function SideBar() {
  return (
    <div className="SideBar">
      <button>
        <BsFillBookFill />
        <br />
        <span>Book</span>
      </button>
      <button>
        <BsFillBookmarksFill />
        <span>Bookmark</span>
      </button>
      <button>
        <BsFillCalendar2MinusFill />
        <span>Calendar</span>
      </button>
      <button>
        <BsFillCameraFill />
        <span>Camera</span>
      </button>
    </div>
  );
}

export default SideBar;
