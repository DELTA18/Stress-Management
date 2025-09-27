import React, { useState } from "react"
import { Link } from "react-router-dom"
import  HealthCheckupButton  from "./HealthCheckupButton"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-teal/10 border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-teal-600">
          Stress Management
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <li>
            <Link
              to="/about"
              className="hover:text-teal-600 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-teal-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
          <li>
            <HealthCheckupButton />
          </li>
          <li>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition font-medium"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </button>
          </li>
          <li>
            <button
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition font-medium"
              onClick={() => (window.location.href = "/signin")}
            >
              Signin
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white/70 backdrop-blur-md border-t border-white/20">
          <Link
            to="/about"
            className="block text-gray-700 hover:text-teal-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-teal-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <button className="w-full bg-gradient-to-r from-indigo-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition font-semibold">
            Health Checkup
          </button>
          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition font-medium"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
          <button
            className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition font-medium"
            onClick={() => (window.location.href = "/signin")}
          >
            Signin
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
