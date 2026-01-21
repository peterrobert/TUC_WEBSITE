type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type FooterBrand = {
  logo_letter: string;
  name: string;
  description: string;
};

type FooterBottomLink = {
  label: string;
  href: string;
};

type FooterData = {
  brand: FooterBrand;
  columns: FooterColumn[];
  copyright_text: string;
  bottom_links: FooterBottomLink[];
};

type FooterProps = {
  footerData: FooterData;
};

const Footer = ({ footerData }: FooterProps) => {
  return (
    <footer
      id="footer"
      className="bg-white border-t border-cool-gray py-10 sm:py-12 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-deep-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {footerData.brand.logo_letter}
                </span>
              </div>

              <span className="text-xl font-semibold text-dark-gray">
                {footerData.brand.name}
              </span>
            </div>

            <p className="text-medium-gray text-sm leading-relaxed max-w-sm">
              {footerData.brand.description}
            </p>
          </div>

          {/* Columns */}
          {footerData.columns.map((column, index) => (
            <div key={index}>
              <h4 className="text-dark-gray font-semibold mb-3 sm:mb-4">
                {column.title}
              </h4>

              <ul className="space-y-2 text-medium-gray text-sm">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-deep-blue transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cool-gray pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-medium-gray text-sm leading-relaxed">
            {footerData.copyright_text}
          </p>

          <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-medium-gray text-sm">
            {footerData.bottom_links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-deep-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
