
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 relative">
      <div className="container px-6 md:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-edufund-blue">
                EDU<span className="text-edufund-dark-blue">FUND</span>
              </span>
            </Link>
            <p className="text-edufund-gray mb-6">
              Breaking financial barriers to ensure equal access to education for everyone, everywhere.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-edufund-dark-blue mb-6">Programs</h3>
            <ul className="space-y-4">
              <FooterLink to="/programs/scholarships">Scholarships</FooterLink>
              <FooterLink to="/programs/loans">Interest-Free Loans</FooterLink>
              <FooterLink to="/programs/mentorship">Mentorship</FooterLink>
              <FooterLink to="/programs/resources">Support Resources</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-edufund-dark-blue mb-6">Company</h3>
            <ul className="space-y-4">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/impact">Our Impact</FooterLink>
              <FooterLink to="/team">Our Team</FooterLink>
              <FooterLink to="/apply">Apply Now</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-edufund-dark-blue mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-edufund-blue mr-3 mt-0.5" />
                <span className="text-edufund-gray">
                  123 Education Ave, Suite 400<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-edufund-blue mr-3" />
                <a href="mailto:info@edufund.org" className="text-edufund-gray hover:text-edufund-blue transition-colors">
                  info@edufund.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-edufund-blue mr-3" />
                <a href="tel:+14155550123" className="text-edufund-gray hover:text-edufund-blue transition-colors">
                  (415) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-edufund-gray text-sm mt-6 md:mt-0">
            © {new Date().getFullYear()} EDUFUND. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link to="/about" className="text-sm text-edufund-gray hover:text-edufund-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-sm text-edufund-gray hover:text-edufund-blue transition-colors">
              Terms of Service
            </Link>
            <Link to="/about" className="text-sm text-edufund-gray hover:text-edufund-blue transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop} 
        className="absolute right-6 bottom-6 bg-edufund-blue text-white p-3 rounded-full shadow-lg hover:bg-edufund-blue/90 transition-all animate-pulse-subtle"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a 
    href={href} 
    className="bg-edufund-light-blue/50 hover:bg-edufund-light-blue text-edufund-blue p-2 rounded-full transition-colors"
    target="_blank" 
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link to={to} className="text-edufund-gray hover:text-edufund-blue transition-colors">
      {children}
    </Link>
  </li>
);

export default Footer;
