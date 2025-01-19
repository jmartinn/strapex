"use client";

import { useState, useEffect } from "react";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div className="rounded-lg bg-gradient-to-tr from-white/70 to-white/50 py-1 shadow shadow-black/5 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40">
      <h2>
        <button
          className="flex w-full items-center justify-between px-4 py-2 text-left font-medium text-gray-800 dark:text-gray-200"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`faqs-text-${id}`}
        >
          <span>{title}</span>
          <span className="ml-2 flex size-5 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-gray-600">
            <svg
              className="fill-gray-500 dark:fill-gray-400"
              width="10"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity=".72"
                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                className={`origin-center transition duration-200 ease-out${accordionOpen && "!rotate-180"}`}
              />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={`faqs-text-${id}`}
        role="region"
        aria-labelledby={`faqs-title-${id}`}
        className={`grid overflow-hidden text-sm text-gray-600 transition-all duration-300 ease-in-out dark:text-gray-500 ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-2">{children}</p>
        </div>
      </div>
    </div>
  );
}
