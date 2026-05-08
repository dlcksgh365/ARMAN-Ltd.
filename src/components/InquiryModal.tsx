import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Send, X, Loader2, CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    type: "General Inquiry",
    message: ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzdyzpqw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          type: "General Inquiry",
          message: ""
        });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        alert("Something went wrong. Please try again or contact us directly via email.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send inquiry. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white p-8 shadow-2xl border border-border"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-navy transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {isSuccess ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-navy">Thank You!</h3>
                <p className="text-muted-foreground">Your inquiry has been sent successfully. We will get back to you soon.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-navy mb-2 break-keep">{t("inquiry.title")}</h3>
                <p className="text-sm text-muted-foreground mb-6 break-keep">{t("inquiry.subtitle")}</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground break-keep">{t("inquiry.name")}</label>
                      <input 
                        required
                        name="name"
                        type="text"
                        className="w-full border border-border p-3 focus:outline-none focus:border-blue-accent"
                        placeholder={t("inquiry.placeholderName")}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground break-keep">{t("inquiry.email")}</label>
                      <input 
                        required
                        name="email"
                        type="email"
                        className="w-full border border-border p-3 focus:outline-none focus:border-blue-accent"
                        placeholder={t("inquiry.placeholderEmail")}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground break-keep">{t("inquiry.type")}</label>
                    <select 
                      name="type"
                      className="w-full border border-border p-3 focus:outline-none focus:border-blue-accent bg-white"
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                    >
                      <option value="General Inquiry">{t("inquiry.types.general")}</option>
                      <option value="Export Inquiry">{t("inquiry.types.export")}</option>
                      <option value="Import Inquiry">{t("inquiry.types.import")}</option>
                      <option value="Logistics/Trade">{t("inquiry.types.logistics")}</option>
                      <option value="Partnership">{t("inquiry.types.partnership")}</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground break-keep">{t("inquiry.subject")}</label>
                    <input 
                      required
                      name="subject"
                      type="text"
                      className="w-full border border-border p-3 focus:outline-none focus:border-blue-accent"
                      placeholder={t("inquiry.placeholderSubject")}
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground break-keep">{t("inquiry.message")}</label>
                    <textarea 
                      required
                      name="message"
                      rows={4}
                      className="w-full border border-border p-3 focus:outline-none focus:border-blue-accent resize-none"
                      placeholder={t("inquiry.placeholderMessage")}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-navy hover:bg-navy-light text-white rounded-none py-6 text-lg disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {t("inquiry.submit")}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
