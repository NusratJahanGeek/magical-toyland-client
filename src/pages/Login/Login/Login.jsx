import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const fieldErrors = {};

    if (!email) {
      fieldErrors.email = "Email is required";
    }

    if (!password) {
      fieldErrors.password = "Password is required";
    }

    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setError("");
        event.target.reset();
        setSuccess("User has been logged in successfully.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.message.includes("wrong-password")) {
          setError("You've entered a wrong password.");
        } else if (error.message.includes("user-not-found")) {
          setError("We couldn't find your email address on our database. Please use the correct one.");
        } else {
          setError(error.message);
        }

        setSuccess("");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setError("");
        setSuccess("User has been logged in successfully.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };

  
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-base-200"
      style={{
        backgroundImage:
          "url(https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1593556896598)",
      }}
    >
      <div className="w-full max-w-md">
        <div className="card flex-shrink-0 shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="mt-5">
              <h2 className="text-center mb-5 text-2xl font-bold">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Your Email"
                      name="email"
                      style={{
                        padding: "0.5rem",
                        border: "1px solid #ccc",
                        width: "100%",
                      }}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Password"
                      name="password"
                      style={{
                        padding: "0.5rem",
                        border: "1px solid #ccc",
                        width: "100%",
                      }}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div className="text-center mt-4">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#5B5F8E",
                        color: "#fff",
                        width: "60%",
                      }}
                      type="submit"
                    >
                      Login
                    </button>
                  </div>

                  <div className="text-center mt-3">
                    {success && (
                      <div className="text-success">{success}</div>
                    )}
                    {error && <div className="text-danger">{error}</div>}
                  </div>
                </div>
              </form>

              <div className="flex justify-center gap-3">
                <div className="text-center mt-4">
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline-secondary"
                    type="submit"
                  >
                    <FaGoogle className="inline-block align-text-bottom" /> &nbsp; Login with Google
                  </button>
                </div>
              </div>
            </div>
            <p className="text-center mt-4">
              New to Magical Toyland? <Link
                className="font-bold"
                style={{ color: "#5B5F8E" }}
                to="/signup"
              >
                SignUp Here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
