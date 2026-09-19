import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { siteConfig } from "../config";
import { services } from "../data/content";

export function ConsultationForm() {
  const { lang, t } = useLanguage();
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const values = Object.fromEntries(form.entries());
    const service = services.find((s) => s.slug === values.service);
    const message =
      lang === "ar"
        ? `طلب استشارة جديد من موقع FIKRA\nالاسم: ${values.name}\nالهاتف: ${values.phone}\nالبريد: ${values.email || "-"}\nالخدمة: ${service ? t(service.title) : values.service}\nالرسالة: ${values.message}`
        : `New co لا nsultation request from FIKRA website\nName: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email || "-"}\nService: ${service ? t(service.title) : values.service}\nMessage: ${values.message}`;

    if (siteConfig.whatsappNumber) {
      window.open(
        `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else if (siteConfig.email) {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent("FIKRA Consultation")}&body=${encodeURIComponent(message)}`;
    }
    setSent(true);
  }

  return (
    <form className="consult-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          {lang === "ar" ? "الاسم الكامل" : "Full name"}
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          {lang === "ar" ? "رقم الهاتف" : "Phone number"}
          <input name="phone" required inputMode="tel" autoComplete="tel" />
        </label>
      </div>
      <div className="form-row">
        <label>
          {lang === "ar" ? "البريد الإلكتروني" : "Email"}
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label>
          {lang === "ar" ? "الخدمة" : "Service"}
          <select name="service" required defaultValue="">
            <option value="" disabled>
              {lang === "ar" ? "اختر الخدمة" : "Select service"}
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {t(service.title)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        {lang === "ar" ? "كيف يمكننا مساعدتك؟" : "How can we help?"}
        <textarea name="message" rows={5} required />
      </label>
      <div className="form-submit-row">
        <button className="button button--gold" type="submit">
          {lang === "ar" ? "إرسال طلب الاستشارة" : "Send consultation request"}{" "}
          <ArrowUpRight size={18} />
        </button>
        <small>
          {lang === "ar"
            ? "باستمرارك أنت توافق على سياسة الخصوصية."
            : "By continuing, you agree to the privacy policy."}
        </small>
      </div>
      {sent && (
        <div className="form-status">
          <CheckCircle2 size={19} />
          {siteConfig.whatsappNumber || siteConfig.email
            ? lang === "ar"
              ? "تم تجهيز طلبك وفتح قناة التواصل."
              : "Your request is ready and the contact channel has been opened."
            : lang === "ar"
              ? "تعذر إرسال الطلب الآن. يرجى المحاولة لاحقًا أو استخدام بيانات التواصل المنشورة."
              : "The request cannot be sent right now. Please try again later or use the published contact details."}
        </div>
      )}
    </form>
  );
}
