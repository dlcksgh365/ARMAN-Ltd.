import { motion } from "motion/react";
import { Network, BarChart3, Leaf, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function CoreValues() {
  const { t } = useLanguage();
  const values = t("values.items") as any[];
  const icons = [
    <Network className="w-8 h-8 text-blue-accent" />,
    <BarChart3 className="w-8 h-8 text-blue-accent" />,
    <Leaf className="w-8 h-8 text-blue-accent" />,
    <ShieldCheck className="w-8 h-8 text-blue-accent" />
  ];

  return (
    <section className="py-24 bg-[#f9f9f9] text-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 break-keep">{t("values.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto break-keep">
            {t("values.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-6 border border-navy/10">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-4 break-keep">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed break-keep">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
