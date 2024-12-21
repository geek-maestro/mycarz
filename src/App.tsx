import "./App.css";
import Listings from "./pages/listings";
import MainLayout from "./pages/layout";
// import Register from "./pages/auth/register";
// import AuthLayout from "./pages/layout/auth";
import { createBrowserRouter, RouterProvider } from "react-router"; // Correct import
import LandingPage from "./pages/landing_page";
import BookingInfo from "./pages/landing_page/BookingInfo";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import About from "./pages/about";
import ContactUs from "./pages/contactUs";
// import Login from "./pages/auth/login";

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  // {
  //   element: <AuthLayout />, // Wrapper layout for public routes
  //   children: [
  //     { path: "/", element: <Dashboard /> },
  //     { path: "register", element: <Register /> },
  //     { path: "/login", element: <Login />}
  //   ],
  // },
  {
    element: <MainLayout />, // Wrapper layout for protected routes
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/home", element: <Listings /> },
      { path: "/home/booking", element: <BookingInfo /> },
      { path: "/home/about", element: <About /> },
      { path: "/home/contact", element: <ContactUs /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
