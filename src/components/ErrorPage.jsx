import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>Error 404 Page not found</h1>
      <Link to="/">GO to home page</Link>
    </>
  );
}

export default ErrorPage;
