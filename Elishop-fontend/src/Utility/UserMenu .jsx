import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/registerContext/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../Fairbase/Fairbase";
import { toast } from "react-toastify";

const UserMenu = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const handelClick = async () => {
    try {
      await signOut(auth);
      toast.success("sign out successful");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="relative">
      {user ? (
        <>
          {/* User Image */}
          <div className="w-9 h-9 rounded-full   cursor-pointer">
            <img
              src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="user"
              className="w-full h-full rounded-full object-cover"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            />
          </div>

          {/* Dropdown */}
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-4 w-70 bg-black border border-white/30 rounded-md shadow-lg py-2 z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-indigo-100"
              >
                Deashbord
              </Link>

              <button
                onClick={handelClick}
                className="block background-color w-full px-4 py-2 hover:bg-indigo-100"
              >
                <span>Logout</span>
              </button>
            </div>
          )}
        </>
      ) : (
        <Link to="/login">
          <button className="background-color text-white font-bold px-7 py-2 rounded">
            <span> Login</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default UserMenu;
