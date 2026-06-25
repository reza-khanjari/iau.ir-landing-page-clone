import type { AccordionProps } from "@/shared/types/Accordion";
import { useState } from "react";
import AccordionItem from "./AccordionItem";



function Accordion({ items }: { items: AccordionProps[] }) {
  const [openID, setOpenID] = useState<string | null>(null);
  const handleToggle = (id: string) => {
    setOpenID((prev) => (prev == id ? null : id));
  };
  return (
    <div className="w-full">
      <ul className="flex w-full flex-col">
        {items.map((item, i) => (
          <AccordionItem
            isOpen={Boolean(openID == item.id)}
            onToggle={handleToggle}
            item={item}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

export default Accordion;
