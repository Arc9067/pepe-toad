import React from "react";

const Header = () => {
  return (
    <header className="py-3 w-full bg-[#64AF5C] absolute">
      <nav className="container flex items-center gap-14 justify-between lg:justify-start">
        <a href="" className="font-special text-3xl ">
          Pepe and Toad
        </a>

        <ul className="mx-auto hidden lg:flex items-center gap-14 font-special">
          <li className="text-xl capitalize hover:text-black">
            <a href="">home</a>
          </li>
          <li className="text-xl capitalize hover:text-black">
            <a href="">about</a>
          </li>
          <li className="text-xl capitalize hover:text-black">
            <a href="">tokenomics</a>
          </li>
          <li className="text-xl capitalize hover:text-black">
            <a href="">roadmap</a>
          </li>
        </ul>

        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition hover:scale-95 cursor-pointer block lg:hidden"
        >
          <rect
            x="0.5"
            y="0.5"
            width="39"
            height="39"
            rx="19.5"
            fill="#FC8E3B"
            stroke="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.3359 15C13.3359 14.5397 13.709 14.1666 14.1693 14.1666H25.8359C26.2962 14.1666 26.6693 14.5397 26.6693 15C26.6693 15.4602 26.2962 15.8333 25.8359 15.8333H14.1693C13.709 15.8333 13.3359 15.4602 13.3359 15ZM13.3361 20C13.3361 19.5397 13.7092 19.1666 14.1694 19.1666H25.8361C26.2963 19.1666 26.6694 19.5397 26.6694 20C26.6694 20.4602 26.2963 20.8333 25.8361 20.8333H14.1694C13.7092 20.8333 13.3361 20.4602 13.3361 20ZM14.1694 24.1666C13.7092 24.1666 13.3361 24.5397 13.3361 25C13.3361 25.4602 13.7092 25.8333 14.1694 25.8333H25.8361C26.2963 25.8333 26.6694 25.4602 26.6694 25C26.6694 24.5397 26.2963 24.1666 25.8361 24.1666H14.1694Z"
            fill="white"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Header;
