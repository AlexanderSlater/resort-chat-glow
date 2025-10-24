import { Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="ResortAI Concierge Logo" className="w-10 h-10" />
              <h3 className="text-2xl font-bold">ResortAI Concierge</h3>
            </Link>
            <p className="opacity-90 text-sm">
              Premium AI chatbot solutions designed exclusively for luxury hotels and resorts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h4 className="font-semibold mb-3">Policy</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Refund & Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@terelight.com" className="hover:opacity-100 transition-opacity">
                  support@terelight.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <a href="https://wa.me/1234567890" className="hover:opacity-100 transition-opacity">
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>© {currentYear} ResortAI Concierge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
