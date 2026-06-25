export interface AccordionProps {
  id:  string;
  title: string;
  submenu?: string[];
}

export interface AccordionItemsProps {
  item: AccordionProps;
  isOpen: boolean;
  onToggle: (id:string) => void;
}
