import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900/80 backdrop-blur-md py-8 mt-12">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4">
    
          <div className="flex space-x-6">
          <a
            href="https://github.com/MuhammadHasan-04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-yellow-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadhasanaltaf/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-yellow-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/hasan.__.altaf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-yellow-400 transition text-2xl"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-black dark:text-white text-xs">
          &copy; {new Date().getFullYear()} CryptoDash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
