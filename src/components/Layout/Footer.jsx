import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-ice-card border-t-2 border-charcoal/10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg text-charcoal font-bold mb-2">
              Mustard by Mags
            </h3>
            <p className="font-body text-sm text-slate-medium">
              Small-batch, handcrafted mustard made with real ingredients and a whole lot of love.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm text-charcoal font-bold mb-3 uppercase tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-body text-sm text-slate-medium hover:text-blue-bright transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-body text-sm text-slate-medium hover:text-blue-bright transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="font-body text-sm text-slate-medium hover:text-blue-bright transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/survey" className="font-body text-sm text-slate-medium hover:text-blue-bright transition-colors">
                  Survey
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm text-charcoal font-bold mb-3 uppercase tracking-wide">
              Get in Touch
            </h4>
            <p className="font-body text-sm text-slate-medium mb-2">
              Got a question or just want to talk mustard?
            </p>
            <p className="font-body text-sm text-slate-medium">
              hello@mustardbymags.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-slate-medium">
            &copy; 2026 Mustard by Mags. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-8 bg-charcoal/20 rounded-full" />
            <span className="text-blue-bright text-sm">&#x2B29;</span>
            <div className="h-0.5 w-8 bg-charcoal/20 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
