import React from "react";

function Footer() {
  return (
    <div className="relative w-full h-48 border-4 top-4 flex">
      <div className="relative w-[50%] h-full flex flex-col">
        <div className="relative text-gray-500 flex justify-center top-5 h-full text-3xl font-bold">
          My <span className="text-red-400">Logo</span>
        </div>
        <div className="relative flex justify-center bottom-5">
          &copy; 2024 pankajkori @allrights reserved
        </div>
      </div>
      <div className="relative w-[50%] h-full">
        <div>
          <div className="relative h-36 flex justify-center top-5">
            <div className="relative flex gap-16">
              <ul>
                <li className="font-bold uppercase">Resources</li>
                <li className="relative top-4">Home</li>
                <li className="relative top-6">About</li>
              </ul>
              <ul>
                <li className="font-bold uppercase">Follow US</li>
                <li className="relative top-4">Github</li>
                <li className="relative top-6">Discord</li>
              </ul>
              <ul>
                <li className="font-bold uppercase">Legal</li>
                <li className="relative top-4">Privacy Policy</li>
                <li className="relative top-6">Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative h-[24px] top-[5px]">
          <ul className="relative flex justify-center gap-8">
            <li>
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li>
              <i className="fa-brands fa-discord"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
