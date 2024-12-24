"use client";

import Navbar from "@/components/navbar";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center bg-white py-[60px] px-[20px] lg:pt-[90px] lg:px-[30px] w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px]"
        >
          <div className="flex flex-col items-center justify-center lg:gap-[60px] gap-5">
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <div className="w-full">
                <h1 className="text-4xl lg:text-[80px] text-black text-center font-semibold leading-[1.2em]">
                  Latest News & Insights
                </h1>
              </div>
              <div className="w-full lg:w-[52%]">
                <p className="text-lg text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                  Our blog is dedicated to providing valuable insights, expert
                  advice, and the latest trends in the construction industry
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 flex-1 items-center justify-center w-full gap-9 lg:gap-6">
            <a
              href=""
              className="flex flex-col items-center justify-center lg:h-[432px] h-[348px] aspect-[.9490740740740741/1] w-full relative"
            >
              <div className="absolute inset-0">
                <img
                  src="https://framerusercontent.com/images/4yLvCHXwErq50npk8mkiAo3XQ.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col absolute items-start justify-start w-[86%] bottom-[24px] left-[20px] gap-4 z-10">
                <div className="flex flex-col items-center justify-center py-[2px] px-[10px] border-[1px] bg-[#00000066] rounded-[40px]">
                  <p className="text-sm text-white font-medium leading-[1.7em]">
                    Sep 12, 2024
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl text-white font-semibold leading-[1.4em]">
                    10 Essential Steps to Building Your Home from Scratch
                  </p>
                </div>
              </div>
            </a>

            <a
              href=""
              className="flex flex-col items-center justify-center lg:h-[432px] h-[348px] aspect-[.9490740740740741/1] w-full relative"
            >
              <div className="absolute inset-0">
                <img
                  src="https://framerusercontent.com/images/nPFrk3MpWnIJxLFROzQjvv8P4.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col absolute items-start justify-start w-[86%] bottom-[24px] left-[20px] gap-4 z-10">
                <div className="flex flex-col items-center justify-center py-[2px] px-[10px] border-[1px] bg-[#00000066] rounded-[40px]">
                  <p className="text-sm text-white font-medium leading-[1.7em]">
                    Sep 13, 2024
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl text-white font-semibold leading-[1.4em]">
                    Choosing the Right Contractor Key Questions to Ask
                  </p>
                </div>
              </div>
            </a>

            <a
              href=""
              className="flex flex-col items-center justify-center lg:h-[432px] h-[348px] aspect-[.9490740740740741/1] w-full relative"
            >
              <div className="absolute inset-0">
                <img
                  src="https://framerusercontent.com/images/670H0rRDOXjJjLfwfw2T69nxxLg.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col absolute items-start justify-start w-[86%] bottom-[24px] left-[20px] gap-4 z-10">
                <div className="flex flex-col items-center justify-center py-[2px] px-[10px] border-[1px] bg-[#00000066] rounded-[40px]">
                  <p className="text-sm text-white font-medium leading-[1.7em]">
                    Sep 14, 2024
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl text-white font-semibold leading-[1.4em]">
                    Eco-Friendly Building Materials: How to Create a Sustainable
                    Home{" "}
                  </p>
                </div>
              </div>
            </a>

            <a
              href=""
              className="flex flex-col items-center justify-center lg:h-[432px] h-[348px] aspect-[.9490740740740741/1] w-full relative"
            >
              <div className="absolute inset-0">
                <img
                  src="https://framerusercontent.com/images/XvB0IQMxmSHN4lCKkPxn8E6Yts.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col absolute items-start justify-start w-[86%] bottom-[24px] left-[20px] gap-4 z-10">
                <div className="flex flex-col items-center justify-center py-[2px] px-[10px] border-[1px] bg-[#00000066] rounded-[40px]">
                  <p className="text-sm text-white font-medium leading-[1.7em]">
                    Sep 15, 2024
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl text-white font-semibold leading-[1.4em]">
                    How to Choose the Right Contractor for Your Next Project
                  </p>
                </div>
              </div>
            </a>

            <a
              href=""
              className="flex flex-col items-center justify-center lg:h-[432px] h-[348px] aspect-[.9490740740740741/1] w-full relative"
            >
              <div className="absolute inset-0">
                <img
                  src="https://framerusercontent.com/images/mf0dQX9qHoluebQ9bIhqDhjXc.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col absolute items-start justify-start w-[86%] bottom-[24px] left-[20px] gap-4 z-10">
                <div className="flex flex-col items-center justify-center py-[2px] px-[10px] border-[1px] bg-[#00000066] rounded-[40px]">
                  <p className="text-sm text-white font-medium leading-[1.7em]">
                    Sep 16, 2024
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl text-white font-semibold leading-[1.4em]">
                    Essential Tips for Successful Home Renovations{" "}
                  </p>
                </div>
              </div>
            </a>

            <a
              href=""
              className="flex flex-col items-center justify-center lg:h-[432px] h-[348px] aspect-[.9490740740740741/1] w-full relative"
            >
              <div className="absolute inset-0">
                <img
                  src="https://framerusercontent.com/images/NagFYPZWKhdGxsCOjGVHn3ehoY.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col absolute items-start justify-start w-[86%] bottom-[24px] left-[20px] gap-4 z-10">
                <div className="flex flex-col items-center justify-center py-[2px] px-[10px] border-[1px] bg-[#00000066] rounded-[40px]">
                  <p className="text-sm text-white font-medium leading-[1.7em]">
                    Sep 17, 2024
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl text-white font-semibold leading-[1.4em]">
                    Top 5 Construction Trends Transforming the Industry in 2024
                  </p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-center bg-white py-[60px] px-[20px] w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px]"
        >
          <div className="flex flex-col items-center justify-center w-full bg-[#fed545] overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center  relative w-full lg:pt-[20px] pt-[60px]">
              <div className="flex flex-col  items-center p-0 justify-center relative h-[204px] lg:h-[637px] lg:w-[987px] w-full">
                <div className="absolute aspect-[1.3877551020408163/1] h-full w-full lg:left-[55px]">
                  <img
                    src="https://framerusercontent.com/images/95Y8bgPukcnhNtVIkhk3eIEDUMc.png"
                    alt=""
                    className="lg:hidden w-full h-full object-center object-cover"
                  />
                  <img
                    src="https://framerusercontent.com/images/95Y8bgPukcnhNtVIkhk3eIEDUMc.png"
                    alt=""
                    className="lg:flex hidden w-full h-full object-center object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0">
                <img
                  src="https://framerusercontent.com/images/EoBm7lWRwk9idaQL7LmHzpMeg.png"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <div className="h-[121px] w-[255px] -rotate-[40deg] left-[-99px] lg:left-[-72px] lg:top-[-45px] top-[-50px] flex flex-row items-center justify-center absolute bg-white"></div>
              <div className="flex flex-col items-center justify- lg:ml-[56px] z-10 mt-auto lg:w-[36%] w-full gap-5 pt-[40px] pb-[60px] px-0">
                <div className="flex flex-col items-center justify-center w-full">
                  <h2 className="text-4xl lg:text-[50px] text-black lg:text-left text-center font-semibold leading-[1.2em] w-full">
                    Let’s Start Your Project Today!
                  </h2>
                </div>
                <div className="flex flex-col lg:items-start lg:justify-start w-full items-center justify-center">
                  <a className="flex flex-row pt-[10px] pr-[8px] pb-[10px] pl-[20px] items-center border-[1.5px] border-black  hover:bg-[#fed545] hover:border-[#fed545] hover:text-black justify-center bg-transparent py-[14px] px-6 gap-3 rounded-[80px] group ">
                    <div>
                      <p className="text-base font-semibold text-black leading-[1.7em]  ">
                        LEARN MORE
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
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-center bg-white py-[60px] px-[20px] w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between items-center justify-center w-full pb-8 border-b">
            <div className="flex flex-col items-center justify-center w-fit whitespace-nowrap">
              <h3 className="text-[32px] text-black text-left font-semibold leading-[1.4em]">
                We believe in excellence.
              </h3>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center w-fit whitespace-nowrap gap-[58px]">
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href="#"
                  className="text-base text-black font-medium leading-[1.7em] hover:opacity-60"
                >
                  Home
                </a>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href="#"
                  className="text-base text-black font-medium leading-[1.7em] hover:opacity-60"
                >
                  PROJECTS
                </a>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href="#"
                  className="text-base text-black font-medium leading-[1.7em] hover:opacity-60"
                >
                  ABOUT US
                </a>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href="#"
                  className="text-base text-black font-medium leading-[1.7em] hover:opacity-60"
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-8 border-b w-full">
            <h2 className="lg:text-[286px] md:text-[140px] text-[75px] text-black font-semibold leading-[1.12em]">
              Next_Gen
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between items-center justify-center w-full pb-8">
            <div className="flex flex-col items-center justify-center w-fit whitespace-nowrap">
              <p className="text-base text-black text-left font-normal leading-[1.7em]">
                2024 © FramerBite All Rights Reserved.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center w-fit whitespace-nowrap gap-[58px]">
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href="#"
                  className="text-base text-black font-semibold leading-[1.7em] hover:opacity-60"
                >
                  Terms of serviice
                </a>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href="#"
                  className="text-base text-black font-semibold leading-[1.7em] hover:opacity-60"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
