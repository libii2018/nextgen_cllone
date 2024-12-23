import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <>
      <nav className="absolute top-0 right-0 left-0 z-10 lg:pt-[28px] lg:pb-[29px] py-0">
        <div className="lg:max-w-[1280px] max-w-[390px] flex flex-wrap items-center justify-between mx-auto lg:h-auto h-[68px]">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="h-[34px] w-[146px] relative">
              <img
                src="https://framerusercontent.com/images/38LQkq6faZvEhpoPZeVEnLFHYI.svg"
                className="w-full h-full object-center object-contain"
                alt="Flowbite Logo"
              />
            </div>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a className="lg:flex flex-row items-center justify-center hidden bg-[#fed545] py-2 pl-5 pr-2 gap-3 rounded-[80px] group hover:bg-white">
              <div>
                <p className="text-base font-semibold text-black leading-[1.7em] ">
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
            <ul className="flex flex-col font-medium gap-10 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="group relative flex flex-row items-center justify-center gap-[5px]">
                <Link
                  href="/"
                  className="block text-[14px] font-semibold hover:opacity-50 text-black"
                >
                  ALL PAGES
                </Link>
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
                    className="w-full h-full"
                    stroke="#000"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="group-hover:flex flex-row hidden items-center justify-center gap-20 bg-white z-50 border-2 w-[500px] h-auto rounded-[15px] p-6 absolute right-0 top-[20px] left-0">
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Link
                      href="/"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      HOMEPAGE
                    </Link>
                    <Link
                      href="/about"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      ABOUT
                    </Link>
                    <Link
                      href="/service"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      SERVICE
                    </Link>
                    <Link
                      href="/factory"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      SERVICE DETAILS
                    </Link>

                    <Link
                      href="/projects"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      PROJECTS
                    </Link>

                    <Link
                      href="/contemporary"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      PROJECTS DETAILS
                    </Link>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Link
                      href="/blog"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      BLOG
                    </Link>
                    <Link
                      href="/about"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      BLOG DETAILS
                    </Link>
                    <Link
                      href="/team"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      TEAM
                    </Link>
                    <Link
                      href="/testimonials"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      TESTIMONIALS
                    </Link>

                    <Link
                      href="/contact"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      contact
                    </Link>

                    <Link
                      href="/404"
                      className="block w-full h-full text-[14px] font-semibold text-black"
                    >
                      404
                    </Link>
                  </div>
                </div>
              </li>
              <li className="cursor-pointer hover:opacity-25">
                <Link
                  href="/blog"
                  className="block w-full h-full text-[14px] font-semibold text-black"
                >
                  BLOG
                </Link>
              </li>
              <li className="cursor-pointer hover:opacity-25">
                <Link
                  href="/services"
                  className="block w-full h-full text-[14px] font-semibold text-black"
                >
                  SERVICES
                </Link>
              </li>
              <li className="cursor-pointer hover:opacity-25">
                <Link
                  href="/contact"
                  className="block w-full h-full text-[14px] font-semibold text-black"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
