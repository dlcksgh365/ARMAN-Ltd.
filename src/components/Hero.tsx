import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ship } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/5322.png"
          alt="Cargo Ship Logistics"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl bg-white/10 backdrop-blur-sm p-8 md:py-16 md:px-12 border-s-4 border-blue-accent">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/90 font-medium mb-4 tracking-wide uppercase text-sm flex items-center gap-2 break-keep">
              <Ship className="w-4 h-4" /> {t("hero.badge")}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 break-keep">
              {t("hero.title")} <br />
              <span className="text-blue-accent">{t("hero.subtitle")}</span>
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-xl leading-relaxed break-keep">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button size="lg" className="bg-blue-accent hover:bg-blue-accent/90 text-white rounded-none px-8 group">
                  {t("hero.cta")}
                  <ArrowRight className="ms-2 w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
