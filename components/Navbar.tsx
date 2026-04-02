"use client";

import { useState } from "react";
import Image from "next/image";

const CALENDLY_URL = "https://calendly.com/jogope8/30min";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm px-4 md:px-8">
      <div className="navbar-start">
        <a href="#">
          <Image
            src="/logo/logo-1.png"
            alt="Frontline Setters"
            width={160}
            height={40}
            className="h-8 w-auto object-contain hidden md:block"
          />
          <Image
            src="/logo/icon.png"
            alt="Frontline Setters"
            width={40}
            height={40}
            className="h-8 w-auto object-contain md:hidden"
          />
        </a>
      </div>

      {/* Desktop links */}
      <div className="navbar-end hidden lg:flex items-center gap-6">
        <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
          How it works
        </a>
        <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
          Pricing
        </a>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Book a call
        </a>
      </div>

      {/* Mobile hamburger */}
      <div className="navbar-end lg:hidden">
        <button
          className="btn btn-ghost btn-square"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 shadow-lg lg:hidden border-t border-base-300 z-50">
          <ul className="menu p-4 gap-2">
            <li>
              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
                How it works
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </a>
            </li>
            <li>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Book a call
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
