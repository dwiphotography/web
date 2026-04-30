import { useState, type ReactNode } from "react";
import { FAQItem } from "./FAQItem";

type FAQListProps = {
  items: {
    question: string | ReactNode;
    answer?: string | ReactNode;
  }[];
};

export function FAQList({ items }: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // default first open

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <FAQItem
          key={i}
          item={item}
          open={openIndex === i}
          onToggle={() => toggle(i)}
          disable={true}
        />
      ))}
    </div>
  );
}