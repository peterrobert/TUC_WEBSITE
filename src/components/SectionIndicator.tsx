import { useMemo, useState } from "react";
import type { JSX } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

export interface SectionItem {
  id: string;
  label: string;
}

interface SectionIndicatorProps {
  sections: SectionItem[];
}

export default function SectionIndicator({
  sections,
}: SectionIndicatorProps): JSX.Element {
  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);
  const activeId = useScrollSpy(sectionIds);
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* ---------- Desktop Indicator ---------- */}
      <nav className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <ul className="flex flex-col items-end gap-6">
          {sections.map((section) => {
            const isActive = activeId === section.id;

            return (
              <li key={section.id} className="group flex items-center gap-3">
                <span
                  onClick={() => scrollTo(section.id)}
                  className={`cursor-pointer transition-all ${
                    isActive
                      ? "text-deep-blue font-bold text-sm"
                      : "text-gray-400 text-xs group-hover:text-gray-600"
                  }`}
                >
                  {section.label}
                </span>

                <a href={`#${section.id}`}>
                  <span
                    className={`w-2.5 h-2.5 rounded-full block transition-all ${
                      isActive ? "bg-deep-blue scale-125" : "bg-gray-300"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ---------- Mobile Toggle Button ---------- */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-deep-blue text-white px-4 py-3 rounded-full shadow-lg"
      >
        ↑
      </button>

      {/* ---------- Slide Panel ---------- */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <nav
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul className="p-6 flex flex-col gap-4">
          {sections.map((section) => {
            const isActive = activeId === section.id;

            return (
              <li
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`cursor-pointer text-base ${
                  isActive ? "font-semibold text-deep-blue" : "text-gray-600"
                }`}
              >
                {section.label}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
