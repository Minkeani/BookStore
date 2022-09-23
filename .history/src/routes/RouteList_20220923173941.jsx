import React from "react";
import { routes } from "./routes";
import { Routes, Route, Navigate } from "react-router-dom";

const RouteList = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="/app/:title" element={<GamePage />} />

      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default RouteList;
