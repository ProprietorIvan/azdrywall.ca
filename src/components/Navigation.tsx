import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({
  currentPage,
  showActions = true,
  transparent,
}: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Services", url: "/services" },
    { text: "Projects", url: "/projects" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
  ];

  const handleQuoteClick = () => {
    window.location.href = "tel:+1(778)656-1838";
  };

  return (
    <nav
      className={`relative ${
        transparent
          ? "bg-transparent !absolute left-0 top-0 w-full z-50"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-48 h-12">
              <Image
                src="/logo.webp"
                alt="EverFix Drywall & Finishing"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {/* Main Navigation Links */}
            <div className="flex items-center gap-1 mr-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    transparent
                      ? "text-white hover:bg-white/10"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+1(778)656-1838"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  transparent
                    ? "text-white hover:bg-white/10"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Phone className="w-4 h-4" />
                (778) 656-1838
              </a>
              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="tel:+1(778)656-1838"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X
                  className={`h-6 w-6 ${
                    transparent ? "text-white" : "text-gray-900"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    transparent ? "text-white" : "text-gray-900"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url);
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {link.text}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <button
                  onClick={handleQuoteClick}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
