import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//import Home from "./Pages/Home.jsx";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Testimonials from "./Pages/Testimonials";
import Home from "./Pages/Home";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="exp" element={<Experience />} />
      <Route path="contact" element={<Contact />} />
      <Route path="testimonials" element={<Testimonials />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
