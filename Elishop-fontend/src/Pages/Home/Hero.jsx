import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Container from "../../Utility/Container";

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0f1a] text-white">
      <Container>
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[420px] h-[420px] bg-purple-500 opacity-25 blur-[130px] top-[-120px] left-[-120px]"
          />
          <motion.div
            animate={{ x: [0, -35, 0], y: [0, -25, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[420px] h-[420px] bg-blue-500 opacity-25 blur-[130px] bottom-[-140px] right-[-120px]"
          />
          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[260px] h-[260px] bg-pink-500 opacity-15 blur-[110px] top-[35%] left-[45%]"
          />
        </div>

        <div className="relative  py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-sm border border-white/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Premium Shopping Experience
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight"
            >
              Discover & Shop <br />
              <span className="text-color">Everything You Love</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-6 text-gray-300 text-lg max-w-xl"
            >
              Explore top-quality products with fast delivery and secure
              checkout. Your ultimate destination for modern shopping.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-8 flex gap-4 flex-wrap"
            >
              <motion.div
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link className="px-6 py-3 rounded-full background-color font-semibold shadow-[0_0_30px_rgba(99,102,241,0.35)] inline-block">
                  <span>Start Shopping</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/products"
                  className="px-6 py-3 rounded-full border border-white/25 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition inline-block"
                >
                  Browse Products
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-10 flex gap-10 flex-wrap text-sm text-gray-400"
            >
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
            </motion.div>
          </motion.div>

          {/* RIGHT PRODUCT CARDS */}
          <div className="relative flex justify-center min-h-[520px]">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: -40, rotate: -12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotate: -10, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              whileHover={{ scale: 1.06, rotate: -5, y: -6 }}
              className="absolute top-8 left-0 w-44 p-4 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/15"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Smart Watch"
                loading="lazy"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-xl mb-2"
              />
              <p className="text-sm text-gray-200">Smart Watch</p>
              <p className="text-yellow-400 font-semibold">$120</p>
            </motion.div>

            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              whileHover={{ scale: 1.04, y: -8 }}
              className="z-10 w-72 p-5 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Premium Headphones"
                loading="lazy"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-2xl mb-4"
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Premium Headphones</h3>
                  <p className="text-sm text-gray-300">Best sound quality</p>
                </div>
                <motion.span
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-3 py-1 rounded-full text-xs bg-green-400/15 text-green-300 border border-green-400/20"
                >
                  New
                </motion.span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-yellow-400">$199</p>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold"
                >
                  Buy Now
                </motion.button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotate: 10, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              whileHover={{ scale: 1.06, rotate: 5, y: -6 }}
              className="absolute bottom-8 right-0 w-44 p-4 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/15"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                alt="Wireless Earbuds"
                loading="lazy"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-xl mb-2"
              />
              <p className="text-sm text-gray-200">Wireless Earbuds</p>
              <p className="text-yellow-400 font-semibold">$80</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
