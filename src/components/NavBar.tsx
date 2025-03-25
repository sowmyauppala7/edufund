
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
      isScrolled ? 'glass shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-transform hover:scale-[1.02]"
        >
          <span className="text-2xl font-bold text-edufund-blue">
            EDU<span className="text-edufund-dark-blue">FUND</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
          <NavLink to="/programs" active={location.pathname.includes('/programs')}>Programs</NavLink>
          <NavLink to="/apply" active={location.pathname === '/apply'}>Apply</NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
          <Button size="sm" asChild className="ml-2 bg-edufund-blue hover:bg-edufund-blue/90 transition-all">
            <Link to="/apply">Donate Now</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-edufund-dark-blue focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t mt-4 px-6 py-6 animate-fade-down">
          <nav className="flex flex-col space-y-5 items-center">
            <MobileNavLink to="/" active={location.pathname === '/'}>Home</MobileNavLink>
            <MobileNavLink to="/about" active={location.pathname === '/about'}>About</MobileNavLink>
            <MobileNavLink to="/programs" active={location.pathname.includes('/programs')}>Programs</MobileNavLink>
            <MobileNavLink to="/apply" active={location.pathname === '/apply'}>Apply</MobileNavLink>
            <MobileNavLink to="/contact" active={location.pathname === '/contact'}>Contact</MobileNavLink>
            <Button size="sm" asChild className="w-full mt-4 bg-edufund-blue hover:bg-edufund-blue/90 transition-all">
              <Link to="/apply">Donate Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      'text-sm font-medium relative px-1 py-2 transition-colors duration-200',
      active 
        ? 'text-edufund-blue'
        : 'text-edufund-dark-blue hover:text-edufund-blue'
    )}
  >
    {children}
    <span className={cn(
      'absolute bottom-0 left-0 w-full h-0.5 bg-edufund-blue transform scale-x-0 transition-transform duration-200',
      active && 'scale-x-100'
    )} />
  </Link>
);

const MobileNavLink = ({ to, active, children }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      'text-lg font-medium w-full text-center py-2',
      active ? 'text-edufund-blue' : 'text-edufund-dark-blue hover:text-edufund-blue'
    )}
  >
    {children}
  </Link>
);

export default NavBar;
