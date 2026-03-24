import React from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-altura-charcoal border-t border-altura-gold/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <h2 className="font-serif text-3xl tracking-[0.2em] text-altura-white">
                ALTURA
              </h2>
            </Link>
            <p className="text-altura-muted text-sm leading-relaxed max-w-xs">
              Where luxury meets legacy. Premium residences in the heart of
              Nairobi's most prestigious address.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-altura-muted hover:text-altura-gold transition-colors"
                aria-label="Follow us on Instagram">
                
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-altura-muted hover:text-altura-gold transition-colors"
                aria-label="Follow us on Twitter">
                
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-altura-muted hover:text-altura-gold transition-colors"
                aria-label="Follow us on LinkedIn">
                
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h3 className="font-serif text-lg text-altura-white mb-6 tracking-wide">
              Properties
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/property/ph-01"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm">
                  
                  Penthouses
                </Link>
              </li>
              <li>
                <Link
                  to="/property/res-3a"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm">
                  
                  3 Bedroom Residences
                </Link>
              </li>
              <li>
                <Link
                  to="/property/res-2a"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm">
                  
                  2 Bedroom Residences
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm">
                  
                  All Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg text-altura-white mb-6 tracking-wide">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/resident"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm">
                  
                  Resident Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/investor"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm">
                  
                  Investor Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm">
                  
                  Luxury Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/roadmap"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm">
                  
                  Platform Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-altura-white mb-6 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Upper+Hill+Road+Nairobi+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm flex items-center">
                  
                  <MapPinIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                  Upper Hill Road, Nairobi, Kenya
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@alturaupperhill.com"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm flex items-center">
                  
                  <MailIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                  info@alturaupperhill.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254700000000"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm flex items-center">
                  
                  <PhoneIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                  Sales: +254 700 000 000
                </a>
              </li>
              <li>
                <a
                  href="tel:+254700000001"
                  className="text-altura-muted hover:text-altura-gold transition-colors text-sm flex items-center">
                  
                  <PhoneIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                  Concierge: +254 700 000 001
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-altura-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-altura-muted text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Canaan Developers. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-xs text-altura-muted">
            <Link
              to="/roadmap"
              className="hover:text-altura-gold transition-colors">
              
              Privacy Policy
            </Link>
            <Link
              to="/roadmap"
              className="hover:text-altura-gold transition-colors">
              
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}