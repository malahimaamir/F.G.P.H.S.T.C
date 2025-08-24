import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import educationLogo from "@/assets/education-logo.png";

const Footer = () => {
  return (
    <footer className="bg-footer-green text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={educationLogo} alt="F.G.P.H.S.T.C" className="w-12 h-12" />
              <span className="text-2xl font-bold">F.G.P.H.S.T.C</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Excellence in Education, Innovation in Learning. Building futures through 
              comprehensive educational programs and dedicated faculty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" rel="noreferrer noopener">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" rel="noreferrer noopener">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" rel="noreferrer noopener">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" rel="noreferrer noopener">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#studyplan" className="text-white/80 hover:text-white transition-colors">Study Plans</a></li>
              <li><a href="#exam" className="text-white/80 hover:text-white transition-colors">Examinations</a></li>
              <li><a href="#teachers" className="text-white/80 hover:text-white transition-colors">Teachers</a></li>
              <li><a href="#principal" className="text-white/80 hover:text-white transition-colors">Principal</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#paymentmode" className="text-white/80 hover:text-white transition-colors">Payment Options</a></li>
              <li><a href="#schedule" className="text-white/80 hover:text-white transition-colors">Class Schedule</a></li>
              <li><a href="#entry" className="text-white/80 hover:text-white transition-colors">Admission Process</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white/80" />
                <div className="text-sm text-white/80">
                  <p>123 Education Street</p>
                  <p>Learning City, LC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80" />
                <div className="text-sm text-white/80">
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80" />
                <div className="text-sm text-white/80">
                  <p>info@fgphstc.edu</p>
                  <p>admissions@fgphstc.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © 2024 F.G.P.H.S.T.C. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;