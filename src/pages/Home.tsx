import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  FileSearch,
  LineChart,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { services, articles } from "../data/content";
import { ServiceIcon } from "../components/ServiceIcon";
import { SectionHeading } from "../components/SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function Home() {
  const { lang, t } = useLanguage();
  useReveal();

  const process = [
    [
      MessageSquareText,
      lang === "ar" ? "نفهم الفكرة" : "Understand the idea",
      lang === "ar"
        ? "نبدأ بالسؤال والاستماع قبل تقديم أي توصية."
        : "We begin by listening and asking before recommending.",
    ],
    [
      FileSearch,
      lang === "ar" ? "نحلل المعطيات" : "Analyze the facts",
      lang === "ar"
        ? "نراجع السوق والتشغيل والاحتياجات حسب طبيعة المشروع."
        : "We review market, operations and needs for the business.",
    ],
    [
      Compass,
      lang === "ar" ? "نحدد الاتجاه" : "Define direction",
      lang === "ar"
        ? "نرتب الخيارات والأولويات بصورة واضحة."
        : "We structure options and priorities clearly.",
    ],
    [
      LineChart,
      lang === "ar" ? "نحوّلها لخطة" : "Turn it into a plan",
      lang === "ar"
        ? "نخرج بخطوات عملية قابلة للتنفيذ والمتابعة."
        : "We finish with practical, trackable next steps.",
    ],
  ] as const;

  return (
    <>
      <section className="hero">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy reveal is-visible">
            <div className="hero-kicker">
              <span />
              {lang === "ar"
                ? "استشارات أعمال في دولة الإمارات"
                : "Business Consulting in the UAE"}
            </div>
            <h1>
              {lang === "ar" ? (
                <>
                  حوّل الفكرة إلى <em>قرار أوضح</em> وخطوة مدروسة.
                </>
              ) : (
                <>
                  Turn the idea into a <em>clearer decision</em> and a smarter
                  next step.
                </>
              )}
            </h1>
            <p>
              {lang === "ar"
                ? "في FIKRA نساعد رواد الأعمال وأصحاب المشاريع على فهم الخيارات، تقييم الفرص، وبناء خطوات عملية قبل الاستثمار والتوسع."
                : "At FIKRA, we help entrepreneurs and business owners understand options, evaluate opportunities, and build practical steps before investing or expanding."}
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="button button--gold">
                {lang === "ar" ? "اطلب استشارة" : "Request Consultation"}{" "}
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/services" className="button button--ghost">
                {lang === "ar" ? "استكشف الخدمات" : "Explore Services"}
              </Link>
            </div>
            <div className="hero-trust">
              <div>
                <CheckCircle2 size={18} />
                <span>{lang === "ar" ? "خطوات واضحة" : "Clear steps"}</span>
              </div>
              <div>
                <CheckCircle2 size={18} />
                <span>
                  {lang === "ar"
                    ? "قرارات مبنية على تحليل"
                    : "Analysis-led decisions"}
                </span>
              </div>
              <div>
                <CheckCircle2 size={18} />
                <span>
                  {lang === "ar"
                    ? "دعم بالعربية والإنجليزية"
                    : "Arabic & English support"}
                </span>
              </div>
            </div>
          </div>
          <div className="hero-visual reveal is-visible">
            <div className="hero-visual-frame">
              <img
                src="/assets/about/fikra_about_badge.png"
                alt="FIKRA concept"
              />
              <div className="hero-note hero-note--top">
                <ShieldCheck size={20} />
                <span>
                  {lang === "ar" ? "فهم قبل التنفيذ" : "Clarity before action"}
                </span>
              </div>
              <div className="hero-note hero-note--bottom">
                <LineChart size={20} />
                <span>
                  {lang === "ar"
                    ? "من الفكرة إلى النمو"
                    : "From idea to growth"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow={lang === "ar" ? "خدماتنا" : "Our Services"}
            title={
              lang === "ar"
                ? "حلول استشارية لكل مرحلة من رحلة المشروع"
                : "Advisory support for every stage of the business journey"
            }
            text={
              lang === "ar"
                ? "أربع خدمات أساسية مترابطة، من تقييم الفكرة وحتى تطوير النشاط القائم."
                : "Four connected services, from evaluating the idea to developing an existing business."
            }
          />
          <div className="services-grid">
            {services.map((service, index) => (
              <Link
                to={`/services/${service.slug}`}
                className="service-card reveal"
                key={service.slug}
              >
                <div className="service-card__top">
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-icon">
                    <ServiceIcon name={service.icon} />
                  </span>
                </div>
                <h3>{t(service.title)}</h3>
                <p>{t(service.short)}</p>
                <span className="card-link">
                  {lang === "ar" ? "اعرف المزيد" : "Learn more"}{" "}
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container split-about">
          <div className="split-about__image reveal">
            <img
              src="/assets/about/fikra_about_us_01.png"
              alt="FIKRA about us"
              loading="lazy"
            />
          </div>
          <div className="split-about__copy reveal">
            <span className="eyebrow eyebrow--on-dark">
              {lang === "ar" ? "من نحن" : "About FIKRA"}
            </span>
            <h2>
              {lang === "ar"
                ? "كل مشروع ناجح يبدأ بفكرة، لكن نجاحه يحتاج أكثر من الفكرة."
                : "Every successful business starts with an idea, but success needs more than the idea."}
            </h2>
            <p>
              {lang === "ar"
                ? "نؤمن بأن دور الاستشارة الحقيقي هو تحويل الأسئلة المعقدة إلى خيارات واضحة. لذلك نركز على الفهم والتحليل وترتيب الأولويات قبل الانتقال إلى التنفيذ."
                : "We believe real consulting turns complex questions into clear options. That is why we focus on understanding, analysis and prioritization before execution."}
            </p>
            <Link className="button button--outline-light" to="/about">
              {lang === "ar" ? "تعرف على فكرة" : "Discover FIKRA"}{" "}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow={lang === "ar" ? "طريقة العمل" : "How We Work"}
            title={
              lang === "ar"
                ? "من السؤال إلى خطة قابلة للتنفيذ"
                : "From the question to an actionable plan"
            }
          />
          <div className="process-grid">
            {process.map(([Icon, title, text], index) => (
              <div className="process-card reveal" key={title}>
                <div className="process-index">0{index + 1}</div>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="section-head-row">
            <SectionHeading
              eyebrow={lang === "ar" ? "المعرفة" : "Insights"}
              title={
                lang === "ar"
                  ? "أفكار تساعدك على اتخاذ قرار أفضل"
                  : "Insights for better business decisions"
              }
            />
            <Link to="/insights" className="text-link">
              {lang === "ar" ? "كل المقالات" : "All insights"}{" "}
              <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="articles-grid">
            {articles.map((article, index) => (
              <Link
                to={`/insights/${article.slug}`}
                className="article-card reveal"
                key={article.slug}
              >
                <span className="article-index">0{index + 1}</span>
                <h3>{t(article.title)}</h3>
                <p>{t(article.excerpt)}</p>
                <span className="card-link">
                  {lang === "ar" ? "اقرأ المقال" : "Read article"}{" "}
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container cta-panel reveal">
          <div>
            <span className="eyebrow eyebrow--on-dark">
              {lang === "ar" ? "الخطوة التالية" : "Next Step"}
            </span>
            <h2>
              {lang === "ar"
                ? "عندك فكرة أو مشروع قائم وتحتاج رؤية أوضح؟"
                : "Have an idea or existing business and need a clearer view?"}
            </h2>
          </div>
          <Link to="/contact" className="button button--gold">
            {lang === "ar" ? "ابدأ الاستشارة" : "Start a Consultation"}{" "}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
