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

export default function project() {
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
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center lg:w-[75%] w-full gap-5">
              <div className="w-full">
                <h1 className="text-4xl lg:text-[80px] text-black text-center font-semibold leading-[1.2em]">
                  Showcase of Excellence
                </h1>
              </div>
              <div className="w-full ">
                <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                  We take pride in transforming visions into reality through
                  exceptional craftsmanship and innovative design. Our diverse
                  portfolio spans residential, commercial, and industrial
                  projects, each crafted with meticulous attention to detail.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 flex-1 items-center justify-center w-full gap-6">
            <a
              href="#"
              className="flex flex-col group items-start justify-start aspect-[1.13357/1] w-full"
            >
              <div className="flex flex-none flex-col items-start justify-start w-full lg:h-[554px] h-[219px]">
                <img
                  src="https://framerusercontent.com/images/GPUKTLrE80Gie3WXF7ONU1Tlx14.png"
                  alt=""
                  className="block w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full hover:group-hover:pl-5 py-5 pr-5 hover:group-hover:bg-[#fed545] duration-200">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-full pt-[8px] pb-[10px]">
                    <h3 className="text-[32px] text-black text-left font-semibold leading-[1.2em]">
                      Brand New Condos At West Beach
                    </h3>
                  </div>
                  <div className="w-full lg:w-[83%]">
                    <p className="text-base text-[#3b3b3b] text-left font-normal leading-[1.7em]">
                      Discover the artistry and craftsmanship behind our
                      stunning residential projects.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex flex-col group items-start justify-start aspect-[1.13357/1] w-full"
            >
              <div className="flex flex-none flex-col items-start justify-start w-full lg:h-[554px] h-[219px]">
                <img
                  src="https://framerusercontent.com/images/xTRQ5W2kUNSdj9u45zw65LVfY.png"
                  alt=""
                  className="block w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full hover:group-hover:pl-5 py-5 pr-5 hover:group-hover:bg-[#fed545] duration-200">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-full pt-[8px] pb-[10px]">
                    <h3 className="text-[32px] text-black text-left font-semibold leading-[1.2em]">
                      Luxury Beachfront Villa
                    </h3>
                  </div>
                  <div className="w-full lg:w-[83%]">
                    <p className="text-base text-[#3b3b3b] text-left font-normal leading-[1.7em]">
                      Step into luxury with our beachfront villa project. This
                      stunning home boasts panoramic ocean views, an infinity
                      pool.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex flex-col group items-start justify-start aspect-[1.13357/1] w-full"
            >
              <div className="flex flex-none flex-col items-start justify-start w-full lg:h-[554px] h-[219px]">
                <img
                  src="https://framerusercontent.com/images/7mpx3tjPixMZ7IM9NPv00ZMNIEs.png"
                  alt=""
                  className="block w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full hover:group-hover:pl-5 py-5 pr-5 hover:group-hover:bg-[#fed545] duration-200">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-full pt-[8px] pb-[10px]">
                    <h3 className="text-[32px] text-black text-left font-semibold leading-[1.2em]">
                      Serenity Springs Apartments{" "}
                    </h3>
                  </div>
                  <div className="w-full lg:w-[83%]">
                    <p className="text-base text-[#3b3b3b] text-left font-normal leading-[1.7em]">
                      Discover the artistry and craftsmanship behind our
                      stunning residential & Commercial projects.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex flex-col group items-start justify-start aspect-[1.13357/1] w-full"
            >
              <div className="flex flex-none flex-col items-start justify-start w-full lg:h-[554px] h-[219px]">
                <img
                  src="https://framerusercontent.com/images/KBQBVfEpHeBQSrvFJ2K2L7H3Aw.png"
                  alt=""
                  className="block w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full hover:group-hover:pl-5 py-5 pr-5 hover:group-hover:bg-[#fed545] duration-200">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-full pt-[8px] pb-[10px]">
                    <h3 className="text-[32px] text-black text-left font-semibold leading-[1.2em]">
                      Historic Building Restoration{" "}
                    </h3>
                  </div>
                  <div className="w-full lg:w-[83%]">
                    <p className="text-base text-[#3b3b3b] text-left font-normal leading-[1.7em]">
                      Explore our latest eco-friendly project where we built a
                      sustainable family home from the Featuring.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex flex-col group items-start justify-start aspect-[1.13357/1] w-full"
            >
              <div className="flex flex-none flex-col items-start justify-start w-full lg:h-[554px] h-[219px]">
                <img
                  src="https://framerusercontent.com/images/nYqFNAf0QLUQhr6IpPuA9Btwo.png"
                  alt=""
                  className="block w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full hover:group-hover:pl-5 py-5 pr-5 hover:group-hover:bg-[#fed545] duration-200">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-full pt-[8px] pb-[10px]">
                    <h3 className="text-[32px] text-black text-left font-semibold leading-[1.2em]">
                      Contemporary Urban Retreat{" "}
                    </h3>
                  </div>
                  <div className="w-full lg:w-[83%]">
                    <p className="text-base text-[#3b3b3b] text-left font-normal leading-[1.7em]">
                      We focused on blending indoor and outdoor living to create
                      a serene retreat that perfectly complements its coastal
                      environment.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex flex-col group items-start justify-start aspect-[1.13357/1] w-full"
            >
              <div className="flex flex-none flex-col items-start justify-start w-full lg:h-[554px] h-[219px]">
                <img
                  src="https://framerusercontent.com/images/BKZShXutAxBXkp7xqHm5hpAMZc0.png"
                  alt=""
                  className="block w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full hover:group-hover:pl-5 py-5 pr-5 hover:group-hover:bg-[#fed545] duration-200">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-full pt-[8px] pb-[10px]">
                    <h3 className="text-[32px] text-black text-left font-semibold leading-[1.2em]">
                      Eco-Friendly Family Home
                    </h3>
                  </div>
                  <div className="w-full lg:w-[83%]">
                    <p className="text-base text-[#3b3b3b] text-left font-normal leading-[1.7em]">
                      This version emphasizes the unique qualities of your
                      projects while maintaining a smooth flow. Let me know if
                      you'd like any adjustments!
                    </p>
                  </div>
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
            <h2 className="lg:text-[286px] md:text-[100px] text-[75px] w-full text-black font-semibold leading-[1.12em]">
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
