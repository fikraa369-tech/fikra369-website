import { ArrowUpRight, Eye, Lightbulb, Target, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { SectionHeading } from "../components/SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const { lang } = useLanguage();
  useReveal();
  const values = [
    [
      Lightbulb,
      lang === "ar" ? "نفكر قبل أن ننفذ" : "Think before acting",
      lang === "ar"
        ? "نبدأ بفهم الفكرة والسياق والهدف."
        : "We begin by understanding the idea, context and goal.",
    ],
    [
      Target,
      lang === "ar" ? "نركز على القرار" : "Focus on the decision",
      lang === "ar"
        ? "نقدم ما يساعد على اختيار الخطوة التالية بوضوح."
        : "We focus on what helps choose the next step clearly.",
    ],
    [
      Eye,
      lang === "ar" ? "وضوح وواقعية" : "Clarity & realism",
      lang === "ar"
        ? "لا نعتمد على المبالغة؛ بل على أسئلة وتحليل منطقي."
        : "We avoid exaggeration and rely on logical questions and analysis.",
    ],
    [
      UsersRound,
      lang === "ar" ? "شراكة في التفكير" : "A thinking partner",
      lang === "ar"
        ? "نتعامل مع كل مشروع كحالة لها ظروفها الخاصة."
        : "We treat each business as a case with its own context.",
    ],
  ] as const;
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow eyebrow--on-dark">
            {lang === "ar" ? "من نحن" : "About FIKRA"}
          </span>
          <h1>
            {lang === "ar"
              ? "الفكرة هي البداية. الوضوح هو ما يحركها للأمام."
              : "The idea is the beginning. Clarity moves it forward."}
          </h1>
          <p>
            {lang === "ar"
              ? "منصة استشارية تساعد رواد الأعمال وأصحاب المشاريع على تحويل الأسئلة إلى قرارات وخطوات عملية."
              : "A consulting platform helping entrepreneurs and business owners turn questions into decisions and practical next steps."}
          </p>
        </div>
      </section>
      <section className="section section--light">
        <div className="container about-story">
          <div className="about-story__copy reveal">
            <SectionHeading
              eyebrow={lang === "ar" ? "فلسفتنا" : "Our Philosophy"}
              title={
                lang === "ar"
                  ? "ما نحتاجه غالبًا ليس معلومات أكثر، بل رؤية أوضح."
                  : "Often, what we need is not more information, but a clearer view."
              }
            />
            <p>
              {lang === "ar"
                ? "المشروع الجيد يبدأ من فهم المشكلة، السوق، العميل، وطريقة التشغيل. دور FIKRA هو تنظيم هذه الصورة حتى يصبح القرار أكثر اتزانًا وقابلية للتنفيذ."
                : "A strong business starts with understanding the problem, market, customer and operating model. FIKRA organizes that picture so the decision becomes more balanced and actionable."}
            </p>
            <p>
              {lang === "ar"
                ? "نعمل مع الأفكار الجديدة وكذلك الأنشطة القائمة التي تحتاج إلى مراجعة أو تطوير أو توسع."
                : "We work with new ideas as well as existing businesses that need review, development or expansion."}
            </p>
          </div>
          <div className="about-story__visual reveal">
            <img
              src="/assets/about/fikra_about_us_02.png"
              alt="FIKRA philosophy"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow={lang === "ar" ? "قيمنا" : "Our Principles"}
            title={
              lang === "ar"
                ? "كيف نفكر في العمل الاستشاري"
                : "How we approach consulting"
            }
          />
          <div className="values-grid">
            {values.map(([Icon, title, text]) => (
              <div className="value-card reveal" key={title}>
                <span className="icon-box">
                  <Icon size={25} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow={lang === "ar" ? "قصتنا بصريًا" : "Our Story in Visuals"}
            title={
              lang === "ar" ? "من الفكرة إلى الأثر" : "From idea to impact"
            }
          />
          <div className="story-gallery">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <img
                className="reveal"
                key={n}
                src={`/assets/about/fikra_about_us_0${n}.png`}
                alt={`FIKRA story ${n}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section section--cta">
        <div className="container cta-panel reveal">
          <div>
            <span className="eyebrow eyebrow--on-dark">
              {lang === "ar" ? "خلينا نبدأ" : "Let’s begin"}
            </span>
            <h2>
              {lang === "ar"
                ? "ما القرار الذي تحاول الوصول إليه الآن؟"
                : "What decision are you trying to make now?"}
            </h2>
          </div>
          <Link to="/contact" className="button button--gold">
            {lang === "ar" ? "تحدث معنا" : "Talk to us"}{" "}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
