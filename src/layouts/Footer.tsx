const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white border-t border-cool-gray py-10 sm:py-12 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-deep-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-semibold text-dark-gray">TUC</span>
            </div>

            <p className="text-medium-gray text-sm leading-relaxed max-w-sm">
              The Ultimate Collaboration. A system for helping people, ideas,
              and projects connect, grow, and become useful to the world.
            </p>
          </div>

          {/* System */}
          <div>
            <h4 className="text-dark-gray font-semibold mb-3 sm:mb-4">
              System
            </h4>

            <ul className="space-y-2 text-medium-gray text-sm">
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  Pipeline Visualization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          {/* Documentation */}
          <div>
            <h4 className="text-dark-gray font-semibold mb-3 sm:mb-4">
              Documentation
            </h4>

            <ul className="space-y-2 text-medium-gray text-sm">
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  Principles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-dark-gray font-semibold mb-3 sm:mb-4">
              Community
            </h4>

            <ul className="space-y-2 text-medium-gray text-sm">
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  Participation Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  Submit Suggestions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deep-blue transition-colors">
                  Transparency Reports
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cool-gray pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-medium-gray text-sm leading-relaxed">
            © 2024 TUC – The Ultimate Collaboration. Built slowly,
            transparently, and deliberately.
          </p>

          <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-medium-gray text-sm">
            <a href="#" className="hover:text-deep-blue transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-deep-blue transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-deep-blue transition-colors">
              Open Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
