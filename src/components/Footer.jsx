import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-8 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* <!-- Logo & Description --> */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div>
                <Image src="/images/logo.png" alt="Logo" width={100} height={80} />
              </div>
            </div>

            <p className="text-sm leading-7 max-w-xs">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* <!-- Social Icons --> */}
            <div className="flex gap-3 mt-10">
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-gray-800 flex items-center justify-center"
              >
                <FaFacebook />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center"
              >
                <FaGithub />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-gray-800 flex items-center justify-center"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          {/* <!-- Product --> */}
          <div>
            <h3 className="text-indigo-400 font-medium mb-6">Product</h3>

            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Job discovery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Worker AI
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Navigation --> */}
          <div>
            <h3 className="text-indigo-400 font-medium mb-6">Navigation</h3>

            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Career library
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Resources --> */}
          <div>
            <h3 className="text-indigo-400 font-medium mb-6">Resources</h3>

            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Brand Guideline
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Bottom Section --> */}
        <div className="border-t border-gray-900 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">Copyright 2024 – HireLoop</p>

          <div className="flex gap-4 text-sm">
            <Link href="#" className="hover:text-white">
              Terms & Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
