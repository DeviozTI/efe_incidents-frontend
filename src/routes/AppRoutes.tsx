import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/views/Login";
import Register from "../pages/auth/views/Register";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        {/* Admin */}
        <Route path="/admin/dashboard/*" element={<PrivateRoutes />} />

        {/* Route redirect */}
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
