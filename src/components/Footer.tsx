import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="/armanlogo.png" 
                alt="ARMAN LLC Logo" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain transition-all duration-300 logo-white"
                referrerPolicy="no-referrer"
              />
              <div className="flex items-baseline font-bold text-lg md:text-xl break-keep">
                <span className="tracking-[0.15em] mr-1.5 md:mr-2">ARMAN</span>
                <span className="text-[0.6em] font-medium tracking-normal opacity-80">LLC</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed break-keep whitespace-pre-line">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/arman.kr_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 break-keep">{t("footer.quickLinks")}</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/" className="hover:text-blue-accent transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/about" className="hover:text-blue-accent transition-colors">{t("nav.about")}</Link></li>
              <li><a href="/#services" className="hover:text-blue-accent transition-colors">{t("nav.services")}</a></li>
              <li><a href="/#contact" className="hover:text-blue-accent transition-colors">{t("nav.contact")}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 break-keep">{t("footer.ourServices")}</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/services/export" className="hover:text-blue-accent transition-colors">{t("nav.export")}</Link></li>
              <li><Link to="/services/import" className="hover:text-blue-accent transition-colors">{t("nav.import")}</Link></li>
              <li><Link to="/services/distribution" className="hover:text-blue-accent transition-colors">{t("nav.distribution")}</Link></li>
              <li><Link to="/services/engineering" className="hover:text-blue-accent transition-colors">{t("nav.engineering")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 break-keep">{t("footer.contactUs")}</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-accent" />
                +82 10-5294-1935
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-accent" />
                +82 70-7677-1935
              </li>
              <li className="flex items-center gap-3">
                <Send className="w-4 h-4 text-blue-accent" />
                @ARMAN_korea
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-accent" />
                arman3652023@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-accent mt-1" />
                <span className="break-keep">{t("contact.addressValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs break-keep">
            {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-white/40 text-xs">
            <a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
