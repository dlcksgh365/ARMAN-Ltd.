import { motion } from "motion/react";
import { Network, Building2, Users, Award, ShieldCheck, BarChart3, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const features = t("about.features") as any[];
  const values = t("aboutPage.values") as any[];

  const featureIcons = [
    <Network className="w-8 h-8 text-blue-accent" />,
    <Building2 className="w-8 h-8 text-blue-accent" />,
    <Users className="w-8 h-8 text-blue-accent" />,
    <Award className="w-8 h-8 text-blue-accent" />
  ];

  const valueIcons = [
    <Network className="w-6 h-6 text-white" />,
    <BarChart3 className="w-6 h-6 text-white" />,
    <Leaf className="w-6 h-6 text-white" />,
    <ShieldCheck className="w-6 h-6 text-white" />
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/c1.jpg"
            alt="Office"
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
            {t("aboutPage.heroTitle")}
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl break-keep">
            {t("aboutPage.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy mb-6 break-keep">{t("aboutPage.storyTitle")}</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed break-keep">
                {t("aboutPage.storyP1")}
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed break-keep">
                {t("aboutPage.storyP2")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted overflow-hidden shadow-xl"
            >
              <img
                src="/KI.png"
                alt="Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-muted/30 border border-border hover:border-blue-accent transition-colors group"
              >
                <div className="mb-6 transition-transform group-hover:scale-110 duration-300">{featureIcons[index]}</div>
                <h4 className="font-bold text-navy text-xl mb-3 break-keep">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed break-keep">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Distribution Map Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 overflow-hidden"
          >
            <div className="relative w-full flex justify-center">
              <img 
                src="/map.png" 
                alt="Distribution Network Map" 
                className="max-w-full h-auto" 
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Values Section */}
          <div className="bg-navy p-12 md:p-20 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-accent flex items-center justify-center mx-auto mb-6 rounded-full">
                    {valueIcons[index]}
                  </div>
                  <h4 className="text-xl font-bold mb-4 break-keep">{value.title}</h4>
                  <p className="text-white/70 leading-relaxed text-sm break-keep">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
