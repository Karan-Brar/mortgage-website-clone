import Link from "next/link";

const ThankYouMessage = () => {
  return (
    <div className="option-card">
      <h1 className="sm:w-fit w-5/6 mx-auto text-2xl font-semibold font-franklin text-center mt-56">
        Thank You for your responses!
      </h1>
      <div className="w-fit mx-auto mt-10">
        <Link
          href="/"
          className="bg-blue-200 font-franklin text-slate-100 p-5 text-xl"
        >
          Go back to home screen
        </Link>
      </div>
    </div>
  );
}

export default ThankYouMessage