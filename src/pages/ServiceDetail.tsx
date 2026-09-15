import { ArrowUpRight, Check } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { services } from "../data/content";
import { ServiceIcon } from "../components/ServiceIcon";
import { useReveal } from "../hooks/useReveal";

export function ServiceDetail() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  useReveal();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  return (
    <>
      <section className="service-detail-hero">
        <div className="container service-detail-grid">
          <div>
            <span className="service-detail-icon">
              <ServiceIcon name={service.icon} size={34} />
            </span>
            <span className="eyebrow eyebrow--on-dark">
              {lang === "ar" ? "خدمات FIKRA" : "FIKRA Services"}
            </span>
            <h1>{t(service.title)}</h1>
            <p>{t(service.intro)}</p>
            <Link to="/contact" className="button button--gold">
              {lang === "ar" ? "اطلب استشارة" : "Request Consultation"}{" "}
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="service-detail-card">
            <span>
              {lang === "ar"
                ? "هذه الخدمة مناسبة إذا كنت تريد:"
                : "This service is useful if you want to:"}
            </span>
            <ul>
              {service.bullets.map((b) => (
                <li key={b.ar}>
                  <Check size={18} />
                  {t(b)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <div className="detail-heading reveal">
            <span className="eyebrow">
              {lang === "ar" ? "منهج العمل" : "Approach"}
            </span>
            <h2>
              {lang === "ar"
                ? "كيف نمشي معاك خطوة بخطوة"
                : "How we move step by step"}
            </h2>
          </div>
          <div className="detail-process">
            {service.process.map((step, i) => (
              <div className="detail-step reveal" key={step.ar}>
                <span>0{i + 1}</span>
                <h3>{t(step)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container narrow text-center reveal">
          <span className="eyebrow">
            {lang === "ar" ? "قبل أن تبدأ" : "Before you start"}
          </span>
          <h2>
            {lang === "ar"
              ? "الاستشارة الأولى تساعدنا على تحديد المسار المناسب لحالتك."
              : "The first consultation helps us identify the right route for your situation."}
          </h2>
          <p>
            {lang === "ar"
              ? "كل مشروع له سياقه، لذلك نفضل فهم احتياجك أولًا قبل تحديد نطاق العمل النهائي."
              : "Every business has its own context, so we prefer to understand your need before defining the final scope."}
          </p>
          <Link className="button button--navy" to="/contact">
            {lang === "ar" ? "ابدأ الآن" : "Start now"}{" "}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
