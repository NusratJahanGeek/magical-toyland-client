import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
        <div
        className="radial-progress center"
        style={{
          "--value": "70",
          "--size": "6rem",
          "--thickness": "2rem",
        }}
      >
        70%
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;
