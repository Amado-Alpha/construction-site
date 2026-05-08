import { useState, useEffect } from "react";
import { href, NavLink } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import home from "@/assets/svgs/home-dark.svg";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Services", 
    href: "/services",
  },
  { label: "Projects", 
    href: "/projects",
  },
  { 
    label: "About", 
    href: "/about",
  },
  { 
    label: "Contact", 
    href: "/contact", 
  }
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're in hero section (first 100vh or specific height)
      const heroSectionHeight = window.innerHeight;
      const isInHero = currentScrollY < heroSectionHeight;
      setIsHeroSection(isInHero);
      
      // Handle navbar visibility on scroll
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Determine navbar background
  const getNavbarBackground = () => {
    if (isHeroSection && !isVisible) return "bg-transparent";
    if (isHeroSection && isVisible) return "bg-transparent";
    if (!isHeroSection && isVisible) return "bg-white shadow-md";
    return "bg-transparent";
  };

  // Determine text color
  const getTextColor = () => {
    if (isHeroSection) return "text-white";
    if (!isHeroSection && isVisible) return "text-gray-800";
    return "text-white";
  };

  return (
    <motion.header 
      className={cn(
        "w-full fixed top-0 left-0 z-50 transition-all duration-300",
        getNavbarBackground()
      )}
      animate={{ 
        y: isVisible ? 0 : -100 
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300 py-4",
          !isHeroSection && isVisible ? "px-4" : "px-6"
        )}>
          
          {/* Logo */}
          <NavLink to="/">
            <motion.div 
              className="flex items-center gap-2 font-semibold text-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={home} className="h-10 w-10" alt="Zionet Logo"/>
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.dropdown ? (
                      <>
                        <NavigationMenuTrigger className={getTextColor()}>
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.dropdownContent?.map((dropdownItem) => (
                              <ListItem
                                key={dropdownItem.label}
                                title={dropdownItem.label}
                                href={dropdownItem.href}
                                icon={dropdownItem.icon}
                                description={dropdownItem.description}
                              />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavLink to={item.href || "/"}>
                        {({ isActive }) => (
                          <div
                            className={cn(
                              "relative px-4 py-2 font-light transition-all duration-300 cursor-pointer",
                              isActive ? getTextColor() : getTextColor()
                            )}
                          >
                            {item.label}
                            {isActive && (
                              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-brand rounded-full">
                                <span className="absolute inset-0 blur-sm bg-gradient-to-r from-brand to-brand rounded-full" />
                              </span>
                            )}
                          </div>
                        )}
                      </NavLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side - Get Quote Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="default"
              className={cn(
                "bg-gradient-to-r from-brand to-brand hover:from-brand hover:to-brand",
                !isHeroSection && isVisible && "shadow-sm"
              )}
              asChild
            >
              <NavLink to="/get-quote">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={!isHeroSection && isVisible ? "text-white" : "text-white"}
                >
                  Get Quote
                </motion.div>
              </NavLink>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("md:hidden", getTextColor())}>
                <Menu className="h-6! w-6!" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.dropdown ? (
                      <MobileDropdownItem 
                        item={item} 
                        onClose={() => setMobileOpen(false)}
                      />
                    ) : (
                      <NavLink to={item.href || "/"} onClick={() => setMobileOpen(false)}>
                        {({ isActive }) => (
                          <div
                            className={cn(
                              "relative block py-2 text-lg transition-all duration-300 px-4 rounded-lg",
                              isActive ? "text-brand" : "text-muted-foreground"
                            )}
                          >
                            {item.label}
                            {isActive && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-brand to-brand rounded-full">
                                <span className="absolute inset-0 blur-sm bg-gradient-to-b from-brand to-brand rounded-full" />
                              </span>
                            )}
                          </div>
                        )}
                      </NavLink>
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 border-t"
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-brand to-brand hover:from-brand hover:to-brand text-white"
                    asChild
                  >
                    <NavLink to="/get-quote" onClick={() => setMobileOpen(false)}>
                      Get Quote
                    </NavLink>
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

// ListItem component for Navigation Menu with icon and description
const ListItem = ({ className, title, href, icon, description, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NavLink to={href} className={({ isActive }) => cn(
          "block select-none rounded-md p-3 leading-none no-underline outline-none",
          isActive && "bg-accent",
          className
        )} {...props}>
          <div className="flex items-start gap-3">
            {icon && (
              <img 
                src={icon} 
                alt="" 
                className="h-8 w-8 object-contain opacity-80 flex-shrink-0"
                aria-hidden="true"
              />
            )}
            <div className="flex-1">
              <div className="text-sm font-medium leading-none mb-1.5">{title}</div>
              {description && (
                <p className="text-xs leading-snug text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          </div>
        </NavLink>
      </NavigationMenuLink>
    </li>
  );
};

// Mobile Dropdown Item Component
function MobileDropdownItem({ item, onClose }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        className="flex items-center justify-between w-full py-2 text-lg transition-colors hover:text-red-500"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{item.label}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-3 space-y-2 mt-2">
              {item.dropdownContent?.map((dropdownItem) => (
                <NavLink
                  key={dropdownItem.label}
                  to={dropdownItem.href}
                  onClick={onClose}
                  className={({ isActive }) => cn(
                    "flex items-start gap-3 py-3 px-3 rounded-lg transition-all",
                    isActive && "bg-accent text-accent-foreground"
                  )}
                >
                  {dropdownItem.icon && (
                    <img 
                      src={dropdownItem.icon} 
                      alt="" 
                      className="h-5 w-5 object-contain flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-sm">{dropdownItem.label}</div>
                    {dropdownItem.description && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {dropdownItem.description}
                      </div>
                    )}
                  </div>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}