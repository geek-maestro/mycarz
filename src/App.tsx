import { Route, Routes } from "react-router";
import "./App.css";
import BookingDetails from "./pages/booking";
import LandingPage from "./pages/landing";
import Listings from "./pages/listings";
import MainLayout from "./pages/layout";
import Register from "./pages/auth/register";
import AuthLayout from "./pages/layout/auth";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout />} path="/">
        <Route index element={<LandingPage />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<MainLayout />} path="/home">
        <Route index element={<Listings />} />
        <Route path="booking" element={<BookingDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
