import React, { useContext } from "react";
import Container from "../../Utility/Container";
import loginImage from "../../assets/agent-pending.png";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/registerContext/AuthContext";
import { toast } from "react-toastify";


const Login = () => {
  const { loginUser,googleSignin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;

      await loginUser(email, password);

      toast.success("Login successful ✅");
    } catch (error) {
      toast.error(error.message);
    }
  };

    const handleSignup = async () => {
      try {
        await googleSignin();
        toast.success("Login With google successfully ✅");
      } catch (error) {
        toast.error(error.message);
      }
    };
  
  return (
    <div className="min-h-screen flex items-center">
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-10 my-10">
        
        {/* LEFT SIDE - FORM */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-500 mb-6">Login to your account</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                Remember me
              </label>

              <span className="text-black cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full background-color text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              <span>Login</span>
            </button>


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

            {/* Signup Redirect */}
            <p className="text-sm text-gray-500 text-center">
              Don’t have an account?{" "}
              <Link to={"/signup"} className="text-color font-medium cursor-pointer">
                Sign Up
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={loginImage}
            alt="login"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

      </Container>
    </div>
  );
};

export default Login;