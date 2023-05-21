import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);

    const fieldErrors = {};

    if (!name) {
      fieldErrors.name = "Name is required";
    }

    if (!email) {
      fieldErrors.email = "Email is required";
    }

    if (!photoURL) {
      fieldErrors.photoURL = "Photo URL is required";
    }

    if (!password) {
      fieldErrors.password = "Password is required";
    }

    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      return;
    }

    // Wrap the createUser function in a promise
    return new Promise((resolve, reject) => {
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
          setError({});
          event.target.reset();
          setSuccess("User has been logged in successfully.");
          navigate(from, { replace: true });
          // Update user profile with name and photoURL
          updateProfile(createdUser, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              console.log("User profile updated successfully");
              resolve(); // Resolve the promise
            })
            .catch((error) => {
              console.log(error);
              reject(error); // Reject the promise
            });
        })
        .catch((error) => {
          if (error.message.includes("weak-password")) {
            setError({ password: "Password is less than 6 characters" });
          } else {
            setError({ general: error.message });
          }
          setSuccess("");
          reject(error); // Reject the promise
        });
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
              <h2 className="text-center mb-5 text-2xl font-bold">SignUp</h2>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <div className="mb-4">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Your Name"
                      name="name"
                      style={{
                        padding: "0.5rem",
                        border: "1px solid #ccc",
                        width: "100%",
                      }}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Email Address</label>
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

                  <div className="mb-4">
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
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="form-label">Photo URL</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.photoURL ? "is-invalid" : ""
                      }`}
                      placeholder="Enter photo URL"
                      name="photoURL"
                      style={{
                        padding: "0.5rem",
                        border: "1px solid #ccc",
                        width: "100%",
                      }}
                    />
                    {errors.photoURL && (
                      <div className="invalid-feedback">{errors.photoURL}</div>
                    )}
                  </div>

                  <p className="mb-4">
                    Already Have An Account?{" "}
                    <Link
                      className="font-bold"
                      style={{ color: "#5B5F8E" }}
                      to="/login"
                    >
                      Login Here.
                    </Link>
                  </p>

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
                      SignUp
                    </button>
                  </div>

                  <div className="text-center mt-3">
                    <p className="text-success">{success}</p>
                    {error && <p className="text-danger">{error.general}</p>}
                    <p className="text-danger">
                      {Object.values(errors).join(", ")}
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
