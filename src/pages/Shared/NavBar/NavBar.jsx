import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../../../assets/Magical ToyLand Footer.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const activeRoute = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Add state for mobile menu

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const capitalizeAllWords = (str) => {
    const route = str.split("/")[0];
    if (route === "") {
      return "Magical Toyland";
    } else {
      const pageName = route
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return `Magical Toyland | ${pageName}`;
    }
  };

  return (
    <div className="navbar bg-base-100">
      <Helmet>
        <title>{capitalizeAllWords(activeRoute.slice(1))}</title>
      </Helmet>

      <div className="navbar-start">
        <div className="dropdown block md:hidden">
          {/* Show only on mobile devices */}
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            onClick={toggleMobileMenu} // Toggle mobile menu on click
          >
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
          {mobileMenuOpen && ( // Display the mobile menu when it's open
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link
                  to="/"
                  className={`btn btn-ghost ${
                    activeRoute === "/"
                      ? "active text-[#5B5F8E] bg-[#FFEBDB]"
                      : ""
                  }`}
                  onClick={toggleMobileMenu} // Close the mobile menu on link click
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/toys"
                  className={`btn btn-ghost ${
                    activeRoute === "/toys"
                      ? "active text-[#5B5F8E] bg-[#FFEBDB]"
                      : ""
                  }`}
                  onClick={toggleMobileMenu} // Close the mobile menu on link click
                >
                  All Toys
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className={`btn btn-ghost ${
                    activeRoute === "/blogs"
                      ? "active text-[#5B5F8E] bg-[#FFEBDB]"
                      : ""
                  }`}
                  onClick={toggleMobileMenu} // Close the mobile menu on link click
                >
                  Blogs
                </Link>
              </li>

              <li>
                {user ? (
                  <Link
                    to="/my-toys"
                    className={`btn btn-ghost ${
                      activeRoute === "/my-toys"
                        ? "active text-[#5B5F8E] bg-[#FFEBDB]"
                        : ""
                    }`}
                    onClick={toggleMobileMenu} // Close the mobile menu on link click
                  >
                    My Toys
                  </Link>
                ) : null}
              </li>
              <li>
                {user ? (
                  <Link
                    to="/add-toy"
                    className={`btn btn-ghost ${
                      activeRoute === "/add-toy"
                        ? "active text-[#5B5F8E] bg-[#FFEBDB]"
                        : ""
                    }`}
                    onClick={toggleMobileMenu} // Close the mobile menu on link click
                  >
                    Add a Toy
                  </Link>
                ) : null}
              </li>
            </ul>
          )}
        </div>
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
      <div className="navbar-end">
        <div className="md:hidden flex items-center">
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
            <button onClick={handleLogOut} className="btn">
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

        <div className="hidden navbar-menu pr-12 space-x-4 md:flex justify-center items-center">
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
            <button onClick={handleLogOut} className="btn">
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
    </div>
  );
};

export default NavBar;
