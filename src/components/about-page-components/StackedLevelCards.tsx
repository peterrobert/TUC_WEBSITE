import React, { useState } from "react";

type CardData = {
  id: number;
  title: string;
  icon: string;
  description: string;
};

const cards: CardData[] = [
  {
    id: 1,
    title: "No Shortcuts",
    icon: "fa-shield-halved",
    description:
      "We don't compromise principles for speed. If a feature would undermine integrity, we don't build it—regardless of market pressure or competitive dynamics.",
  },
  {
    id: 2,
    title: "Radical Transparency",
    icon: "fa-eye",
    description:
      "Decisions, reasoning, and changes are documented publicly. If we can't explain why we did something, we probably shouldn't have done it.",
  },
  {
    id: 3,
    title: "Fair Attribution",
    icon: "fa-handshake",
    description:
      "Credit flows to those who create value. The system tracks contributions and ensures recognition isn't controlled by gatekeepers.",
  },
  {
    id: 4,
    title: "Patient Building",
    icon: "fa-clock",
    description:
      "We build at the pace our capacity allows. No artificial urgency, no pressure to scale before we're ready, no compromising quality for speed.",
  },
];

const StackedLevelCards: React.FC = () => {
  const [active, setActive] = useState<number>(1);

  const toggle = (id: number) => {
    setActive((prev) => (prev === id ? 0 : id));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {cards.map((card) => {
        const isOpen = active === card.id;

        return (
          <div
            key={card.id}
            className={`
              bg-pale-blue border border-cool-gray rounded-xl overflow-hidden
              transition-all duration-300
              ${isOpen ? "shadow-lg scale-[1.01]" : "shadow-sm"}
            `}
          >
            {/* Header */}
            <button
              onClick={() => toggle(card.id)}
              className="w-full flex items-center gap-4 p-4 sm:p-6 text-left focus:outline-none"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center shrink-0">
                <i
                  className={`fa-solid ${card.icon} text-deep-blue text-lg sm:text-xl`}
                />
              </div>

              <h4 className="text-lg sm:text-xl font-semibold text-dark-gray flex-1">
                {card.title}
              </h4>

              {/* Indicator */}
              <div
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </div>
            </button>

            {/* Body */}
            <div
              className={`
                grid transition-all duration-300
                ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
              `}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-medium-gray text-sm sm:text-base">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StackedLevelCards;
