import React from 'react';
import { routes } from './routes';
import {Routes, Route, Navigate } from 'react-router-dom'


const RouteList = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route
                    element={route.element}
                    path={route.path}/>
            ))}
            <Route
                path="*"
                element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default RouteList;
