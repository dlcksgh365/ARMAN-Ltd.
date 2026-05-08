import { motion } from "motion/react";
import { Building2, ShoppingCart, Warehouse, LineChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DistributionPage() {
  const { t } = useLanguage();
  const details = t("distPage.features") as any[];

  const icons = [
    <Building2 className="w-8 h-8 text-blue-accent" />,
    <ShoppingCart className="w-8 h-8 text-blue-accent" />,
    <Warehouse className="w-8 h-8 text-blue-accent" />,
    <LineChart className="w-8 h-8 text-blue-accent" />
  ];

  return (
    <div className="pt-24 pb-16">
      <section className="relative h-[40vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/iran-mashhad.png"
            alt="Local Distribution"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4 break-keep"
          >
            {t("distPage.title")}
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl break-keep">
            {t("distPage.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy mb-6 break-keep">{t("distPage.section1Title")}</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed break-keep">
                {t("distPage.section1P1")}
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed break-keep">
                {t("distPage.section1P2")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] bg-muted overflow-hidden"
            >
              <img
                src="/iran local.jpg"
                alt="Warehouse"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {details.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-muted/30 border border-border"
              >
                <div className="mb-6">{icons[index]}</div>
                <h4 className="font-bold text-navy text-xl mb-3 break-keep">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed break-keep">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
