import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import useClickOutside from "@/hooks/useClickOutside";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";

const langBox =
  "text-primary-700 flex size-6 text-sm md:size-8 md:text-base cursor-pointer items-center justify-center rounded-sm bg-white pt-0.75";
const sideMenuLi =
  "bg-primary-50 hover:bg-primary-800 glow-primary-50 hover:glow-primary-800 hover:glow-opacity-40 text-black hover:text-white  glow-opacity-10  w-full cursor-pointer rounded-l-2xl px-6 py-3 transition-colors";
function Header() {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const handleOpenNav = () => {
    setIsOpenNav(true);
  };
  const handleCloseNav = () => {
    setIsOpenNav(false);
  };
  const handleOpenSearch = () => {
    setIsOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setIsOpenSearch(false);
  };
  const navRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  useClickOutside(navRef, handleCloseNav);
  useClickOutside(searchRef, handleCloseSearch);

  useEffect(() => {
    if (isOpenNav || isOpenSearch) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpenNav, isOpenSearch]);
  return (
    <header className=" ">
      <div className="bg-primary-900/90 fixed top-0 right-0 z-30 flex h-20 w-full items-center justify-between px-4 py-2 backdrop-blur-lg md:px-8">
        <div className="flex items-center gap-x-8 px-4 text-white">
          <FaBars
            className={`size-6 cursor-pointer sm:size-8`}
            onClick={handleOpenNav}
          />
          <IoCalendar className="size-6 cursor-pointer sm:size-8" />
        </div>
        <div className="w-full max-w-24 bg-cover sm:max-w-36">
          <img className="h-full w-full" src="/images/Logo.webp" alt="logo" />
        </div>

        <div className="flex items-center gap-x-4">
          <FaSearch
            onClick={handleOpenSearch}
            className="size-5 cursor-pointer text-white sm:size-6"
          />

          <div className={langBox}>AR</div>

          <div className={langBox}>EN</div>
        </div>
      </div>

      <Search
        close={handleCloseSearch}
        isOpen={isOpenSearch}
        forwardRef={searchRef}
      />
      <Navbar isOpen={isOpenNav} forwardRef={navRef} />
      {/* Overlay */}
      <div
        className={`${isOpenNav || isOpenSearch ? "flex" : "hidden"} bg-primary-900/80 fixed inset-0 z-40 h-full w-full backdrop-blur-sm`}
      ></div>
      <div className="absolute top-40 right-0 z-20 hidden flex-col text-sm  lg:flex">
        <ul className="flex w-full flex-col gap-y-3">
          <li className={sideMenuLi}>شبکه دانشگاه آزاد اسلامی</li>
          <li className={sideMenuLi}>
            پژوهش دانشگاه
          </li>
          <li className={sideMenuLi}>
            میز خدمت
          </li>
          <li className={sideMenuLi}>
            دانشگاه مجازی
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
