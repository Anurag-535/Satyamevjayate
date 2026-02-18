import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-orange-500 fill-orange-500" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  Satyamev Jayate
                </span>
                <span className="text-xs text-orange-500 font-semibold">
                  Seva Sanstha
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering lives and uniting communities through dedicated social service in Raebareli.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-sm hover:text-orange-500 transition-colors">
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-sm hover:text-orange-500 transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Work</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/initiatives" className="text-sm hover:text-orange-500 transition-colors">
                  Nirdhan Kanya Vivah
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-sm hover:text-orange-500 transition-colors">
                  Healthcare Camps
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-sm hover:text-orange-500 transition-colors">
                  Education Support
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-sm hover:text-orange-500 transition-colors">
                  Media & Transparency
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Babuganj, Unchahar<br />Raebareli, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm">info@satyamevjayate.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Satyamev Jayate Seva Sanstha. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Registered NGO dedicated to social welfare and community development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
