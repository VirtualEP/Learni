import React from "react";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="footer p-10 bg-gray-200 ">
      <div>
        <h1 className="text-lg cursor-pointer font-bold text-gray-600">
          Dev<span className="text-blue-600 ">Tray</span>
          <br className="text-sm" />
          Premium Online Education
        </h1>
      </div>
      <div>
        <span className="text-lg text-blue-600 font-bold">Get in touch</span>
        <div className="grid  md:grid-flow-row gap-4">
          <div className="flex items-center cursor-pointer">
            <HiOutlineMail size={20} className="mr-2" />
            <a className="hover:border-b hover:">support@devtray.net</a>
          </div>
          <div className="flex items-center cursor-pointer">
            <HiOutlineMail size={20} className="mr-2" />
            <a>developers@devtray.net</a>{" "}
          </div>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
