import { LuShoppingCart } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "krasofkalar",
      href: "/product",
    },
    {
      label: "Mizjolarimiz",
      href: "/mijozlar",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFF] py-3  px-2 sm:py-6 sm:px-4 rounded-2xl lg:rounded-3xl shadow-md ">
      <div className="container mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="shrink-0">
          <Link to={"/"}>
            <img
              className="cursor-pointer w-16 sm:w-32"
              src={logo}
              width={128}
              height={32}
              alt="logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-bold capitalize cursor-pointer">
          {items.map((item) => (
            <li key={item.label}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to={"/listing"}>
            <IoSearch className="cursor-pointer w-5 sm:w-7" size={28} />
          </Link>
          <Link to={"/cart"}>
            <LuShoppingCart className="cursor-pointer w-5 sm:w-7" size={28} />
          </Link>

          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(true)}
              className="focus:outline-none"
            >
              <HiMenuAlt3 className="w-5 sm:w-7 cursor-pointer" size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-1/2 bg-white z-50 shadow-lg p-6 flex flex-col overflow-y-auto"
            >
              {/* X button */}
              <div className="flex items-center justify-between">
                <div className="flex gap-5">
                  <Link to={"/listing"}>
                    <IoSearch className="cursor-pointer w-5 sm:w-7" size={28} />
                  </Link>
                  <Link to={"/cart"}>
                    <LuShoppingCart
                      className="cursor-pointer w-5 sm:w-7"
                      size={28}
                    />
                  </Link>
                </div>

                <button
                  className="self-end text-black text-2xl cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  <HiX />
                </button>
              </div>

              {/* Menu items */}
              <ul className="flex flex-col gap-4 sm:text-2xl items-start mt-10 font-bold capitalize">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link  onClick={() => setMenuOpen(false)} to={item.href} className="truncate">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
