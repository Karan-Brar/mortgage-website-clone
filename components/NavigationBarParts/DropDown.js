import React from 'react'
import Link from "next/link";

const DropDown = ({ desktopMode = true, onClick = () => { return null; } }) => {
    return (
      <div
        className={desktopMode ? "hidden space-x-4 sm:flex self-center" : "dropdown"}
        onClick={onClick}
      >
        <Link href="/" className={desktopMode ? "link" : "dropdown_link"}>
          <span className="nav_link">WHY US</span>
        </Link>
        <Link
          href="/portfolio"
          className={desktopMode ? "link" : "dropdown_link"}
        >
          <span className="nav_link">CONTACT</span>
        </Link>
        <Link href="/about" className={desktopMode ? "link" : "dropdown_link"}>
          <span className="nav_link">REVIEWS</span>
        </Link>
        <Link
          href="/contact"
          className={desktopMode ? "link" : "dropdown_link"}
        >
          <span className="nav_link">Q-A</span>
        </Link>
      </div>
    );
}

export default DropDown