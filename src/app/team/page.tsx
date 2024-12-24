import Navbar from "@/components/navbar";
import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center py-[130px] px-[20px] lg:py-[130px] lg:px-[30px] w-full">
        <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center lg:max-w-[1107px] md:max-w-[390px] w-full gap-[40px] lg:gap-[84px]">
          <div className="flex flex-1 flex-col w-full items-center justify-center lg:justify-start gap-8 lg:gap-[43px]">
            <div className="flex flex-col items-center w-full justify-center gap-[20px]">
              <div className="w-full">
                <h2 className="text-[35px] lg:text-[80px] text-black text-center font-semibold leading-[1.2em]">
                  Meet Our Experts
                </h2>
              </div>
              <div className="mx-auto lg:w-[540px] w-full">
                <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                  Each member brings a wealth of experience and expertise,
                  contributing to our reputation for excellence in the
                  construction industry in the quality of our work and the
                  satisfaction of our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start w-full">
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start w-full lg:gap-[40px] gap-[120px] lg:pt-0 pt-[100px] ">
              <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:gap-16 lg:pt-[150px]">
                <div className="flex flex-col items-center justify-center w-full relative bg-[#f6f7f9]  lg:w-[540px]">
                  <div className="flex flex-col items-center justify-center absolute w-[149px] h-[149px] lg:w-[200px] lg:h-[200px] rounded-[100%] aspect-[1/1] bottom-[227px] left-1/2 transform -translate-x-1/2 top-[-97px] lg:top-[-140px] border-8 border-white">
                    <img
                      src="https://framerusercontent.com/images/AMeM8brWOUejoXyrojTJVgzFk.png"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center pt-[80px] pb-[40px] px-[40px] gap-4 w-full">
                    <div className="flex flex-col items-center justify-center gap-1 lg:gap-3">
                      <div className="w-full">
                        <p className="text-lg text-black text-center font-semibold leading-[1.7em] whitespace-nowrap">
                          Emily Johnson
                        </p>
                      </div>

                      <div className="w-full">
                        <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                          Project Manager
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                        John Smith excellence guide every project, with a vision
                        of delivering high-quality, innovative solutions,
                        ensuring we maintain our reputation for reliability and
                        superior craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full relative bg-[#f6f7f9]  lg:w-[540px]">
                  <div className="flex flex-col items-center justify-center absolute w-[149px] h-[149px] lg:w-[200px] lg:h-[200px] rounded-[100%] aspect-[1/1] bottom-[227px] left-1/2 transform -translate-x-1/2 top-[-97px] lg:top-[-140px] border-8 border-white">
                    <img
                      src="https://framerusercontent.com/images/bbFBDqnUVPhy46O4if4jde239vg.png"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center pt-[80px] pb-[40px] px-[40px] gap-4 w-full">
                    <div className="flex flex-col items-center justify-center gap-1 lg:gap-3">
                      <div className="w-full">
                        <p className="text-lg text-black text-center font-semibold leading-[1.7em] whitespace-nowrap">
                          Michael Brown
                        </p>
                      </div>

                      <div className="w-full">
                        <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                          Lead Architect
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                        John Smith excellence guide every project, with a vision
                        of delivering high-quality, innovative solutions,
                        ensuring we maintain our reputation for reliability and
                        superior craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:gap-16 lg:pt-[150px]">
                <div className="flex flex-col items-center justify-center w-full relative bg-[#f6f7f9]  lg:w-[540px]">
                  <div className="flex flex-col items-center justify-center absolute w-[149px] h-[149px] lg:w-[200px] lg:h-[200px] rounded-[100%] aspect-[1/1] bottom-[227px] left-1/2 transform -translate-x-1/2 top-[-97px] lg:top-[-140px] border-8 border-white">
                    <img
                      src="https://framerusercontent.com/images/5vxhMRNepJ5U1WHrwyop7MJmRU.png"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center pt-[80px] pb-[40px] px-[40px] gap-4 w-full">
                    <div className="flex flex-col items-center justify-center gap-1 lg:gap-3">
                      <div className="w-full">
                        <p className="text-lg text-black text-center font-semibold leading-[1.7em] whitespace-nowrap">
                          David Lee
                        </p>
                      </div>

                      <div className="w-full">
                        <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                          Civil Engineer
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                        John Smith excellence guide every project, with a vision
                        of delivering high-quality, innovative solutions,
                        ensuring we maintain our reputation for reliability and
                        superior craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full relative bg-[#f6f7f9]  lg:w-[540px]">
                  <div className="flex flex-col items-center justify-center absolute w-[149px] h-[149px] lg:w-[200px] lg:h-[200px] rounded-[100%] aspect-[1/1] bottom-[227px] left-1/2 transform -translate-x-1/2 top-[-97px] lg:top-[-140px] border-8 border-white">
                    <img
                      src="https://framerusercontent.com/images/pMvBFvcTc66f9QRwk9EdSwQaE.png"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center pt-[80px] pb-[40px] px-[40px] gap-4 w-full">
                    <div className="flex flex-col items-center justify-center gap-1 lg:gap-3">
                      <div className="w-full">
                        <p className="text-lg text-black text-center font-semibold leading-[1.7em] whitespace-nowrap">
                          France Cly
                        </p>
                      </div>

                      <div className="w-full">
                        <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                          Project Manager
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                        John Smith excellence guide every project, with a vision
                        of delivering high-quality, innovative solutions,
                        ensuring we maintain our reputation for reliability and
                        superior craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:gap-16 lg:pt-[150px]">
                <div className="flex flex-col items-center justify-center w-full relative bg-[#f6f7f9]  lg:w-[540px]">
                  <div className="flex flex-col items-center justify-center absolute w-[149px] h-[149px] lg:w-[200px] lg:h-[200px] rounded-[100%] aspect-[1/1] bottom-[227px] left-1/2 transform -translate-x-1/2 top-[-97px] lg:top-[-140px] border-8 border-white">
                    <img
                      src="https://framerusercontent.com/images/EHnCd6uSFr8xFmGxfeG9qnyl8.png"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center pt-[80px] pb-[40px] px-[40px] gap-4 w-full">
                    <div className="flex flex-col items-center justify-center gap-1 lg:gap-3">
                      <div className="w-full">
                        <p className="text-lg text-black text-center font-semibold leading-[1.7em] whitespace-nowrap">
                          Antony Jhon
                        </p>
                      </div>

                      <div className="w-full">
                        <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                          Lead Architect
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                        John Smith excellence guide every project, with a vision
                        of delivering high-quality, innovative solutions,
                        ensuring we maintain our reputation for reliability and
                        superior craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full relative bg-[#f6f7f9]  lg:w-[540px]">
                  <div className="flex flex-col items-center justify-center absolute w-[149px] h-[149px] lg:w-[200px] lg:h-[200px] rounded-[100%] aspect-[1/1] bottom-[227px] left-1/2 transform -translate-x-1/2 top-[-97px] lg:top-[-140px] border-8 border-white">
                    <img
                      src="https://framerusercontent.com/images/LMNJJQjNXUOXA0k9SVNweYJo.png"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center pt-[80px] pb-[40px] px-[40px] gap-4 w-full">
                    <div className="flex flex-col items-center justify-center gap-1 lg:gap-3">
                      <div className="w-full">
                        <p className="text-lg text-black text-center font-semibold leading-[1.7em] whitespace-nowrap">
                          Mycale Simon
                        </p>
                      </div>

                      <div className="w-full">
                        <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                          Civil Engineer
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                        John Smith excellence guide every project, with a vision
                        of delivering high-quality, innovative solutions,
                        ensuring we maintain our reputation for reliability and
                        superior craftsmanship.
                      </p>
                    </div>
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
