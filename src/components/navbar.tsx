import { Link } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <nav className="lg:pt-[28px] lg:pb-[29px] lg:px-[30px] py-0 px-[15px]">
      <div className="lg:max-w-[1280px] max-w-[390px] flex flex-wrap items-center justify-between mx-auto lg:h-auto h-[68px]">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="h-[35px] w-[146px] relative">
            <img
              src="https://framerusercontent.com/images/38LQkq6faZvEhpoPZeVEnLFHYI.svg"
              className="w-full h-full object-center object-contain"
              alt="Flowbite Logo"
            />
          </div>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a className="lg:flex flex-row items-center justify-center hidden bg-[#fed545] py-2 pl-5 pr-2 gap-3 rounded-[80px] group hover:bg-white">
            <div>
              <p className="text-base font-semibold fontFamily-mono text-black leading-[1.7em] ">
                BOOK A MEETING
              </p>
            </div>
            <div className="flex flex-row items-center justify-center w-10 h-10 overflow-hidden bg-black relative rounded-[100%]">
              <img
                src="https://framerusercontent.com/images/WSIBAgypbYQj55g2waL899Xc.svg"
                alt=""
                sizes="24"
                className="object-center object-cover"
              />
            </div>
          </a>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col gap-10 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="relative group flex flex-row items-center justify-center gap-[5px]">
              <a
                href="/"
                className="block text-[14px] fontFamily-mono font-medium hover:opacity-50 text-black"
              >
                ALL PAGES
              </a>
              <div className="flex flex-col items-center w-4 h-4 justify-center transform group-hover:rotate-180 duration-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="block w-full h-full"
                  stroke="#000"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div className="group-hover:flex flex-row bg-white hidden items-center justify-center gap-20 bg-bltext-black z-50 border-[1px] w-[500px] h-auto rounded-[15px] p-6 absolute right-0 top-[20px] left-0">
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <a
                    href="/"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    HOMEPAGE
                  </a>
                  <a
                    href="/about"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    ABOUT
                  </a>
                  <a
                    href="/service"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    SERVICE
                  </a>
                  <a
                    href="/factory"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    SERVICE DETAILS
                  </a>

                  <a
                    href="/projects"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    PROJECTS
                  </a>

                  <a
                    href="/contemporary"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    PROJECTS DETAILS
                  </a>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <a
                    href="/blog"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    BLOG
                  </a>
                  <a
                    href="/about"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    BLOG DETAILS
                  </a>
                  <a
                    href="/team"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    TEAM
                  </a>
                  <a
                    href="/testimonials"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    TESTIMONIALS
                  </a>

                  <a
                    href="/contact"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    contact
                  </a>

                  <a
                    href="/404"
                    className="block w-full h-full text-[14px] font-normal text-black"
                  >
                    404
                  </a>
                </div>
              </div>
            </li>
            <li className="cursor-pointer hover:opacity-50">
              <a
                href="/about"
                className="block w-full h-full text-[14px] font-medium text-black"
              >
                ABOUT
              </a>
            </li>
            <li className="relative group flex flex-row items-center justify-center gap-[5px]">
              <a
                href="/services"
                className="block w-full h-full text-[14px] font-medium text-black"
              >
                SERVICES
              </a>
              <div className="flex flex-col items-center w-4 h-4 justify-center transform group-hover:rotate-180 duration-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#000"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </li>
            <li className="cursor-pointer hover:opacity-50">
              <a
                href="/appointment"
                className="block w-full h-full text-[14px] font-medium text-black"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
