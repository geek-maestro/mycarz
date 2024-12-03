// import { Outlet } from 'react-router'

import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import { Outlet } from "react-router";
import PubNav from "../../components/PubNav";
import Footer from "../dashboard/components/Footer";

const AuthLayout = () => {
  return (
    <header className="items-center flex h-full flex-col">
      <SignedIn>
        <PubNav />
        <Outlet />
        <Footer /> 
      </SignedIn>
      <SignedOut>
      <PubNav />
        <SignIn path="/login"/>
      </SignedOut>
    </header>
  );
};

export default AuthLayout;
