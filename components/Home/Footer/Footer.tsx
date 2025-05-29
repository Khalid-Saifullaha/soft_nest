import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

interface FooterLink {
  href: string;
  text: string;
}

interface LinkSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  href: string;
  icon: React.ElementType;
  label: string;
}

const companyLinks: LinkSection = {
  title: "Company",
  links: [
    { href: "#", text: "About Us" },
    { href: "#", text: "News & Press" },
    { href: "#", text: "Our Customer" },
    { href: "#", text: "Leadership" },
    { href: "#", text: "Careers" },
  ],
};

const resourcesLinks: LinkSection = {
  title: "Resources",
  links: [
    { href: "#", text: "Blog" },
    { href: "#", text: "Webinar & Events" },
    { href: "#", text: "Podcast" },
    { href: "#", text: "E-book & Guides" },
  ],
};

const contactInfo = {
  title: "Contact Us",
  phone: "+01 9838 9823 4732",
  email: "example@gmail.com",
  address: "123 Main Street, Anytown, USA",
};

const socialMediaLinks: SocialLink[] = [
  { href: "#", icon: FaFacebookF, label: "Facebook" },
  { href: "#", icon: FaTwitter, label: "Twitter" },
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "#", icon: FaYoutube, label: "YouTube" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-slate-300 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center mb-4">
              <GrTechnology className="h-8 w-8 mr-2 text-pink-500" />
              <span className="text-2xl font-bold text-white">SoftNest</span>
            </a>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              ullam consequuntur voluptate eligendi, blanditiis ab quae maiores!
            </p>
            <div className="flex space-x-3 mt-6">
              {socialMediaLinks.slice(0, 4).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-slate-400 hover:text-pink-500 transition-colors duration-300 bg-slate-700 p-2 rounded-full flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {companyLinks.title}
            </h3>
            <ul className="space-y-2">
              {companyLinks.links.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="hover:text-pink-500 transition-colors duration-300 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {resourcesLinks.title}
            </h3>
            <ul className="space-y-2">
              {resourcesLinks.links.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="hover:text-pink-500 transition-colors duration-300 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {contactInfo.title}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaPhoneAlt className="w-4 h-4 mr-3 mt-1 text-pink-500 flex-shrink-0" />
                <div>
                  <span className="block text-slate-400">Our Mobile Phone</span>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="hover:text-pink-500 transition-colors duration-300 font-semibold text-yellow-400"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="w-4 h-4 mr-3 mt-1 text-pink-500 flex-shrink-0" />
                <div>
                  <span className="block text-slate-400">Our Email</span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-pink-500 transition-colors duration-300 font-semibold text-yellow-400"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-4 h-4 mr-3 mt-1 text-pink-500 flex-shrink-0" />
                <div>
                  <span className="block text-slate-400">Our Address</span>
                  <span className="text-slate-200">{contactInfo.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-slate-400 mb-4 md:mb-0">
            Copyright &copy; {new Date().getFullYear()} Webdev. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Social:</span>
            {socialMediaLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-slate-400 hover:text-pink-500 transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
