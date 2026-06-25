import type { AccordionItemsProps } from "@/shared/types/Accordion";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Styles = {
  item: " border-primary-100  hover:bg-primary-900/60 border-b-2 last:border-none",
  subItem:
    "border-primary-100 bg-primary-900 hover:bg-primary-950/80 w-full cursor-pointer  border-b-2 px-8 py-3 text-white select-none last:border-none",
};

function AccordionItem({ item, isOpen, onToggle }: AccordionItemsProps) {
  const [height, setHeight] = useState<string | number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasSubmenu = Boolean(item.submenu && item.submenu.length > 0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight || 'auto');
    } else {
      setHeight(0);
    }
  },[setHeight,isOpen]);

  return (
    <div className={`${isOpen && "bg-primary-900/60"} ${Styles["item"]} `}>
      <button
        className="flex h-full w-full cursor-pointer items-center gap-x-2 px-8 py-3 text-white select-none"
        onClick={() => onToggle(item.id)}
      >
        {hasSubmenu ? (
          <div className="font-black">
            {isOpen ? <FaChevronDown /> : <FaChevronLeft />}
          </div>
        ) : (
          <span className="px-2"></span>
        )}
        <span>{item.title}</span>
      </button>

      {hasSubmenu && (
        <div
          className="overflow-hidden transition-[height] duration-300 ease-in-out"
          ref={contentRef}
          style={{ height }}
        >
          <ul className="max-h-60 overflow-auto">
            {item.submenu?.map((subItem, i) => (
              <li className={Styles["subItem"]} key={i}>
                <span>{subItem}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
