import { useState } from "react";

const navigation = [
  {
    label: "Overview",
    path: "/",
  },

  {
    label: "Workflow",
    path: "/workflow",
  },
  {
    label: "About",
    path: "/about",
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const displayNavItem = navigation.map((item) => {
    return (
      <a
        key={item.label}
        href={item.path}
        className="text-medium-gray hover:text-deep-blue font-medium transition-colors cursor-pointer"
      >
        {item.label}
      </a>
    );
  });
  const displayMobileNavItem = navigation.map((item) => {
    return (
      <a
        key={item.label}
        href={item.path}
        className="text-medium-gray hover:text-deep-blue font-medium transition-colors"
      >
        {item.label}
      </a>
    );
  });

  return (
    <header
      id="header"
      className="bg-white border-b border-cool-gray sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-deep-blue rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-base sm:text-lg">T</span>
          </div>

          <span className="text-lg sm:text-xl font-semibold text-dark-gray">
            TUC
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8">
          {displayNavItem}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md border border-cool-gray"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block w-5 h-0.5 bg-dark-gray"></span>
            <span className="block w-5 h-0.5 bg-dark-gray"></span>
            <span className="block w-5 h-0.5 bg-dark-gray"></span>
          </div>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col bg-white border-t border-cool-gray px-4 py-4 space-y-4">
          {displayMobileNavItem}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
