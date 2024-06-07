import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4 flex  flex-wrap justify-start  gap-5 md:gap-40 items-center">
        <div className="flex items-start gap-2 flex-col">
          <div className="flex items-center gap-1">
            <Image width={20} height={20} src="Frame.svg" alt="Image" />
            <div className="flex items-center">
              {" "}
              <span className="font-bold  text-3xl">uifry</span>
              <span className="text-[8px]">TM</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1">
              {" "}
              <Image width={20} height={20} src="msg.svg" alt="Image" />
              <a
                href="mailto:Help@Frybix.com"
                className="text-black font-semibold"
              >
                Help@Frybix.Com
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1">
              {" "}
              <Image width={20} height={20} src="call.svg" alt="Image" />
              <a href="tel:+123445667889" className="text-black font-semibold">
                +1234 456 678 89
              </a>
            </div>
          </div>{" "}
        </div>
        <div className="flex md:flex-row flex-col  gap-14">
          <div>
            <h6 className="font-bold text-3xl mb-2">Links</h6>
            <ul className="flex flex-col gap-3 font-semibold">
              <li>
                <a href="#" className="text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Bookings
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className=" font-bold text-3xl mb-2">Legal</h6>
            <ul className="flex flex-col gap-3 font-semibold">
              <li>
                <a href="#" className="text-black">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-3xl mb-2">Product</h6>
            <ul className="flex flex-col gap-3 font-semibold">
              <li>
                <a href="#" className="text-black">
                  Take Tour
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="text-black">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col gap-3">
            <h6 className="font-bold text-3xl">Newsletter</h6>
            <a href="#" className="text-black font-semibold">
              Stay up to date
            </a>
            <form action="#" className="flex ">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border w-32 rounded-l-md"
              />
              <button
                type="submit"
                className="bg-black hover:bg-slate-800 transition-all text-white px-8 py-3 rounded-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-500 my-8"></div>
      <div className="container mx-auto px-4 mt-8 text-center">
        <p className="text-black font-semibold">
          Copyright 2024 Montassar Hajri All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
