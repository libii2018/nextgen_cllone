import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/navbar";

export default function Contemporary() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center bg-white py-[110px] px-[30px] lg:pt-[130px] lg:px-[30px] lg:pb-[30px] w-full">
        <div className="flex flex-col items-center justify-center lg:max-w-[1280px] max-w-[390px] w-full gap-[40px]">
          <div className="flex flex-col items-center w-full justify-center">
            <div className="flex flex-col items-center justify-center w-full gap-5 pb-16">
              <h1 className="text-4xl lg:text-[80px] text-black text-center font-semibold leading-[1.2em]">
                Contemporary Urban Retreat
              </h1>
            </div>
            <div className="flex flex-col w-full h-[350px] lg:h-[644px]">
              <img
                src="https://framerusercontent.com/images/nYqFNAf0QLUQhr6IpPuA9Btwo.png"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-white py-[110px] px-[30px] lg:px-[30px] lg:pb-[60px] w-full">
        <div className="flex flex-col items-start justify-center lg:w-[59%] w-full">
          <h3 className="text-[32px] text-black font-semibold leading-[1.4em] mb-7">
            Project Overview:
          </h3>
          <p className="text-base text-[#333333] font-normal leading-[1.7em] mb-7">
            Brief description of the project, including its scope, key features,
            and objectives. Highlight any unique aspects of the project, such as
            design elements, sustainability features, or special challenges
            overcome.
          </p>
          <h3 className="text-[32px] text-black font-semibold leading-[1.4em] mb-7">
            Key Highlights:
          </h3>
          <ul>
            <li className="text-[#333333] font-normal leading-[1.7em] flex flex-row">
              <p>
                OPEN-PLAN LIVING: Maximizes space and light with a seamless flow
                between the living, dining, and kitchen areas.
              </p>
            </li>
            <li className="text-[#333333] font-normal leading-[1.7em]">
              <p>
                NATURAL ELEMENTS: Incorporates wood finishes, stone accents, and
                indoor plants to evoke a calming, organic feel.
              </p>
            </li>
            <li className="text-[#333333] font-normal leading-[1.7em]">
              <p>
                SMART STORAGE SOLUTIONS: Custom-built furniture and clever
                storage options keep the space uncluttered and efficient.
              </p>
            </li>
            <li className="text-[#333333] font-normal leading-[1.7em]">
              <p>
                MODERN AMENITIES: Equipped with the latest smart home technology
                for convenience and energy efficiency.
              </p>
            </li>
            <li className="text-[#333333] font-normal leading-[1.7em]">
              <p>
                COZY BEDROOM: Designed as a peaceful retreat with soft textures,
                ambient lighting, and a minimalist aesthetic
              </p>
            </li>
          </ul>
          <p>
            <br />
          </p>
          <img
            src="https://framerusercontent.com/images/jSqFAoAU3EHl1ZYmomUD1BjZck.png"
            alt=""
            className="aspect-[1920/1154] w-full h-auto mb-7"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-[60px] px-[20px] lg:py-[30px] lg:px-[30px] w-full">
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
                    src="https://framerusercontent.com/images/PNZ2cbdLLuWLwXqXqV4WmUrBTGI.png"
                    alt=""
                    className="block w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8 lg:gap-[40px] w-full my-auto">
            <div className="flex flex-col items-start justify-start w-full gap-[20px]">
              <h2 className="text-[35px] lg:text-[54px] text-black lg:text-left text-center font-semibold leading-[1.2em]">
                Common Questions
              </h2>
            </div>
            <div className="w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How do I get a quote for my construction project?
                  </AccordionTrigger>
                  <AccordionContent>
                    The timeline for a construction project varies depending on
                    its scope and complexity. Smaller projects might take a few
                    weeks, while larger projects could span several months. We
                    provide a detailed timeline during the initial consultation
                    and keep you updated throughout the process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What types of construction projects?
                  </AccordionTrigger>
                  <AccordionContent>
                    FitLife supports healthy lifestyles with fitness solutions
                    including personal training, group classes, nutritional
                    counseling, wellness programs, gym memberships, sports
                    equipment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Do you provide design services?
                  </AccordionTrigger>
                  <AccordionContent>
                    Looks like you're giving directions for setting up Qubit. If
                    you need support refining the process or want to focus on
                    particular points, feel free to reach out!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-none" value="item-4">
                  <AccordionTrigger>
                    Are you licensed and insured?
                  </AccordionTrigger>
                  <AccordionContent>
                    You're providing a guide on getting started with Qubit. If
                    you want to refine the instructions or emphasize any part of
                    the process, I'm here to help!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
