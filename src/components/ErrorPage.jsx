import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function ErrorPage() {
  return (
    <>
      <NavBar />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-red-600 md:text-6xl">
            Error 404
          </h1>
          <p className="mb-8 text-lg text-gray-800 md:text-xl">
            Page not found
          </p>
          <Link
            to="/"
            className="text-lg text-blue-600 hover:underline md:text-xl"
          >
            Go to home page
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
