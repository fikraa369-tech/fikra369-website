import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { services } from "../data/content";
import { ServiceIcon } from "../components/ServiceIcon";
import { SectionHeading } from "../components/SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function Services() {
  const { lang, t } = useLanguage();
  useReveal();
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow eyebrow--on-dark">
            {lang === "ar" ? "الخدمات" : "Services"}
          </span>
          <h1>
            {lang === "ar"
              ? "استشارة عملية تبدأ من احتياج مشروعك الحقيقي."
              : "Practical consulting built around what your business actually needs."}
          </h1>
          <p>
            {lang === "ar"
              ? "لا نقدم قالبًا واحدًا للجميع. نبدأ بتحديد السؤال ثم نختار الخدمة والمسار المناسبين."
              : "We do not force one template on every business. We start with the question, then choose the right service and route."}
          </p>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow={lang === "ar" ? "مجالات العمل" : "What We Do"}
            title={
              lang === "ar"
                ? "أربع خدمات تكمل بعضها"
                : "Four services that work together"
            }
          />
          <div className="services-list">
            {services.map((s, index) => (
              <article className="service-row reveal" key={s.slug}>
                <div className="service-row__index">0{index + 1}</div>
                <div className="service-row__icon">
                  <ServiceIcon name={s.icon} size={32} />
                </div>
                <div className="service-row__content">
                  <h2>{t(s.title)}</h2>
                  <p>{t(s.intro)}</p>
                  <div className="service-row__bullets">
                    {s.bullets.slice(0, 3).map((b) => (
                      <span key={b.ar}>{t(b)}</span>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/services/${s.slug}`}
                  className="round-link"
                  aria-label={t(s.title)}
                >
                  <ArrowUpRight size={22} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
