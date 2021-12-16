import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../views/Home';
import Settings from '../views/Settings';

const Router: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    );
}

export default Router;