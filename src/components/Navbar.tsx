import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar({ onInquiryClick }: { onInquiryClick: () => void }) {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const serviceItems = [
    { title: t("nav.export"), href: "/services/export", description: t("business.services.0.description") },
    { title: t("nav.import"), href: "/services/import", description: t("business.services.1.description") },
    { title: t("nav.distribution"), href: "/services/distribution", description: t("business.services.2.description") },
    { title: t("nav.engineering"), href: "/services/engineering", description: t("business.services.3.description") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LanguageToggle = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-2 text-[15px] font-bold tracking-widest", className)}>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "transition-all duration-300 hover:text-blue-accent",
          language === "en" 
            ? (isScrolled || !isHomePage ? "text-navy" : "text-white") 
            : "text-muted-foreground/60"
        )}
      >
        EN
      </button>
      <span className={cn("opacity-30", isScrolled || !isHomePage ? "text-navy" : "text-white")}>|</span>
      <button
        onClick={() => setLanguage("ko")}
        className={cn(
          "transition-all duration-300 hover:text-blue-accent",
          language === "ko" 
            ? (isScrolled || !isHomePage ? "text-navy" : "text-white") 
            : "text-muted-foreground/60"
        )}
      >
        KO
      </button>
    </div>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-[#f9f9f9] py-3 shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-22 h-22 md:w-16 md:h-16 transition-all duration-300">
              <img 
                src="/armanlogo.png" 
                alt="ARMAN Ltd. Logo" 
                className={cn(
                  "absolute inset-0 w-full h-full object-contain transition-opacity duration-300 logo-white",
                  isScrolled || !isHomePage ? "opacity-0" : "opacity-100"
                )}
                referrerPolicy="no-referrer"
              />
              <img 
                src="/armanlogo.png" 
                alt="ARMAN Ltd. Logo" 
                className={cn(
                  "absolute inset-0 w-full h-full object-contain transition-opacity duration-300 logo-navy",
                  isScrolled || !isHomePage ? "opacity-100" : "opacity-0"
                )}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center">
              <div className={cn(
                "font-gotham font-bold text-2xl leading-none transition-colors duration-300 break-keep flex items-baseline",
                isScrolled || !isHomePage ? "text-navy" : "text-white"
              )}>
                <span className="tracking-[0.15em] mr-2">ARMAN</span>
                <span className="text-[0.6em] font-medium tracking-normal opacity-80">LLC</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu key={location.pathname}>
            <NavigationMenuList className="gap-5">
              <NavigationMenuItem>
                <Link to="/" className={cn("bg-transparent hover:text-blue-accent focus:text-blue-accent active:text-blue-accent outline-none transition-colors text-base font-semibold px-4 py-2", isScrolled || !isHomePage ? "text-navy" : "text-white")}>
                  {t("nav.home")}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={cn("bg-transparent hover:text-blue-accent focus:text-blue-accent active:text-blue-accent outline-none transition-colors text-base font-semibold px-4 py-2", isScrolled || !isHomePage ? "text-navy" : "text-white")}>
                  {t("nav.about")}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn("bg-transparent !bg-transparent hover:!bg-transparent hover:text-blue-accent focus:!bg-transparent active:!bg-transparent focus:text-blue-accent data-[state=open]:!bg-transparent data-[state=active]:!bg-transparent data-popup-open:!bg-transparent outline-none transition-colors text-base font-semibold px-4 py-2 shadow-none border-none ring-0 focus:ring-0 focus-visible:ring-0", isScrolled || !isHomePage ? "text-navy" : "text-white")}>
                  {t("nav.services")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {serviceItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                             to={item.href}
                             className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-transparent focus:text-blue-accent"
                           >
                             <div className="text-[15px] font-semibold leading-none break-keep">{item.title}</div>
                           </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href={isHomePage ? "#contact" : "/#contact"} className={cn("bg-transparent hover:text-blue-accent focus:text-blue-accent active:text-blue-accent outline-none transition-colors text-base font-semibold px-4 py-2", isScrolled || !isHomePage ? "text-navy" : "text-white")}>
                  {t("nav.contact")}
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="h-6 w-px bg-muted-foreground/20 mx-2" />
          
          <LanguageToggle />
          
          <Button 
            variant="default" 
            className={cn(
              "rounded-none px-8 py-6 text-base font-bold ml-2 transition-colors duration-300",
              isScrolled || !isHomePage 
                ? "bg-navy hover:bg-navy-light text-white" 
                : "bg-white hover:bg-white/90 text-navy"
            )}
            onClick={onInquiryClick}
          >
            {t("nav.inquiry")}
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageToggle className={isScrolled || !isHomePage ? "text-navy" : "text-white"} />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled || !isHomePage ? "text-navy" : "text-white"}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-12 px-6">
                <Link to="/" className="text-xl font-medium hover:text-blue-accent transition-colors">{t("nav.home")}</Link>
                <Link to="/about" className="text-xl font-medium hover:text-blue-accent transition-colors">{t("nav.about")}</Link>
                
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-medium text-navy">{t("nav.services")}</p>
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-blue-accent/20">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="text-lg text-muted-foreground hover:text-blue-accent transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <a href={isHomePage ? "#contact" : "/#contact"} className="text-xl font-medium hover:text-blue-accent transition-colors">{t("nav.contact")}</a>
                
                <Button 
                  className="w-full bg-navy hover:bg-navy-light text-white rounded-none mt-4"
                  onClick={onInquiryClick}
                >
                  {t("nav.inquiry")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
