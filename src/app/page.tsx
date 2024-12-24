import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="absolute top-0 right-0 left-0 z-20 lg:pt-[28px] lg:pb-[29px] lg:px-[30px] py-0 px-[15px]">
        <div className="lg:max-w-[1280px] max-w-[390px] flex flex-wrap items-center justify-between mx-auto lg:h-auto h-[68px]">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="h-[35px] w-[146px] relative">
              <img
                src="https://framerusercontent.com/images/CrgDd86PeNlTtuEAf38jjjkDAU.svg"
                className="w-full h-full object-center object-contain"
                alt="Flowbite Logo"
              />
            </div>
          </Link>
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
                <Link
                  href="/"
                  className="block text-[14px] fontFamily-mono font-medium hover:opacity-50 text-white"
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
                    className="block w-full h-full"
                    stroke="#fff"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="group-hover:flex flex-row hidden items-center justify-center gap-20 bg-white z-50 border-2 w-[500px] h-auto rounded-[15px] p-6 absolute right-0 top-[20px] left-0">
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Link
                      href="/"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      HOMEPAGE
                    </Link>
                    <Link
                      href="/about"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      ABOUT
                    </Link>
                    <Link
                      href="/service"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      SERVICE
                    </Link>
                    <Link
                      href="/factory"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      SERVICE DETAILS
                    </Link>

                    <Link
                      href="/projects"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      PROJECTS
                    </Link>

                    <Link
                      href="/contemporary"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      PROJECTS DETAILS
                    </Link>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Link
                      href="/blog"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      BLOG
                    </Link>
                    <Link
                      href="/about"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      BLOG DETAILS
                    </Link>
                    <Link
                      href="/team"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      TEAM
                    </Link>
                    <Link
                      href="/testimonials"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      TESTIMONIALS
                    </Link>

                    <Link
                      href="/contact"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      contact
                    </Link>

                    <Link
                      href="/404"
                      className="block w-full h-full text-[14px] font-normal text-black"
                    >
                      404
                    </Link>
                  </div>
                </div>
              </li>
              <li className="cursor-pointer hover:opacity-50">
                <Link
                  href="/about"
                  className="block w-full h-full text-[14px] font-medium text-white"
                >
                  ABOUT
                </Link>
              </li>
              <li className="relative group flex flex-row items-center justify-center gap-[5px]">
                <Link
                  href="/services"
                  className="block w-full h-full text-[14px] font-medium text-white"
                >
                  SERVICES
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
                    stroke="#fff"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </li>
              <li className="cursor-pointer hover:opacity-50">
                <Link
                  href="/appointment"
                  className="block w-full h-full text-[14px] font-medium text-white"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="w-full flex flex-col items-center justify-center h-fit lg:pt-[240px] lg:pb-[220px] pt-[110px] pb-[90px] px-2 relative">
        <div className="lg:max-w-[1280px] max-w-[390px] flex flex-col items-start justify-start z-10 gap-8">
          <div className="flex flex-row items-start justify-start lg:w-[56%] gap-8">
            <div className="flex flex-col items-start justify-start w-full gap-6">
              <div className="w-full">
                <h1 className="lg:text-[78px] lg:text-left text-[37px] text-center font-semibold leading-[1.2em] text-white">
                  Crafting Vision with Precision, Building Dream Home.
                </h1>
              </div>
              <div className="w-full lg:w-[72%]">
                <p className="lg:text-[18px] lg:text-left text-center font-light leading-[1.7em] text-white">
                  With a legacy of excellence and a team of dedicated
                  professionals, we transform visions into reality, ensuring
                  every quality, innovation, and integrity.
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-start justify-start lg:w-fit w-full h-fit gap-4">
            <div className="flex mx-auto h-fit relative">
              <a className="flex flex-row items-center justify-center bg-[#fed545] py-2 pl-5 pr-2 gap-3 rounded-[80px] group hover:bg-white">
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
            </div>
            <div className="flex mx-auto h-fit relative">
              <a className="flex flex-row items-center hover:bg-[#fed545] hover:text-black justify-center bg-transparent border-[1.5px] border-white py-[14px] px-6 gap-3 rounded-[80px] group ">
                <div>
                  <p className="text-base font-normal text-white leading-[1.7em]  ">
                    EXPLORE SERVICES
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="https://framerusercontent.com/images/ga0EO2GKGVOVrQGArUyizAE9Vg.jpg"
            alt=""
            className="block w-full h-full object-center object-cover"
          />
        </div>
      </header>
      <section className="flex flex-col items-center justify-center py-[60px] px-[20px] lg:py-[63px] lg:px-[30px] w-full bg-[#f6f7f9]">
        <div className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-[32px] lg:gap-[73px] lg:w-[96%]">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-row items-start justify-center w-full gap-[33px]">
                <div className="flex flex-row flex-none items-center justify-center w-[50px] h-[50px] rounded-[100%] bg-[#fed545]">
                  <img
                    src="https://framerusercontent.com/images/5lqYumlJ3nVwLwPH2pGUJioQtU.svg"
                    alt=""
                    className="block w-[21px] h-[21px] object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px]">
                  <div className="w-full">
                    <p className="text-xl text-black font-semibold leading-[1.7em]">
                      Handled by Professionals
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-[#3b3b3b] font-normal leading-[1.7em]">
                      Our expert team closely with you to understand your vision
                      and mission are succeeded.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-row items-start justify-center w-full gap-[33px]">
                <div className="flex flex-row flex-none items-center justify-center w-[50px] h-[50px] rounded-[100%] bg-[#fed545]">
                  <img
                    src="https://framerusercontent.com/images/yjYNb0bOtiJX5bOPc5j8IQn6qs.svg"
                    alt=""
                    className="block w-[21px] h-[21px] object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px]">
                  <div className="w-full">
                    <p className="text-xl text-black font-semibold leading-[1.7em]">
                      Unlimited Meetings
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-[#3b3b3b] font-normal leading-[1.7em]">
                      Our design consultation and planning service is where your
                      dreams begin to take shape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-row items-start justify-center w-full gap-[33px]">
                <div className="flex flex-row flex-none items-center justify-center w-[50px] h-[50px] rounded-[100%] bg-[#fed545]">
                  <img
                    src="https://framerusercontent.com/images/FwEk1u4vDiVy5qnEKHd4bT4K0.svg"
                    alt=""
                    className="block w-[21px] h-[21px] object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px]">
                  <div className="w-full">
                    <p className="text-xl text-black font-semibold leading-[1.7em]">
                      24/7 Support Team{" "}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-[#3b3b3b] font-normal leading-[1.7em]">
                      Our expert team closely with you to understand your vision
                      and mission are succeeded.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                    src="https://framerusercontent.com/images/60g8rcWIfjhvjqEXPL3g06uyGoY.png"
                    alt=""
                    className="block w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8 lg:gap-[82px] my-auto">
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <div>
                <h2 className="text-[35px] lg:text-[54px] text-black lg:text-left text-center font-semibold leading-[1.2em]">
                  Finest Architectural Design Team With Great Passion.
                </h2>
              </div>
              <div>
                <p className="text-lg text-[#3b3b3b] lg:text-left text-center font-normal leading-[1.7em]">
                  We transform excellence in the construction industry in the
                  quality of our work and the satisfaction of our clients. We
                  transform in the construction industry with quality.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[40px]">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start items-center justify-center gap-6">
                <div className="flex flex-col items-center justify-center flex-1">
                  <div className="w-full">
                    <p className="text-[20px] text-black lg:text-left text-center font-semibold leading-[1.2em]">
                      Extraordinary Service
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-base text-[#3b3b3b] lg:text-left text-center font-normal leading-[1.7em]">
                      We transform excellence in the big construction industry
                      in the quality of our work.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                  <div className="w-full">
                    <p className="text-[20px] text-black lg:text-left text-center font-semibold leading-[1.2em]">
                      Expert Advices
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-base text-[#3b3b3b] lg:text-left text-center font-normal leading-[1.7em]">
                      Our commitment to quality defines our work in major
                      construction projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:items-start lg:justify-start w-full items-center justify-center">
                <a className="flex flex-row pt-[10px] pr-[8px] pb-[10px] pl-[20px] items-center border-[1.5px] border-black  hover:bg-[#fed545] hover:border-[#fed545] hover:text-black justify-center bg-transparent py-[14px] px-6 gap-3 rounded-[80px] group ">
                  <div>
                    <p className="text-base font-normal text-black leading-[1.7em]  ">
                      LEARN MORE
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-center w-10 h-10 overflow-hidden bg-[#fed545] relative rounded-[100%]">
                    <img
                      src="https://framerusercontent.com/images/ZZJqsMHSS02PhvKopuqC2CuRc.svg"
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
      </section>
      <section className="flex flex-col items-center justify-center bg-[#f6f7f9] py-[60px] px-[20px] w-full">
        <div className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px]">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full lg:w-[49%]">
              <p className="text-4xl lg:text-[54px] text-black text-center font-semibold leading-[1.2em]">
                We provide solutions that can make you happy
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row flex-1 items-center justify-center w-full gap-9">
            <div className="flex flex-col items-start justify-start p-8 bg-white w-full gap-6">
              <div className="flex flex-col items-start justify-start w-[76px] h-[76px] bg-[#fed545] rounded-[100%] p-5">
                <img
                  src="https://framerusercontent.com/images/oOtSr2lbJOMlJiacmzxkd18PVLw.svg"
                  alt=""
                  className="block w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-full pt-[8px] pb-[10px]">
                    <p className="text-[20px] text-black text-left font-semibold leading-[1.2em]">
                      Construction
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-base text-[#3b3b3b] text-left font-normal leading-[1.7em]">
                      We take a personalized approach, designing solutions that
                      are uniquely suited to your vision and aspirations. Every
                      detail is crafted to meet your needs.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full pt-6">
                  <a className="flex flex-row pt-[10px] pr-[8px] pb-[10px] pl-[20px] items-center border-[1.5px] border-black  hover:bg-[#fed545] hover:border-[#fed545] hover:text-black justify-center bg-transparent py-[14px] px-6 gap-3 rounded-[80px] group ">
                    <div>
                      <p className="text-base font-normal text-black leading-[1.7em]  ">
                        LEARN MORE
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-center w-10 h-10 overflow-hidden bg-[#fed545] relative rounded-[100%]">
                      <img
                        src="https://framerusercontent.com/images/ZZJqsMHSS02PhvKopuqC2CuRc.svg"
                        alt=""
                        sizes="24"
                        className="object-center object-cover"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start p-8 bg-white w-full gap-6">
              <div className="flex flex-col items-start justify-start w-[76px] h-[76px] bg-[#fed545] rounded-[100%] p-5">
                <img
                  src="https://framerusercontent.com/images/IXGf2NEruDuOdgpl3AvUjeUXk.svg"
                  alt=""
                  className="block w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-full pt-[8px] pb-[10px]">
                    <p className="text-[20px] text-black text-left font-semibold leading-[1.2em]">
                      Renovation{" "}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-base text-[#3b3b3b] text-left font-normal leading-[1.7em]">
                      Our expert team works closely with you, ensuring we fully
                      understand your vision. We believe that close
                      collaboration is key to capturing the essence of your.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full pt-6">
                  <a className="flex flex-row pt-[10px] pr-[8px] pb-[10px] pl-[20px] items-center border-[1.5px] border-black  hover:bg-[#fed545] hover:border-[#fed545] hover:text-black justify-center bg-transparent py-[14px] px-6 gap-3 rounded-[80px] group ">
                    <div>
                      <p className="text-base font-normal text-black leading-[1.7em]  ">
                        LEARN MORE
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-center w-10 h-10 overflow-hidden bg-[#fed545] relative rounded-[100%]">
                      <img
                        src="https://framerusercontent.com/images/ZZJqsMHSS02PhvKopuqC2CuRc.svg"
                        alt=""
                        sizes="24"
                        className="object-center object-cover"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start p-8 bg-white w-full gap-6">
              <div className="flex flex-col items-start justify-start w-[76px] h-[76px] bg-[#fed545] rounded-[100%] p-5">
                <img
                  src="https://framerusercontent.com/images/XblvVYduf7XiizLuQQY6VUgnR8.svg"
                  alt=""
                  className="block w-full h-full object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-full pt-[8px] pb-[10px]">
                    <p className="text-[20px] text-black text-left font-semibold leading-[1.2em]">
                      Consultation{" "}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-base text-[#3b3b3b] text-left font-normal leading-[1.7em]">
                      By collaborating with you every step of the way, we make
                      sure your vision is fully realized. Our goal is to succeed
                      together, delivering results that exceed.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full pt-6">
                  <a className="flex flex-row pt-[10px] pr-[8px] pb-[10px] pl-[20px] items-center border-[1.5px] border-black  hover:bg-[#fed545] hover:border-[#fed545] hover:text-black justify-center bg-transparent py-[14px] px-6 gap-3 rounded-[80px] group ">
                    <div>
                      <p className="text-base font-normal text-black leading-[1.7em]  ">
                        LEARN MORE
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-center w-10 h-10 overflow-hidden bg-[#fed545] relative rounded-[100%]">
                      <img
                        src="https://framerusercontent.com/images/ZZJqsMHSS02PhvKopuqC2CuRc.svg"
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
      <section className="flex flex-col items-center justify-center py-[60px] px-[20px] lg:py-[130px] lg:px-[30px] w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px] lg:gap-[178px]">
          <div className="flex flex-1 flex-col items-center justify-center gap-8 lg:gap-[82px] my-auto">
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <div>
                <h2 className="text-[35px] lg:text-[54px] text-black lg:text-left text-center font-semibold leading-[1.2em]">
                  Elevating Standard in Construction Excellence.
                </h2>
              </div>
              <div>
                <p className="text-base text-[#3b3b3b] lg:text-left text-center font-normal leading-[1.7em]">
                  With a legacy of excellence and a team of dedicated
                  professionals, we transform visions into reality, ensuring
                  every quality, innovation, and team professionals, we
                  transform excellence in the construction industry.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start lg:justify-start w-full items-center justify-center">
              <a className="flex flex-row pt-[10px] pr-[8px] pb-[10px] pl-[20px] items-center border-[1.5px] border-black  hover:bg-[#fed545] hover:border-[#fed545] hover:text-black justify-center bg-transparent py-[14px] px-6 gap-3 rounded-[80px] group ">
                <div>
                  <p className="text-base font-normal text-black leading-[1.7em]">
                    LEARN MORE
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center w-10 h-10 overflow-hidden bg-[#fed545] relative rounded-[100%]">
                  <img
                    src="https://framerusercontent.com/images/ZZJqsMHSS02PhvKopuqC2CuRc.svg"
                    alt=""
                    sizes="24"
                    className="object-center object-cover"
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full lg:w-[47%] lg:h-[657px]">
            <div className="flex flex-col items-center justify-center w-full h-[380px] lg:h-full">
              <div
                className="flex flex-1 h-full w-full relative"
                style={{
                  maskImage:
                    "url('https://framerusercontent.com/images/7bARsNiFkRZ6MZDmOuSJ9LEIjM.png')",
                  WebkitMaskImage:
                    "url('https://framerusercontent.com/images/7bARsNiFkRZ6MZDmOuSJ9LEIjM.png')",
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
                    src="https://framerusercontent.com/images/svABaQl9ar4wxD4BId0qrXYsHDY.png"
                    alt=""
                    className="block w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center p-5 absolute gap-4 h-[256px] w-[40%] left-4 bottom-0 bg-[#fed545]">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-row items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-start font-semibold lg:text-[54px] text-4xl text-black leading-[1.2em]">
                        12
                      </div>

                      <div className="flex flex-row items-start justify-start flex-1">
                        <h2 className="font-semibold lg:text-[54px] text-4xl text-black leading-[1.2em]">
                          K+
                        </h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                      <p className="font-normal text-base text-black leading-[1.7em]">
                        Completed Projects
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-row items-center justify-center w-full">
                      <div className="flex flex-row items-start justify-start font-semibold lg:text-[54px] text-4xl text-black leading-[1.2em]">
                        17
                      </div>

                      <div className="flex flex-row items-start justify-start flex-1">
                        <h2 className="font-semibold lg:text-[54px] text-4xl text-black leading-[1.2em]">
                          +
                        </h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <p className="font-normal text-base text-black leading-[1.7em]">
                        Years Of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-[60px] px-[20px] lg:pt-[510px] lg:px-[30px] lg:pb-[120] relative w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-ceitems-center items-center justify-center lg:max-w-[1600px] max-w-[390px] w-full gap-[40px] lg:gap-[84px]">
          <div className="absolute inset-0">
            <img
              src="https://framerusercontent.com/images/o5ZOrnK8nIYyBEWMMRcZLyO2w.png"
              alt=""
              className="block w-full h-full object-center object-cover"
            />
          </div>
          <div className="h-[95%] w-full flex flex-col bottom-0 left-0 absolute items-center justify-center lg:h-full opacity-90 bg-gradient-to-b from-transparent via-black/17 to-black"></div>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:gap-[33px] gap-8 z-10 lg:w-[75%]">
            <div className="flex flex-col items-start justify-start w-full lg:gap-9 gap-[16px]">
              <div className="flex flex-row items-center justify-between w-full gap-[34px]">
                <div className="flex flex-col items-center justify-center w-fit">
                  <h2 className="text-4xl text-[54px] font-semibold text-white leading-[1.2em]">
                    01
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-1 overflow-hidden bg-white"></div>
              </div>
              <div className="flex flex-col items-start justify-start lg:w-[73%] gap-5">
                <div className="w-full pt-[8px] pb-[10px]">
                  <p className="text-[20px] text-white text-left font-semibold leading-[1.2em]">
                    Book A Meeting
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-base text-white text-left font-normal leading-[1.7em]">
                    Eget faucibus tortor odio dignissim hendrerit velit felis.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start w-full lg:gap-9 gap-[16px]">
              <div className="flex flex-row items-center justify-between w-full gap-[34px]">
                <div className="flex flex-col items-center justify-center w-fit">
                  <h2 className="text-4xl text-[54px] font-semibold text-white leading-[1.2em]">
                    02
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-1 overflow-hidden bg-white"></div>
              </div>
              <div className="flex flex-col items-start justify-start lg:w-[73%] gap-5">
                <div className="w-full pt-[8px] pb-[10px]">
                  <p className="text-[20px] text-white text-left font-semibold leading-[1.2em]">
                    Start Project
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-base text-white text-left font-normal leading-[1.7em]">
                    Phasellus viverra libero sit amet dui aliquam, a sagittis
                    nisi vestibulum.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start w-full lg:gap-9 gap-[16px]">
              <div className="flex flex-row items-center justify-between w-full gap-[34px]">
                <div className="flex flex-col items-center justify-center w-fit">
                  <h2 className="text-4xl text-[54px] font-semibold text-white leading-[1.2em]">
                    03
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-[14px] overflow-hidden relative">
                  <div className="absolute inset-0">
                    <img
                      src="https://framerusercontent.com/images/Vfxw0fJrC1OgrHuee1Iv5xwIwtg.png"
                      alt=""
                      className="block w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start lg:w-[73%] gap-5">
                <div className="w-full pt-[8px] pb-[10px]">
                  <p className="text-[20px] text-white text-left font-semibold leading-[1.2em]">
                    Get Done on Time
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-base text-white text-left font-normal leading-[1.7em]">
                    Integer blandit tortor ut quam at tempor sapien efficitur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-[60px] px-[20px] lg:py-[130px] lg:px-[30px] w-full">
        <div className="flex flex-col lg:px-14 lg:flex-row lg:items-center lg:justify-center items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px] lg:gap-[184px]">
          <div className="flex flex-col items-center justify-center w-full relative lg:w-[41%] lg:h-[520px]">
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
                    src="https://framerusercontent.com/images/yEVE68gEgU7zf7S9W2SEpvQ3g.png"
                    alt=""
                    className="block w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute  flex flex-col items-center justify-center z-10 overflow-visible w-[288px] lg:h-[232px] gap-[10px] bottom-5 right-[10px] lg:right-[-80px] lg:top-[240px] overflow-hidden">
              <div
                className="flex flex-row items-start justify-start lg:p-5 p-3 gap-4 bg-white w-full"
                style={{ boxShadow: "40px 28px 80px #00000014" }}
              >
                <div className="flex flex-row items-center justify-center w-6 h-6 lg:w-[31px] lg:h-[31px]">
                  <img
                    src="https://framerusercontent.com/images/sNvTAGzeakzRt8wjjo66UoU5tTE.svg"
                    alt=""
                    className="w-6 h-6 object-center object-cover"
                  />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <p className="text-base text-black font-medium leading-[1.7em]">
                    24/7 Emergency Service
                  </p>
                </div>
              </div>

              <div
                className="flex flex-row items-start justify-start lg:p-5 p-3 gap-4 bg-white w-full"
                style={{ boxShadow: "40px 28px 80px #00000014" }}
              >
                <div className="flex flex-row items-center justify-center w-6 h-6 lg:w-[31px] lg:h-[31px]">
                  <img
                    src="https://framerusercontent.com/images/KoxlnPJ5Wo3hqI6wIHaytnlMeYw.svg"
                    alt=""
                    className="w-6 h-6 object-center object-cover"
                  />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <p className="text-base text-black font-medium leading-[1.7em]">
                    Experienced Technicians{" "}
                  </p>
                </div>
              </div>

              <div
                className="flex flex-row items-start justify-start lg:p-5 p-3 gap-4 bg-white w-full"
                style={{ boxShadow: "40px 28px 80px #00000014" }}
              >
                <div className="flex flex-row items-center justify-center w-6 h-6 lg:w-[31px] lg:h-[31px]">
                  <img
                    src="https://framerusercontent.com/images/E7XmHADUNRdajJgMNt5rSzCFEc.svg"
                    alt=""
                    className="w-6 h-6 object-center object-cover"
                  />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <p className="text-base text-black font-medium leading-[1.7em]">
                    Satisfaction Guarantee{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8 lg:gap-[82px] my-auto lg:w-[35%]">
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <div>
                <h2 className="text-[35px] lg:text-[54px] text-black lg:text-left text-center font-semibold leading-[1.2em]">
                  Dive Into Our Signature Work.{" "}
                </h2>
              </div>
              <div>
                <p className="text-lg text-[#3b3b3b] lg:text-left text-center font-normal leading-[1.7em]">
                  Explore the core mission and vision that drives us every day.
                  At Behind the Stories Company, we're not just about cleaning
                  homes.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-start lg:justify-start w-full items-center justify-center">
              <a className="flex flex-row pt-[10px] pr-[8px] pb-[10px] pl-[20px] items-center border-[1.5px] border-black  hover:bg-[#fed545] hover:border-[#fed545] hover:text-black justify-center bg-transparent py-[14px] px-6 gap-3 rounded-[80px] group ">
                <div>
                  <p className="text-base font-normal text-black leading-[1.7em]  ">
                    LEARN MORE
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center w-10 h-10 overflow-hidden bg-[#fed545] relative rounded-[100%]">
                  <img
                    src="https://framerusercontent.com/images/ZZJqsMHSS02PhvKopuqC2CuRc.svg"
                    alt=""
                    sizes="24"
                    className="object-center object-cover"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-[#f6f7f9] py-[60px] px-[20px] w-full">
        <div className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-full lg:w-full">
              <p className="text-[54px] text-black text-center font-semibold leading-[1.2em]">
                Trusted by 10,000+ customers
              </p>
            </div>
            <div className="w-full lg:w-[64%]">
              <p className="text-base text-[#3b3b3b] text-center font-normal leading-[1.7em]">
                Explore the core mission and vision that drives us every day. At
                Behind the Stories Company, we're not just about cleaning homes.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row flex-1 items-center justify-center w-full gap-9 lg:gap-6">
            <div className="flex flex-col items-start justify-start p-8 bg-white max-sm:w-full gap-6">
              <div className="flex flex-col items-center justify-center overflow-hidden w-full gap-7 relative">
                <div className="flex flex-col items-center justify-center gap-7 w-full overflow-hidden">
                  <div className="flex flex-col items-center lg:justify-start lg:items-start justify-center gap-4 w-full">
                    <div className="flex flex-row items-start justify-start gap-4 w-full">
                      <div className="flex flex-col items-center justify-center rounded-[100%] w-[68px] h-[68px]">
                        <img
                          src="https://framerusercontent.com/images/2btXKW62WQqUn6s6QfDg9uA23o.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-between">
                        <div className="flex flex-col">
                          <p className="text-2xl text-black font-semibold leading-[1.4em]">
                            Andy Smith
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-base text-black font-normal leading-[1.7em]">
                            New York
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[92%]">
                      <p className="text-lg text-[#3b3b3b] font-normal leading-[1.7em]">
                        “Working with nextgen was an absolute pleasure. From the
                        initial consultation to the final their team was
                        professional, attentive, and committed to bringing our
                        vision to life. The attention to detail exceeded our
                        expectations."
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center justify-start gap-[6px] w-full">
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="https://framerusercontent.com/images/YD6ow7NExOPCgajltfTSINXsI0.svg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="https://framerusercontent.com/images/YD6ow7NExOPCgajltfTSINXsI0.svg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="https://framerusercontent.com/images/YD6ow7NExOPCgajltfTSINXsI0.svg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="https://framerusercontent.com/images/YD6ow7NExOPCgajltfTSINXsI0.svg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="https://framerusercontent.com/images/YD6ow7NExOPCgajltfTSINXsI0.svg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[27px] h-[27px]">
                      <img
                        src="https://framerusercontent.com/images/aC15mbl4kJ9qopfLokwGH7GI21w.svg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start p-8 bg-white max-sm:w-full gap-6">
              <div className="flex flex-col items-center justify-center overflow-hidden w-full gap-7 relative">
                <div className="flex flex-col items-center justify-center gap-7 w-full overflow-hidden">
                  <div className="flex flex-col items-center lg:justify-start lg:items-start justify-center gap-4 w-full">
                    <div className="flex flex-row items-start justify-start gap-4 w-full">
                      <div className="flex flex-col items-center justify-center rounded-[100%] w-[68px] h-[68px]">
                        <img
                          src="https://framerusercontent.com/images/f0CQMkKXKahNv5rmn5S8ueP39HQ.svg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-between">
                        <div className="flex flex-col">
                          <p className="text-2xl text-black font-semibold leading-[1.4em]">
                            Andy Smith
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-base text-black font-normal leading-[1.7em]">
                            New York
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[92%]">
                      <p className="text-lg text-[#3b3b3b] font-normal leading-[1.7em]">
                        "Our experience with NextGen was exceptional. Their team
                        displayed the utmost professionalism and dedication,
                        ensuring that every detail of our vision was realized
                        beyond our expectations. Their attentiveness and
                        meticulous ."
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center justify-start gap-[6px] w-full">
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="https://framerusercontent.com/images/YD6ow7NExOPCgajltfTSINXsI0.svg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="https://framerusercontent.com/images/YD6ow7NExOPCgajltfTSINXsI0.svg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="https://framerusercontent.com/images/YD6ow7NExOPCgajltfTSINXsI0.svg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="https://framerusercontent.com/images/YD6ow7NExOPCgajltfTSINXsI0.svg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="https://framerusercontent.com/images/YD6ow7NExOPCgajltfTSINXsI0.svg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[27px] h-[27px]">
                      <img
                        src="https://framerusercontent.com/images/aC15mbl4kJ9qopfLokwGH7GI21w.svg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-white py-[60px] px-[20px] w-full">
        <div className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-full lg:w-full">
              <p className="text-4xl lg:text-[54px] text-black text-center font-normal leading-[1.2em]">
                Latest News & Insights
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row flex-1 items-center justify-center w-full gap-9 lg:gap-6">
            <a
              href=""
              className="flex flex-col items-center justify-center lg:h-[432px] h-[348px] aspect-[.9490740740740741/1] lg:w-[32%] w-full relative"
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
              className="flex flex-col items-center justify-center lg:h-[432px] h-[348px] aspect-[.9490740740740741/1] lg:w-[32%] w-full relative"
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
              className="flex flex-col items-center justify-center lg:h-[432px] h-[348px] aspect-[.9490740740740741/1] lg:w-[32%] w-full relative"
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
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-white py-[60px] px-[20px] w-full">
        <div className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px]">
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
                      <p className="text-base font-medium text-black leading-[1.7em]  ">
                        GET A FREE QUOTE
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
        <div className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px]">
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
                  className="text-base text-black font-normal leading-[1.7em] hover:opacity-60"
                >
                  Home
                </a>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href="#"
                  className="text-base text-black font-normal leading-[1.7em] hover:opacity-60"
                >
                  PROJECTS
                </a>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href="#"
                  className="text-base text-black font-normal leading-[1.7em] hover:opacity-60"
                >
                  ABOUT US
                </a>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href="#"
                  className="text-base text-black font-normal leading-[1.7em] hover:opacity-60"
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
              <p className="text-base text-black text-left font-light leading-[1.7em]">
                2024 © FramerBite All Rights Reserved.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center w-fit whitespace-nowrap gap-[58px]">
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href="#"
                  className="text-base text-black font-normal leading-[1.7em] hover:opacity-60"
                >
                  Terms of serviice
                </a>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <a
                  href="#"
                  className="text-base text-black font-normal leading-[1.7em] hover:opacity-60"
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
