import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Business() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const services = [
    {
      id: "01",
      title: t("business.services.0.title"),
      href: "/services/export",
      description: t("business.services.0.description"),
      image: "/kbeauty.png"
    },
    {
      id: "02",
      title: t("business.services.1.title"),
      href: "/services/import",
      description: t("business.services.1.description"),
      image: "/SP.png"
    },
    {
      id: "03",
      title: t("business.services.2.title"),
      href: "/services/distribution",
      description: t("business.services.2.description"),
      image: "/iran-mashhad.png"
    },
    {
      id: "04",
      title: t("business.services.3.title"),
      href: "/services/engineering",
      description: t("business.services.3.description"),
      image: "/m1.png"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl font-bold text-navy mb-6 break-keep">{t("business.title")}</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed break-keep">
              {t("business.description")}
            </p>
            <Link to="/services/export">
              <Button variant="outline" className="rounded-none border-navy text-navy hover:bg-navy hover:text-white px-8">
                {t("business.cta")} <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(service.href)}
                className="group relative h-[450px] overflow-hidden cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <span className="text-4xl font-bold opacity-20">{service.id}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2 break-keep">{service.title}</h3>
                    <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 break-keep">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
