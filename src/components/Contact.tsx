import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact({ onInquiryClick }: { onInquiryClick: () => void }) {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] bg-muted rounded-none overflow-hidden border border-border"
          >
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
              alt="Map Location"
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-navy text-white p-4 shadow-xl">
                <p className="font-bold">{t("hero.title")} HQ</p>
                <p className="text-xs opacity-70">Gwangsan-gu, Gwangju, Korea</p>
              </div>
            </div>
          </motion.div>

          {/* CS Center Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy mb-4 break-keep">{t("contact.title")}</h2>
            <p className="text-muted-foreground mb-8 break-keep">
              {t("contact.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-blue-accent mt-1" />
                <div>
                  <p className="font-bold text-navy break-keep">{t("contact.phone")}</p>
                  <p className="text-muted-foreground">+82 10-5294-1935</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Send className="w-5 h-5 text-blue-accent mt-1" />
                <div>
                  <p className="font-bold text-navy break-keep">{t("contact.telegram")}</p>
                  <p className="text-muted-foreground">@ARMAN_korea</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-blue-accent mt-1" />
                <div>
                  <p className="font-bold text-navy break-keep">{t("contact.email")}</p>
                  <p className="text-muted-foreground">arman3652023@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-blue-accent mt-1" />
                <div>
                  <p className="font-bold text-navy break-keep">{t("contact.hours")}</p>
                  <p className="text-muted-foreground break-keep">{t("contact.hoursValue")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blue-accent mt-1" />
                <div>
                  <p className="font-bold text-navy break-keep">{t("contact.address")}</p>
                  <p className="text-muted-foreground text-sm break-keep">{t("contact.addressValue")}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={onInquiryClick}
                className="bg-navy hover:bg-navy-light text-white rounded-none px-8"
              >
                {t("contact.cta")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
