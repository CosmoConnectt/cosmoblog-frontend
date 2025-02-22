import { useEffect, useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      console.log(token);
    });
  }, [getToken]);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo Section */}
      <Link to="https://cosmoconnect-content.netlify.app/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="CosmoLogo1.jpeg" alt="Logo" w={32} h={32} />
        <span><a href="https://cosmoconnect-content.netlify.app/">CosmoConnect</a></span>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Mobile Button */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* Change Hamburger Icon */}
          {open ? "X" : "☰"}
        </div>

        {/* Mobile Link List */}
        <div
          className={`w-full h-screen bg-[#b3b3f7] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <a href="https://cosmoconnect-store.onrender.com/">Store</a>
          <Link to="../About">About</Link>
          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login
              </button>
            </Link>
          </SignedOut>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <a href="https://cosmoconnect-store.onrender.com/">Store</a>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
