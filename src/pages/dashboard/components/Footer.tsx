import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  const socialMediaLinks = [
    { href: "https://facebook.com", icon: <FaFacebookF /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#ff7f50] via-[#ff4500] to-[#b40711] text-white py-10 w-full">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          {/* Logo and Tagline */}
          <div>
            <img src="/logo.png" alt="Logo" className="h-12 w-12 mb-4" />
            <p className="text-sm">
              Your trusted car rental platform. Drive with comfort and style.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-10 text-sm">
            <a href="/home" className="hover:underline">
              Home
            </a>
            <a href="/home/about" className="hover:underline">
              About Us
            </a>
            {/* <a href="/services" className="hover:underline">
              Services
            </a> */}
            <a href="/home/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <div className="p-2 rounded-full bg-white/20 hover:bg-yellow-400/20">
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-white/80 space-y-5">
          <p>© {year} MyCarzUsa. All rights reserved.</p>
          <p>
            Designed with ❤️ by{" "}
            <a
              href="https://yourcompany.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              kingOfKingsRoyalTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
