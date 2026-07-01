"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import Logo from "../common/Logo";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
          >
            Features
          </Link>

          <Link
            href="#dashboard"
            className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
          >
            Dashboard
          </Link>

          <Link 
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
          >
            How It Works
          </Link>

          <Link 
            href="#testimonials"
            className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
          >
            Testimonials
          </Link>

          <Link
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">
            Login
          </Button>

          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Get Started
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}