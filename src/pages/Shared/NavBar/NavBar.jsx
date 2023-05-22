import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../../../assets/Magical ToyLand Footer.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const activeRoute = location.pathname;

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  // Function to capitalize all words and remove hyphen
  const capitalizeAllWords = (str) => {
    const route = str.split("/")[0]; // Get the route before '/'
    return route
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };


  return (
    <div className="navbar bg-base-100">
      <Helmet>
      <title>
        Magical Toyland | {capitalizeAllWords(activeRoute.slice(1))}
      </title>
    </Helmet>
      <div className="navbar-start">
        <div className="dropdown block md:hidden">
          {/* Show only on mobile devices */}
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        {/* Add menu links directly on the navbar */}
        <div className="navbar-menu ml-4 space-x-4 hidden md:flex">
          <Link
            to="/"
            className={`btn btn-ghost ${
              activeRoute === "/" ? "active text-[#5B5F8E]" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/toys"
            className={`btn btn-ghost ${
              activeRoute === "/toys" ? "active text-[#5B5F8E]" : ""
            }`}
          >
            All Toys
          </Link>
          <Link
            to="/blogs"
            className={`btn btn-ghost ${
              activeRoute === "/blogs" ? "active text-[#5B5F8E]" : ""
            }`}
          >
            Blogs
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/">
          <img src={logo} alt="" width={100} height={100} />
        </Link>
      </div>
      <div className="navbar-end space-x-4 pr-12">
        {user && (
          <Link
            to="/add-toy"
            className={`btn btn-ghost ${
              activeRoute === "/add-toy" ? "active text-[#5B5F8E]" : ""
            }`}
          >
            Add A Toy
          </Link>
        )}
        {user && (
          <Link
            to="/my-toys"
            className={`btn btn-ghost ${
              activeRoute === "/my-toys" ? "active text-[#5B5F8E]" : ""
            }`}
          >
            My Toys
          </Link>
        )}
        {user ? (
          <Link
            to="/my-toys"
            className="me-4 text-decoration-none text-secondary"
            title={user.displayName ? user.displayName : ""}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "0.5rem",
              }}
            >
              {user.photoURL ? (
                <div
                  style={{
                    backgroundImage: `url("${user.photoURL}")`,
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    width: "2rem",
                    height: "2rem",
                  }}
                ></div>
              ) : (
                <FaUserCircle
                  style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
                />
              )}
            </div>
          </Link>
        ) : null}
        {user ? (
          <button onClick={handleLogOut} className="btn btn-custom">
            LogOut
          </button>
        ) : (
          <Link
            to="/login"
            className={`btn btn-ghost ${
              activeRoute === "/login" ? "active text-[#5B5F8E]" : ""
            }`}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
