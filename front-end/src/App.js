import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

//Import Page for Route
import Home from './pages/Home/Home'
import Assessment from './pages/Assessment/Assessment'
import ServiceCenter from './pages/ServiceCenter/ServiceCenter'
import FAQ from './pages/FAQ/FAQ'
import NotFound from './pages/NotFound'

//Import Component Navbar
import Navbar from './components/Navbar'

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/Home", element: <Home/> },
    { path: "/Assessment", element: <Assessment/> },
    { path: "/ServiceCenter", element: <ServiceCenter/> },
    { path: "/FAQ", element: <FAQ/> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Navbar/>
      <App />
    </Router>
  );
};

export default AppWrapper;