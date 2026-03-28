import React, { useContext } from "react";
import Container from "../../Utility/Container";
import logicon from "../../assets/agent-pending.png";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/registerContext/AuthContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Fairbase/Fairbase";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
const Signup = () => {
  const { createUser, googleSignin } = useContext(AuthContext);
  const [preview, setPreview] = useState(null);
  const [loader, setLoader] = useState(false);
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ✅ submit handler
  const onSubmit = async (data) => {
    try {
      setLoader(true);
      const { email, password, name, image } = data;

      // create user
      await createUser(email, password);

      // image file
      const img = image?.[0];
      if (!img) {
        setLoader(false);
        toast.error("Please upload an image");
        return;
      }

      // form data
      const formData = new FormData();
      formData.append("file", img); //
      formData.append("upload_preset", "elishopbd"); //

      // upload to cloudinary
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dfruewsxp/image/upload",
        formData,
      );

      const imageUrl = res?.data?.secure_url;

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: imageUrl,
      });

      setLoader(false);
      toast.success("Account created successfully ✅");
      reset()
      setPreview(null);
      navigate("/")
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error(error.message);
    }
  };

  // sign up with google
  const handleSignup = async () => {
    try {
      await googleSignin();
      toast.success("Login With google successfully ✅");
      navigate("/")
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Container className="flex items-center justify-center gap-20 my-10">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl text-color font-bold mb-2">Create Account</h2>
          <p className="text-gray-500 mb-6">Sign up to get started</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-80 max-sm:w-70">
            {/* image uploader */}
            <div className="flex justify-center">
              <label className="relative cursor-pointer">
                {/* Circle Image */}
                <div className="w-15 h-15 rounded-full overflow-hidden border-2 border-gray-300">
                  <img
                    src={preview || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Camera Icon */}
                <div className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white">
                  <FaCamera size={12} />
                </div>

                {/* Hidden Input */}
                <input
                  type="file"
                  {...register("image", {
                    onChange: (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setPreview(URL.createObjectURL(file));
                      }
                    },
                  })}
                  className="hidden"
                />
              </label>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                 })}
                type="password"
                placeholder="Enter your password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loader}
              className="w-full background-color text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              <span>{loader ? "Create Account.." : "Sign Up"}</span>
            </button>

            {/* Redirect */}
            <button
              type="button"
              onClick={handleSignup}
              className="btn bg-white w-full text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p className="text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-color font-medium cursor-pointer"
              >
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:block">
          <img
            src={logicon}
            alt="signup"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </div>
  );
};

export default Signup;
