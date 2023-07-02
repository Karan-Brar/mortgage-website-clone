import React from 'react'
import Link from "next/link";

const DropDown = ({ desktopMode = true, onClick = () => { return null; } }) => {
     const ScrollTo = (elementId) => {
       const targetElement = document.getElementById(elementId);
       targetElement.scrollIntoView({ behavior: "smooth" });
     };

    return (
      <div
        className={
          desktopMode ? "hidden space-x-4 sm:flex self-center" : "dropdown"
        }
        onClick={onClick}
      >
        <div
          className={desktopMode ? "link" : "dropdown_link"}
          onClick={() => ScrollTo("contact-section")}
        >
          <span className="nav_link">CONTACT</span>
        </div>
        <div
          className={desktopMode ? "link" : "dropdown_link"}
          onClick={() => ScrollTo("customer-reviews")}
        >
          <span className="nav_link">REVIEWS</span>
        </div>
        <div
          className={desktopMode ? "link" : "dropdown_link"}
          onClick={() => ScrollTo("q-a")}
        >
          <span className="nav_link">SOLUTIONS</span>
        </div>
      </div>
    );
}

export default DropDown