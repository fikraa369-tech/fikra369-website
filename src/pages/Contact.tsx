import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { ConsultationForm } from "../components/ConsultationForm";
import { siteConfig } from "../config";

export function Contact() {
  const { lang } = useLanguage();
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow eyebrow--on-dark">
            {lang === "ar" ? "تواصل معنا" : "Contact"}
          </span>
          <h1>
            {lang === "ar"
              ? "خلينا نفهم فكرتك أولًا."
              : "Let’s understand your idea first."}
          </h1>
          <p>
            {lang === "ar"
              ? "أرسل لنا تفاصيل مختصرة عن المشروع أو التحدي الذي تواجهه، وسنبدأ من هناك."
              : "Share a brief description of your project or challenge, and we will start from there."}
          </p>
        </div>
      </section>
      <section className="section section--light">
        <div className="container contact-grid">
          <aside className="contact-aside">
            <span className="eyebrow">
              {lang === "ar" ? "بيانات التواصل" : "Contact Details"}
            </span>
            <h2>
              {lang === "ar"
                ? "الخطوة الأولى بسيطة."
                : "The first step is simple."}
            </h2>
            <p>
              {lang === "ar"
                ? "حدد الخدمة الأقرب لاحتياجك واكتب لنا ملخصًا، أو تواصل مباشرة عبر القنوات المتاحة."
                : "Choose the service closest to your need and send a short summary, or contact us through the available channels."}
            </p>
            <div className="contact-methods">
              <div>
                <MapPin size={21} />
                <span>
                  <small>{lang === "ar" ? "الموقع" : "Location"}</small>
                  {lang === "ar"
                    ? siteConfig.locationAr
                    : siteConfig.locationEn}
                </span>
              </div>
              {siteConfig.phone && (
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone size={21} />
                  <span>
                    <small>{lang === "ar" ? "الهاتف" : "Phone"}</small>
                    {siteConfig.phone}
                  </span>
                </a>
              )}
              {siteConfig.email && (
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail size={21} />
                  <span>
                    <small>{lang === "ar" ? "البريد" : "Email"}</small>
                    {siteConfig.email}
                  </span>
                </a>
              )}
              {siteConfig.whatsappNumber && (
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircleMore size={21} />
                  <span>
                    <small>WhatsApp</small>
                    {lang === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
                  </span>
                </a>
              )}
            </div>
          </aside>
          <div className="contact-form-wrap">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
