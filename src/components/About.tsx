import { motion } from "motion/react";
import { Network, Building2, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const features = t("about.features") as any[];
  const icons = [
    <Network className="w-6 h-6 text-blue-accent" />,
    <Building2 className="w-6 h-6 text-blue-accent" />,
    <Users className="w-6 h-6 text-blue-accent" />,
    <Award className="w-6 h-6 text-blue-accent" />
  ];

  return (
    <section id="about" className="py-24 bg-[#f9f9f9]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy mb-6 break-keep" dangerouslySetInnerHTML={{ __html: t("about.title").replace(", ", ", <br />") }} />
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed break-keep">
              {t("about.description")}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0">{icons[index]}</div>
                  <div>
                    <h4 className="font-bold text-navy mb-1 break-keep">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground break-keep">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-none overflow-hidden shadow-2xl">
              <img
                src="/KI.png"
                alt="Modern Office Building"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-navy p-8 text-white hidden md:block">
              <p className="text-2xl font-bold leading-tight break-keep" dangerouslySetInnerHTML={{ __html: t("about.pipeline").replace("connecting", "<br />connecting<br />") }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
