import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

//Import Page for Route
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'

//Import Component Navbar
import Navbar from './components/Navbar'

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home/> },
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