import useRecentSearch from "@/hooks/useRecentSearch";
import React, { useState, type RefObject } from "react";
import { FaTrash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

type Props<T extends HTMLElement = HTMLElement> = {
  forwardRef: RefObject<T | null> | RefObject<T | null>;
  isOpen: boolean;
  close: () => void;
};

const liStyle =
  "border-primary-700 text-sm md:text-base max-w-126 glow-inner-primary-600 mx-auto flex items-center justify-between glow-inner-opacity-30 backdrop-blur-lg hover:glow-inner-opacity-60 w-full cursor-pointer rounded-2xl border-2 px-4 py-2 transition-all duration-200 ";

function Search({ forwardRef, isOpen, close }: Props<HTMLDivElement>) {
  const [inputValue, setInputValue] = useState<string>("");
  const { searchHistory, addQuery, clearAll, removeQuery } = useRecentSearch();

  const handleQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addQuery(inputValue);
      setInputValue("");
    }
  };

  return (
    <div
      ref={forwardRef}
      className={`${isOpen ? "block" : "hidden"} fixed-center  glow-primary-700 glow-opacity-20 bg-primary-950/50 z-50 mx-auto w-full max-w-9/10 flex-col rounded-3xl px-8 py-8 text-white backdrop-blur-xl md:max-w-200 `}
    >
      <div
        onClick={close}
        className="absolute top-5 right-5 cursor-pointer text-3xl text-[#aaa] transition-all hover:text-rose-600/50"
      >
        <FaXmark className="hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]" />
      </div>
      <form
        onSubmit={handleQuery}
        className="flex-center scale h-full w-full flex-col"
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="جست و جو..."
          className="focus:glow-primary-500  my-8 glow-primary-400 glow-opacity-50 w-full max-w-130 rounded-2xl border-0 px-6 py-2 text-white outline-0 transition-all duration-300"
          type="text"
        />

        <div className="glow-primary-50 glow-opacity-20  min-h-90 w-full max-w-160 rounded-2xl px-4 py-4 md:py-4">
          <h4 className="border-primary-100 font-vazir-bold mx-auto w-full max-w-8/10 border-b-2 pb-3 text-center text-lg">
            جست و جو های اخیر
          </h4>
          <ul className="mx-auto mt-4 flex w-full max-w-7/10 flex-col gap-y-4">
            {searchHistory && searchHistory.length > 0 ? (
              searchHistory.map((item, i) => (
                <li key={i} className={liStyle}>
                  <span className="w-full text-center" >
                  {item}

                  </span>
                  <FaTrash onClick={(e) => {
                    e.stopPropagation()
                    removeQuery(item)}} />
                </li>
              ))
            ) : (
              <span className="text-center text-lg">
              
                تاریخچه جست و جو ‌ وجود ندارد
              </span>
            )}
          </ul>
        </div>

        <button
          type="button"
          onClick={clearAll}
          className="glow-inner-red-600 hover:glow-inner-opacity-60 hover:glow-inner-red-500 glow-inner-opacity-30 mt-8 cursor-pointer rounded-2xl border-2 border-red-600 px-8 py-3 text-sm backdrop-blur-lg transition-all duration-200 hover:border-red-600"
        >
          حذف تاریخچه جستجو
        </button>
      </form>
    </div>
  );
}

export default Search;
