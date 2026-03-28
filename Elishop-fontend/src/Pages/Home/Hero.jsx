import React from "react";
import { Link } from "react-router";
import Container from "../../Utility/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0f1a] text-white">
      <Container>
        {/* Static background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[420px] h-[420px] bg-purple-500 opacity-25 blur-[130px] top-[-120px] left-[-120px]" />
          <div className="absolute w-[420px] h-[420px] bg-blue-500 opacity-25 blur-[130px] bottom-[-140px] right-[-120px]" />
          <div className="absolute w-[260px] h-[260px] bg-pink-500 opacity-15 blur-[110px] top-[35%] left-[45%]" />
        </div>

        <div className="relative py-24 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-sm border border-white/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Premium Shopping Experience
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
              Discover & Shop <br />
              <span className="text-color">Everything You Love</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              Explore top-quality products with fast delivery and secure
              checkout. Your ultimate destination for modern shopping.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link className="px-6 py-3 rounded-full background-color font-semibold shadow-[0_0_30px_rgba(99,102,241,0.35)] inline-block hover:scale-105 transition">
                <span>Start Shopping</span>
              </Link>

              <Link
                to="/products"
                className="px-6 py-3 rounded-full border border-white/25 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition inline-block"
              >
                Browse Products
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-10 flex-wrap text-sm text-gray-400">
              <div>
                <p className="text-2xl font-bold text-white">10K+</p>
                Products
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5K+</p>
                Customers
              </div>
              <div>
                <p className="text-2xl font-bold text-white">4.9★</p>
                Rating
              </div>
            </div>
          </div>

          {/* RIGHT PRODUCT CARDS */}
          <div className="relative flex justify-center min-h-[520px]">

            {/* Card 1 */}
            <div className="absolute top-8 left-0 w-44 p-4 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/15 hover:scale-105 transition">
              <img
                src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                alt="Smart Watch"
                className="rounded-xl mb-2"
              />
              <p className="text-sm text-gray-200">Smart Watch</p>
              <p className="text-yellow-400 font-semibold">$120</p>
            </div>

            {/* Main Card */}
            <div className="z-10 w-72 p-5 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 hover:scale-105 transition">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Premium Headphones"
                className="rounded-2xl mb-4"
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Premium Headphones</h3>
                  <p className="text-sm text-gray-300">Best sound quality</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-green-400/15 text-green-300 border border-green-400/20">
                  New
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-yellow-400">$199</p>
                <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="absolute bottom-8 right-0 w-44 p-4 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/15 hover:scale-105 transition">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                alt="Wireless Earbuds"
                className="rounded-xl mb-2"
              />
              <p className="text-sm text-gray-200">Wireless Earbuds</p>
              <p className="text-yellow-400 font-semibold">$80</p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;