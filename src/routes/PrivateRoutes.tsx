import { Routes, Route, Navigate } from "react-router-dom";
import { RoutesAdminPaths, RouterAdminEnum } from "../utils/routerPaths";

const PrivateRoutes = () => {
  return (
    <Routes>
      {RoutesAdminPaths.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}

      <Route path="*" element={<Navigate to={RouterAdminEnum.INCIDENTS} />} />
    </Routes>
  );
};

export default PrivateRoutes;
