import Link from 'next/link';
import React from 'react'

const ContactOptions = (props) => {
  return (
    <div className="w-full sm:py-32 py-28 bg-blue-100 flex sm:flex-row justify-center flex-col items-center">
      <Link href="/ApplyNow" className="option-button sm:mr-4">
        Estimate My Rate
      </Link>
      <button
        onClick={props.showComponent}
        className=" option-button sm:ml-4 sm:mt-0 mt-9"
      >
        Contact Us Now
      </button>
    </div>
  );
}

export default ContactOptions