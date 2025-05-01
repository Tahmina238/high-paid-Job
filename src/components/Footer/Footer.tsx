import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo2 from "../../../public/footerLogo.webp";
export default function Footer() {
  return (
    <footer className="bg-[#0a0b1a] text-white  py-8">
      <div className=" mx-auto container  px-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center ">
            <div className="mb-2">
              <Image
                src={logo2}
                alt="High Paid Jobs Logo"
                width={50}
                height={50}
                className="invert"
              />
            </div>
            <h2 className="text-xl font-semibold mb-1">High Paid Jobs</h2>
            <p className="text-xs text-gray-400">Reach the Top 1%</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
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
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Term and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">highpaidjobs.us@gmail.com</p>
            <p className="text-gray-400 mb-4">WhatsApp: +1 586-665-3331</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
          © 2025 All rights reserved by HighPaidJobs
        </div>
      </div>
    </footer>
  );
}
