import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenicated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenicated) {
      navigate("/");
    }
  }, [isAuthenicated, navigate]);
  return isAuthenicated ? children : null;
}

export default ProtectedRoute;
