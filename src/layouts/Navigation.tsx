const Navigation = () => {
  return (
    <header
      id="header"
      className="bg-white border-b border-cool-gray sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-deep-blue rounded-md flex items-center justify-center">
            <span className="text-white font-bold  text-lg">T</span>
          </div>

          <span className="text-xl font-semibold text-dark-gray">TUC</span>
        </div>
        <nav className="flex items-center space-x-8 ">
          <a
            href="#"
            className="text-medium-gray hover:text-deep-blue font-medium transition-colors"
          >
            Overview
          </a>
          <a
            href="#"
            className="text-medium-gray hover:text-deep-blue font-medium transition-colors"
          >
            Documentation
          </a>
          <a
            href="#"
            className="text-medium-gray hover:text-deep-blue font-medium transition-colors"
          >
            Pipeline
          </a>
          <a
            href="#"
            className="text-medium-gray hover:text-deep-blue font-medium transition-colors"
          >
            System Status
          </a>
          <a
            href="#"
            className="text-medium-gray hover:text-deep-blue font-medium transition-colors"
          >
            Community
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
