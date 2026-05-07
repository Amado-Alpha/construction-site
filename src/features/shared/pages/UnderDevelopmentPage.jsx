import { useState } from "react";
import { motion } from "framer-motion";
import { 
  HardHat, 
  Mail, 
  Phone, 
  MapPin,
  Building2,
  ArrowLeft,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom"; // or use next/link if using Next.js
import logo from "@/assets/svgs/home-dark.svg";

export default function UnderDevelopmentPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNotify = () => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col">
      
      {/* Simple Header with Back Button */}
      <header className="py-6 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} className="h-8 w-auto filter brightness-0 invert" alt="Logo"/>
          </div>
          
          {/* Back to Home Button */}
          <Link to="/">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-neutral-400 hover:text-brand hover:bg-neutral-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Icon */}
          <div className="mb-8 inline-flex p-4 bg-brand/10 rounded-full">
            <HardHat className="h-16 w-16 text-brand" />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Under Construction
          </h1>
          
          {/* Divider */}
          <div className="w-20 h-1 bg-brand mx-auto mb-6" />

          {/* Message */}
          <p className="text-neutral-400 text-lg mb-8 max-w-md mx-auto">
            We're building something amazing. Our new website is coming soon.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-md mx-auto">
            {[
              { label: "Experience", value: "25+ Years" },
              { label: "Projects", value: "500+" },
              { label: "Clients", value: "1000+" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-brand font-bold text-xl">{stat.value}</div>
                <div className="text-neutral-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Notify Form */}
          <div className="bg-neutral-800/50 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-sm text-neutral-300 mb-4">
              Get notified when we launch
            </p>
            <form onSubmit={handleNotify} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-11 bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-brand hover:bg-brand/70 h-11 px-6"
              >
                {isSubmitting ? "..." : "Notify Me"}
              </Button>
            </form>
          </div>

          {/* Alternative Home Link - Centered button */}
          <div className="mt-8">
            <Link to="/">
              <Button 
                variant="outline"
                className="border-neutral-700 bg-brand text-neutral-300 hover:bg-brand/70 hover:border-brand/70 hover:text-white"
              >
                <Home className="h-4 w-4 mr-2" />
                Return to Homepage
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              <span>hello@constructionco.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Construction Ave</span>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-6 text-center text-neutral-600 text-sm border-t border-neutral-800">
        <p>© {new Date().getFullYear()} Construction Co. All rights reserved.</p>
      </footer>
    </div>
  );
}