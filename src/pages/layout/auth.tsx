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
        <div className="flex items-center justify-center h-[80vh]">
        <SignIn />
        </div>
      </SignedOut>
    </header>
  );
};

export default AuthLayout;
