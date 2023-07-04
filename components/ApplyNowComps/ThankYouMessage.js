import Link from "next/link";

const ThankYouMessage = () => {
  return (
    <div className="option-card">
      <h1 className="sm:w-fit w-5/6 mx-auto text-2xl font-semibold font-franklin">
        Thank You! Our Team will reach out within 24 hrs with a response
      </h1>
      <div className="w-fit mx-auto mt-10">
        <Link href="/" className="bg-blue-200 font-franklin text-slate-100 p-5 text-xl">
          Go Back to Home Screen
        </Link>
      </div>
    </div>
  );
}

export default ThankYouMessage