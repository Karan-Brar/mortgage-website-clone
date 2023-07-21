import React from "react";
import Link from "next/link";


const DropDown = ({
  desktopMode = true,
  onClick = () => {
    return null;
  },
}) => {
  const ScrollTo = async(elementId) => {
    const optionsPage = document.getElementById("options-page")

    if(optionsPage === null)
    {
      const targetElement = document.getElementById(elementId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    else
    {
      document.getElementById("home-link").click();
    }
  };

  return (
    <div
      className={
        desktopMode
          ? "hidden space-x-4 lg:flex self-center z-20"
          : "dropdown z-20"
      }
      onClick={onClick}
    >
      <Link href="/" className={desktopMode ? "link" : "dropdown_link"} id="home-link">
        <span className="nav_link">HOME</span>
      </Link>
      <div
        className={desktopMode ? "link" : "dropdown_link"}
        onClick={() => ScrollTo("team-section")}
      >
        <span className="nav_link">TEAM</span>
      </div>
      <div
        className={desktopMode ? "link" : "dropdown_link"}
        onClick={() => ScrollTo("contact-section")}
      >
        <span className="nav_link">CONTACT</span>
      </div>
      {/* <div
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
      </div> */}
      <Link href="/ApplyNow" className={desktopMode ? "link" : "dropdown_link"}>
        <span className="nav_link">ESTIMATE</span>
      </Link>
    </div>
  );
};

export default DropDown;
