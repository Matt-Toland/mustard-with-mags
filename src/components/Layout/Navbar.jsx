import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/survey', label: 'Survey' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-ice-card/80 backdrop-blur-sm border-b-2 border-charcoal/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/mustard_by_mags_logo.png"
              alt="Mustard by Mags"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  px-4 py-2 rounded-full font-display font-semibold text-sm
                  transition-all duration-150
                  ${isActive(link.to)
                    ? 'bg-blue-bright text-white'
                    : 'text-charcoal hover:bg-blue-bright/10'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-charcoal hover:bg-blue-bright/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-charcoal/10 mt-2 pt-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-4 py-3 rounded-xl font-display font-semibold text-sm
                  transition-all duration-150
                  ${isActive(link.to)
                    ? 'bg-blue-bright text-white'
                    : 'text-charcoal hover:bg-blue-bright/10'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
