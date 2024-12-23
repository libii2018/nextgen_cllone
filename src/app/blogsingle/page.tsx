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

export default function Blogsingle() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center bg-white py-[110px] px-[30px] lg:pt-[90px] lg:px-[30px] lg:pb-[60px] w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px]"
        >
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-center py-[2px] px-[10px] mr-auto bg-[#fed545] rounded-[40px] mb-5">
              <p className="text-sm text-black font-medium leading-[1.7em]">
                Sep 14, 2024
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-5 pb-16">
              <h1 className="text-4xl lg:text-[75px] text-black text-left font-semibold leading-[1.2em]">
                Eco-Friendly Building Materials: How to Create a Sustainable
                Home
              </h1>
            </div>
            <div className="flex flex-col w-full h-[350px] lg:h-[644px]">
              <img
                src="https://framerusercontent.com/images/670H0rRDOXjJjLfwfw2T69nxxLg.png"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-center bg-white py-[110px] px-[30px] lg:px-[30px] lg:pb-[60px] w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-center lg:w-[59%] w-full"
        >
          <h3 className="text-[32px] text-black font-semibold leading-[1.4em] mb-7">
            Introduction
          </h3>
          <p className="text-base text-[#333333] font-normal leading-[1.7em] mb-7">
            Welcome to our latest blog post on [Blog Post Title]! In this post,
            we delve into [briefly describe the topic of the post—whether it's a
            recent project, industry insight, construction tips, or trends].
            Whether you're planning a new construction project or looking for
            ways to enhance your current space, this article offers valuable
            insights and practical advice.
          </p>
          <h3 className="text-[32px] text-black font-semibold leading-[1.4em] mb-7">
            Color Theory
          </h3>
          <p className="text-base text-[#333333] font-normal leading-[1.7em] mb-7">
            He moonlights difficult-engrossed, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy. Unaffected at ye of
            compliment alteration to. Place voice no arises along to. Parlors
            waiting so against me no. Wishing calling is warrant settled was
            lucky. Express besides it present if at an opinion visitor. For who
            thoroughly her boy estimating conviction. Removed demands expense
            account in outward tedious do. Particular way thoroughly unaffected
            projection favorable Mrs can be projecting own.
          </p>
          <ul>
            <li className="text-[#333333] font-normal leading-[1.7em] flex flex-row">
              <p>The standard chunk of Lorem Ipsum used since the 1500s.</p>
            </li>
            <li className="text-[#333333] font-normal leading-[1.7em]">
              <p>reproduced below for those interested.</p>
            </li>
            <li className="text-[#333333] font-normal leading-[1.7em]">
              <p>It is a long-established fact that a reader will.</p>
            </li>
            <li className="text-[#333333] font-normal leading-[1.7em]">
              <p>
                distracted by the readable content of a page when looking at its
                layout.
              </p>
            </li>
          </ul>

          <p className="text-base text-[#333333] font-normal leading-[1.7em] mb-7">
            Speedily say has suitable disposal add boy. On fourth doubt miles of
            child. Exercise joy man children rejoiced. Yet uncommonly his ten
            who diminution astonished. Demesne's new manners savings staying
            had. Under folly balls, death own point now men. Match way she
            avoids seeing death. She drifts their fat off.
          </p>
          <h3 className="text-[32px] text-black font-semibold leading-[1.4em] mb-7">
            Sustainable Materials:
          </h3>
          <p className="text-base text-[#333333] font-normal leading-[1.7em] mb-7">
            He moonlights difficult-engrossed, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy. Unaffected at ye of
            compliment alteration to. Place voice no arises along to. Parlors
            waiting so against me no. Wishing calling is warrant settled was
            lucky. Express besides it present if at an opinion visitor. For who
            thoroughly her boy estimating conviction. Removed demands expense
            account in outward tedious do. Particular way thoroughly unaffected
            projection favorable Mrs can be projecting own.
          </p>
          <ul>
            <li className="text-[#333333] font-normal leading-[1.7em] flex flex-row">
              <p>The standard chunk of Lorem Ipsum used since the 1500s.</p>
            </li>
            <li className="text-[#333333] font-normal leading-[1.7em]">
              <p>reproduced below for those interested.</p>
            </li>
            <li className="text-[#333333] font-normal leading-[1.7em]">
              <p>It is a long-established fact that a reader will.</p>
            </li>
            <li className="text-[#333333] font-normal leading-[1.7em]">
              <p>
                distracted by the readable content of a page when looking at its
                layout.
              </p>
            </li>
          </ul>
          <p className="text-base text-[#333333] font-normal leading-[1.7em] mb-7">
            Speedily say has suitable disposal add boy. On fourth doubt miles of
            child. Exercise joy man children rejoiced. Yet uncommonly his ten
            who diminution astonished. Demesne's new manners savings staying
            had. Under folly balls, death own point now men. Match way she
            avoids seeing death. She drifts their fat off.
          </p>
          <img
            src="https://framerusercontent.com/images/FoW9LHhOKrRdmI0XeT6n6eMAVbw.png"
            alt=""
            className="aspect-[1920/1154] w-full h-auto mb-7"
          />
          <h3 className="text-[32px] text-black font-semibold leading-[1.4em] mb-7">
            Conclusion:
          </h3>
          <p className="text-base text-[#333333] font-normal leading-[1.7em] mb-7">
            Sustainability continues to be a major focus, with an increasing
            demand for eco-friendly materials. Think reclaimed wood, recycled
            metals, and organic fabrics. Designers are finding creative ways to
            incorporate these materials without compromising on style, blending
            modern aesthetics with environmental consciousness. Welcome to our
            latest vlog where we dive into the hottest interior design trends
            for 2024. This year brings a blend of innovative concepts and
            timeless styles, ensuring there's something for everyone looking to
            refresh their space.
          </p>
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-center bg-white py-[60px] px-[20px] w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center lg:max-w-[1280px] md:max-w-[390px] w-full gap-[40px]"
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
          className="flex flex-col items-center justify-center lg:max-w-[1280px] md:max-w-[390px] w-full gap-[40px]"
        >
          <div className="flex flex-col md:flex-col lg:flex-row lg:items-center lg:justify-between items-center justify-center w-full pb-8 border-b">
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
                  HOME
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
          <div className="flex flex-col items-center justify-center pb-8 border-b">
            <h2 className="lg:text-[286px] md:text-[90px] text-[75px] w-full text-black font-semibold leading-[1.12em]">
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
