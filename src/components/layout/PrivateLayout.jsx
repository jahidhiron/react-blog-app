import { Navigate, Outlet } from "react-router-dom";
import PrivateNavbar from "../PrivateNavbar";
import { useAuth } from "../context/AuthContext";

const PrivateLayout = () => {
  const auth = useAuth();

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <PrivateNavbar />
      <Outlet />
    </>
  );
};

export default PrivateLayout;
