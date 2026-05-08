import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/svgs/home-dark.svg";
import facebook from "@/assets/images/facebook.png";
import instagram from "@/assets/images/instagram.png";
import youtube from "@/assets/images/youtube.png";

// Simplified sections for construction company
const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Residential", href: "/residential" },
      { label: "Commercial", href: "/commercial" },
      { label: "Renovations", href: "/renovations" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ]
  }
];

const socialLinks = [
  { icon: facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async () => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <footer className="relative bg-neutral-900 text-white">
      {/* Top accent bar */}
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Main Footer Content - 3 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Brand & Contact Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} className="h-10 w-auto filter brightness-0 invert" alt="Logo"/>
            </div>
            <p className="text-neutral-400 text-sm">
              Building excellence since 1995. Quality construction you can trust.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <MapPin className="h-4 w-4 text-brand" />
                <span>Dar es Salaam, Posta ST 12345</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <Phone className="h-4 w-4 text-brand" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <Mail className="h-4 w-4 text-brand" />
                <span>info@mkconstructionco.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-white text-sm mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-brand transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm">Newsletter</h3>
            <p className="text-neutral-400 text-sm">
              Get project updates and offers
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-10 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
              />
              <Button 
                type="submit" 
                size="sm"
                disabled={isSubmitting}
                className="bg-brand hover:bg-brand/70 h-10 px-4"
              >
                {isSubmitting ? "..." : <Send className="h-4 w-4" />}
              </Button>
            </form>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-neutral-800 hover:bg-brand/60 transition-colors"
                >
                  <img src={social.icon} className="h-4 w-4" alt={social.label}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} MkConstruction Co. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-brand transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-brand transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}