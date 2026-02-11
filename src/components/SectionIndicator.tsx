import { useMemo } from "react";
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
  return (
    <nav className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col items-end gap-6">
        {sections.map((section: SectionItem) => {
          const isActive = activeId === section.id;

          return (
            <li key={section.id} className="group flex items-center gap-3">
              {/* Label */}
              <span
                onClick={() => {
                  const el = document.getElementById(section.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "opacity-100 text-deep-blue font-bold text-sm"
                    : "opacity-100  group-hover:opacity-100 text-gray-400 text-xs"
                }`}
              >
                {section.label}
              </span>

              {/* Dot */}
              <a
                href={`#${section.id}`}
                className="relative flex items-center justify-center cursor-pointer"
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-deep-blue scale-125"
                      : "bg-gray-300 group-hover:bg-gray-400"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
