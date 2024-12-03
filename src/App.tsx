import "./App.css";
import BookingDetails from "./pages/booking";
import Listings from "./pages/listings";
import MainLayout from "./pages/layout";
import Register from "./pages/auth/register";
import AuthLayout from "./pages/layout/auth";
import { createBrowserRouter, RouterProvider } from "react-router"; // Correct import
import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/login";

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    element: <AuthLayout />, // Wrapper layout for public routes
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "register", element: <Register /> },
      { path: "/login", element: <Login />}
    ],
  },
  {
    element: <MainLayout />, // Wrapper layout for protected routes
    children: [
      { path: "/home", element: <Listings /> },
      { path: "/home/booking", element: <BookingDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
