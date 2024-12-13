import { Link } from "react-router";


const NotFound = () => {
    return (
        <div className="not-found">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link to="/">
            <button className="btn">Go Back Home</button>
          </Link>
        </div>
      );
}

export default NotFound;