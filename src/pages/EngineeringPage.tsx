import { motion } from "motion/react";
import { Settings, Cpu, Factory, Truck, Globe, Award, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function EngineeringPage() {
  const { t } = useLanguage();
  const processSteps = t("engineeringPage.processSteps") as any[];
  const whyFeatures = t("engineeringPage.whyFeatures") as any[];

  const processIcons = [
    <Settings className="w-8 h-8 text-blue-accent" />,
    <Cpu className="w-8 h-8 text-blue-accent" />,
    <Factory className="w-8 h-8 text-blue-accent" />,
    <Truck className="w-8 h-8 text-blue-accent" />
  ];

  const whyIcons = [
    <Globe className="w-8 h-8 text-blue-accent" />,
    <Award className="w-8 h-8 text-blue-accent" />,
    <MessageSquare className="w-8 h-8 text-blue-accent" />
  ];

  return (
    <div className="pt-24 pb-16">
      <section className="relative h-[40vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/m1.png"
            alt="Mold Engineering"
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
            {t("engineeringPage.title")}
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl break-keep whitespace-pre-line">
            {t("engineeringPage.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Introduction */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight break-keep">
                {t("engineeringPage.section1Title")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed break-keep whitespace-pre-line">
                {t("engineeringPage.section1P1")}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/3] bg-muted overflow-hidden"
              >
                <img 
                  src="/g1.png" 
                  alt="Engineering Image 1" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-[4/3] bg-muted overflow-hidden"
              >
                <img 
                  src="/g2.png" 
                  alt="Engineering Image 2" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-[4/3] bg-muted overflow-hidden"
              >
                <img 
                  src="/g3.png" 
                  alt="Engineering Image 3" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="aspect-[4/3] bg-muted overflow-hidden"
              >
                <img 
                  src="/g4.png" 
                  alt="Engineering Image 4" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            </div>
          </div>

          <div className="mb-32">
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">{t("engineeringPage.processTitle")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-muted/30 border border-border flex flex-col items-center text-center"
                >
                  <div className="mb-6">{processIcons[index]}</div>
                  <h4 className="font-bold text-navy text-xl mb-3 break-keep whitespace-pre-line">{step.title}</h4>
                  <p className="text-muted-foreground leading-relaxed break-keep">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Section */}
          <div>
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">{t("engineeringPage.whyTitle")}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-muted/30 border border-border"
                >
                  <div className="mb-6">{whyIcons[index]}</div>
                  <h4 className="font-bold text-navy text-xl mb-3 break-keep">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed break-keep">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="mt-32">
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">{t("engineeringPage.partnerTitle")}</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto p-8 bg-blue-accent/5 border border-blue-accent/10"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                <div className="flex-shrink-0 w-48 h-48 bg-white border border-border flex items-center justify-center shadow-sm overflow-hidden p-4">
                  <img src="/TPS.png" alt="TPS Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-navy mb-4">{t("engineeringPage.partnerName")}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed break-keep whitespace-pre-line">
                    {t("engineeringPage.partnerDesc")}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-[16/9] bg-muted overflow-hidden">
                  <img 
                    src="/t1.png" 
                    alt="Partner Facility 1" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="aspect-[16/9] bg-muted overflow-hidden">
                  <img 
                    src="/t2.png" 
                    alt="Partner Facility 2" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
