import React from "react";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  PaintBucket,
  Paintbrush,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">
              EverFix Drywall &amp; Finishing
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional painting and drywall services in Vancouver &amp;
              Burnaby. Delivering quality workmanship and exceptional results
              for residential and commercial properties.
            </p>

            {/* Service Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-200">
                <PaintBucket className="w-4 h-4 mr-2" />
                Professional Painting
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-200">
                <Paintbrush className="w-4 h-4 mr-2" />
                Expert Finishing
              </span>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Licensed &amp; Insured in British Columbia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>

            {/* Hours */}
            <div className="flex items-start gap-3 text-gray-400 mb-4">
              <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-white mb-1">Business Hours</p>
                <p>Monday - Friday</p>
                <p>8:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+1(778)656-1838"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-4"
            >
              <Phone className="w-5 h-5" />
              <span>(778) 656-1838</span>
            </a>

            {/* Email */}
            <a
              href="mailto:office@azdrywall.ca"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-4"
            >
              <Mail className="w-5 h-5" />
              <span>office@azdrywall.ca</span>
            </a>

            {/* Address */}
            <div className="flex items-start gap-3 text-gray-400">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p>Downtown Vancouver</p>
                <p>Vancouver, BC</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} EverFix Drywall &amp; Finishing. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
