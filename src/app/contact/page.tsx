import Navbar from "@/components/navbar";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center bg-white py-[110px] px-[30px] lg:pt-[130px] lg:px-[30px] lg:pb-[60px] w-full">
        <div className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[60px]">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <div className="w-full">
                <h1 className="text-4xl lg:text-[80px] text-black text-center font-semibold leading-[1.2em]">
                  Trusted by 5,600+ customers
                </h1>
              </div>
              <div className="w-full lg:w-[51%]">
                <p className="text-lg text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                  Explore the core mission and vision that drives us every day.
                  At Behind the Stories Company, we're not just about cleaning
                  homes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#f6f7f9] lg:py-[80px] lg:px-[75px] w-full px-5">
            <form action="" className="w-full h-full flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row items-start justify-start w-full gap-3">
                <div className="flex flex-col items-start justify-start w-full lg:w-[48%]">
                  <label
                    htmlFor=""
                    className="text-base text-[#1f1f1f] font-bold text-left leading-[170%] py-2"
                  >
                    Name
                  </label>
                  <div className="w-full flex flex-col relative">
                    <input
                      type="text"
                      placeholder="First & Last Name"
                      className="bg-white rounded-[8px] p-3 text-black text-base leading-[170%] outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full lg:w-[48%]">
                  <label
                    htmlFor=""
                    className="text-base text-[#1f1f1f] font-bold text-left leading-[170%] py-2"
                  >
                    Email
                  </label>
                  <div className="w-full flex flex-col relative">
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      className="bg-white rounded-[8px] p-3 text-black text-base leading-[170%] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-start justify-start w-full gap-3">
                <div className="flex flex-col items-start justify-start w-full lg:w-[48%]">
                  <label
                    htmlFor=""
                    className="text-base text-[#1f1f1f] font-bold text-left leading-[170%] py-2"
                  >
                    Phone Number
                  </label>
                  <div className="w-full flex flex-col relative">
                    <input
                      type="email"
                      placeholder="Add Your Phone"
                      className="bg-white rounded-[8px] p-3 text-black text-base leading-[170%] outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full lg:w-[48%]">
                  <label
                    htmlFor=""
                    className="text-base text-[#1f1f1f] font-bold text-left leading-[170%] py-2"
                  >
                    Location
                  </label>
                  <div className="w-full flex flex-col relative">
                    <input
                      type="number"
                      placeholder="Add A Subject Line"
                      className="bg-white rounded-[8px] p-3 text-black text-base leading-[170%] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <label
                  htmlFor=""
                  className="text-base text-[#1f1f1f] font-bold text-left leading-[170%] py-2"
                >
                  Message
                </label>
                <div className="w-full flex flex-col relative">
                  <textarea
                    placeholder="Write Your Message"
                    rows={7}
                    className="resize-none bg-white rounded-[8px] p-3 text-black text-base leading-[170%] outline-none"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:items-start items-center space-x-4 w-full">
                <button className="bg-[#fed545] px-[20px] py-[15px] h-[56px] w-[207px] flex flex-col items-center justify-center text-black text-[18px] font-bold rounded-[80px] hover:bg-black hover:text-white">
                  <div className="flex flex-row gap-3 text-center mx-auto">
                    <p className="text-base font-semibold text-center">
                      SEND MASSAGE
                    </p>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-[60px] px-[20px] lg:py-[130px] lg:px-[30px] w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px] lg:gap-[84px]">
          <div className="flex flex-col items-center justify-center w-full lg:w-[47%] lg:h-[657px]">
            <div className="flex flex-col items-center justify-center w-full h-[380px] lg:h-full">
              <div
                className="flex flex-1 h-full w-full relative"
                style={{
                  maskImage:
                    "url('https://framerusercontent.com/images/Rd4szRBfJn4bes8MeDbeQyasVRE.png')",
                  WebkitMaskImage:
                    "url('https://framerusercontent.com/images/Rd4szRBfJn4bes8MeDbeQyasVRE.png')",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "cover",
                  WebkitMaskSize: "cover",
                  maskComposite: "luminance",
                  WebkitMaskComposite: "luminance",
                }}
              >
                <div className="absolute w-full h-full inset-0">
                  <img
                    src="https://framerusercontent.com/images/fLejJvUV0j0B8dj9K1bV3eCtOIc.png?scale-down-to=1024"
                    alt=""
                    className="block w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8 lg:gap-[48px] my-auto">
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <div className="w-full">
                <h2 className="text-[35px] lg:text-[54px] text-black text-left font-semibold leading-[1.2em]">
                  Contact Info
                </h2>
              </div>
              <div className="w-full lg:mr-auto lg:w-[68%]">
                <p className="text-base text-[#3b3b3b] text-left font-normal leading-[1.7em]">
                  Book a free inspection now and discover what makes Lonestar
                  Roofing the top choice for Texans.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-6 lg:gap-[32px]">
              <div className="flex flex-row items-center justify-between gap-6 w-full md:mr-auto md:w-[90%]">
                <div className="flex flex-col items-center justify-center rounded-[100%] bg-[#fed545] w-[56px] h-[56px] aspect-[1/1]">
                  <img
                    src="https://framerusercontent.com/images/XN3nDVBkGL2b07m2svDhJ2HCw.svg"
                    alt=""
                    className="w-[19px] h-[19px] object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-1">
                  <div className="w-full">
                    <p className="text-xl text-black font-semibold leading-[1.4em]">
                      Phone Call
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-base text-[#3b3b3b] font-normal leading-[1.4em]">
                      +001 480 555 0103
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-6 w-full md:mr-auto md:w-[90%]">
                <div className="flex flex-col items-center justify-center rounded-[100%] bg-[#fed545] w-[56px] h-[56px] aspect-[1/1]">
                  <img
                    src="https://framerusercontent.com/images/Z5H1rHeIwbi8P5zAzVIZQmViQQQ.svg"
                    alt=""
                    className="w-[21px] h-[17px] object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-1">
                  <div className="w-full">
                    <p className="text-xl text-black font-semibold leading-[1.4em]">
                      Email
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-base text-[#3b3b3b] font-normal leading-[1.4em]">
                      hello@framerbite.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-6 w-full md:mr-auto md:w-[90%]">
                <div className="flex flex-col items-center justify-center rounded-[100%] bg-[#fed545] w-[56px] h-[56px] aspect-[1/1]">
                  <img
                    src="https://framerusercontent.com/images/VpLzMQWTv4A0wjGDe2CaHOsVkE8.svg"
                    alt=""
                    className="w-[20px] h-[25px] object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-1">
                  <div className="w-full">
                    <p className="text-xl text-black font-semibold leading-[1.4em]">
                      Location
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-base text-[#3b3b3b] font-normal leading-[1.4em]">
                      4140 Parker Rd. Allentown, New Mexico 31134
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-white py-[60px] px-[20px] w-full">
        <div className="flex flex-col items-center justify-center lg:max-w-[1280px] md:max-w-[390px] w-full gap-[40px]">
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
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-white py-[60px] px-[20px] w-full">
        <div className="flex flex-col items-center justify-center lg:max-w-[1280px] md:max-w-[390px] w-full gap-[40px]">
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
        </div>
      </section>
    </>
  );
}
