import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../LanguageContext";
import { siteConfig } from "../config";
import { Brand } from "./Brand";

type IconProps = {
  size?: number;
};

/* ==============================
   WhatsApp
================================ */

function WhatsAppIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.7C20.5 16.39 16.68 20.2 12 20.2C10.57 20.2 9.23 19.85 8.05 19.23L3.5 20.5L4.78 16.08C4.08 14.82 3.7 13.4 3.7 11.95C3.7 7.27 7.52 3.45 12.2 3.45C16.88 3.45 20.5 7.02 20.5 11.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9.1 8.2C9.33 8.2 9.54 8.31 9.66 8.58L10.35 10.1C10.45 10.32 10.42 10.51 10.28 10.7L9.75 11.38C10.42 12.72 11.45 13.76 12.8 14.45L13.46 13.92C13.66 13.77 13.86 13.75 14.08 13.85L15.6 14.54C15.86 14.66 15.98 14.86 15.98 15.1V16.08C15.98 16.55 15.59 16.94 15.12 16.94C11.02 16.94 7.7 13.62 7.7 9.52C7.7 9.05 8.09 8.66 8.56 8.66L9.1 8.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ==============================
   Instagram
================================ */

function InstagramIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />

      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

/* ==============================
   Facebook
================================ */

function FacebookIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M13.5 22V13.7H16.3L16.7 10.5H13.5V8.45C13.5 7.52 13.76 6.89 15.1 6.89H16.8V4.03C16.5 3.99 15.49 3.9 14.31 3.9C11.84 3.9 10.15 5.41 10.15 8.18V10.5H7.35V13.7H10.15V22H13.5Z" />
    </svg>
  );
}

/* ==============================
   LinkedIn
================================ */

function LinkedinIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.5 8.1H3.3V20H6.5V8.1ZM4.9 3C3.85 3 3 3.86 3 4.9C3 5.95 3.85 6.8 4.9 6.8C5.95 6.8 6.8 5.95 6.8 4.9C6.8 3.86 5.95 3 4.9 3ZM20.8 13.15C20.8 9.57 18.89 7.9 16.34 7.9C14.28 7.9 13.36 9.03 12.85 9.83V8.1H9.65V20H12.85V14.1C12.85 12.55 13.14 11.05 15.07 11.05C16.97 11.05 17 12.83 17 14.2V20H20.2L20.8 13.15Z" />
    </svg>
  );
}

/* ==============================
   TikTok
================================ */

function TikTokIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M14.4 3H17.1C17.28 4.16 17.77 5.18 18.57 5.98C19.36 6.77 20.38 7.27 21.5 7.45V10.15C19.93 10.13 18.47 9.65 17.2 8.82V15.25C17.2 18.43 14.62 21 11.45 21C8.27 21 5.7 18.43 5.7 15.25C5.7 12.08 8.27 9.5 11.45 9.5C11.77 9.5 12.1 9.53 12.4 9.58V12.35C12.11 12.25 11.79 12.2 11.45 12.2C9.77 12.2 8.4 13.57 8.4 15.25C8.4 16.94 9.77 18.3 11.45 18.3C13.14 18.3 14.5 16.94 14.5 15.25L14.4 3Z" />
    </svg>
  );
}

/* ==============================
   YouTube
================================ */

function YoutubeIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M21.6 7.2C21.37 6.33 20.69 5.65 19.82 5.42C18.25 5 12 5 12 5C12 5 5.75 5 4.18 5.42C3.31 5.65 2.63 6.33 2.4 7.2C2 8.78 2 12 2 12C2 12 2 15.22 2.4 16.8C2.63 17.67 3.31 18.35 4.18 18.58C5.75 19 12 19 12 19C12 19 18.25 19 19.82 18.58C20.69 18.35 21.37 17.67 21.6 16.8C22 15.22 22 12 22 12C22 12 22 8.78 21.6 7.2ZM10 15.2V8.8L15.5 12L10 15.2Z" />
    </svg>
  );
}

/* ==============================
   X / Twitter
================================ */

function XIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M18.9 3H22L15.23 10.74L23.2 21H16.96L12.07 14.61L6.49 21H3.38L10.62 12.72L3 3H9.4L13.82 8.84L18.9 3ZM17.81 19.19H19.53L8.46 4.71H6.61L17.81 19.19Z" />
    </svg>
  );
}

export function Footer() {
  const { lang } = useLanguage();

  const socialLinks = [
    {
      name: "WhatsApp",
      url: siteConfig.social.whatsapp,
      Icon: WhatsAppIcon,
    },
    {
      name: "Instagram",
      url: siteConfig.social.instagram,
      Icon: InstagramIcon,
    },
    {
      name: "Facebook",
      url: siteConfig.social.facebook,
      Icon: FacebookIcon,
    },
    {
      name: "LinkedIn",
      url: siteConfig.social.linkedin,
      Icon: LinkedinIcon,
    },
    {
      name: "TikTok",
      url: siteConfig.social.tiktok,
      Icon: TikTokIcon,
    },
    {
      name: "YouTube",
      url: siteConfig.social.youtube,
      Icon: YoutubeIcon,
    },
    {
      name: "X",
      url: siteConfig.social.x,
      Icon: XIcon,
    },
  ];

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand-col">
          <Brand />

          <p>
            {lang === "ar"
              ? "استشارات تأسيس الشركات، استشارات المشاريع وتطوير الأعمال في دولة الإمارات."
              : "Company formation consulting, project consulting and business development in the UAE."}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>{lang === "ar" ? "روابط سريعة" : "Quick Links"}</h3>

          <div className="footer-links">
            <Link to="/about">{lang === "ar" ? "من نحن" : "About"}</Link>

            <Link to="/services">{lang === "ar" ? "الخدمات" : "Services"}</Link>

            <Link to="/insights">{lang === "ar" ? "المعرفة" : "Insights"}</Link>

            <Link to="/privacy">
              {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3>{lang === "ar" ? "تواصل معنا" : "Contact"}</h3>

          <div className="footer-contact">
            <div>
              <MapPin size={18} />

              <span>
                {lang === "ar" ? siteConfig.locationAr : siteConfig.locationEn}
              </span>
            </div>

            {siteConfig.phone && (
              <a href={`tel:${siteConfig.phone}`}>
                <Phone size={18} />
                <span>{siteConfig.phone}</span>
              </a>
            )}

            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`}>
                <Mail size={18} />
                <span>{siteConfig.email}</span>
              </a>
            )}
          </div>

          {/* Social Media */}
          <div className="social-row">
            {socialLinks
              .filter((social) => Boolean(social.url))
              .map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                >
                  <Icon size={19} />
                </a>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="footer-cta-card">
          <span className="eyebrow">
            {lang === "ar"
              ? "ابدأ من السؤال الصحيح"
              : "Start with the right question"}
          </span>

          <h3>
            {lang === "ar" ? "عندك فكرة مشروع؟" : "Have a business idea?"}
          </h3>

          <Link to="/contact" className="text-link">
            {lang === "ar" ? "تحدث معنا" : "Talk to us"}

            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} FIKRA 369</span>

        <span>
          {lang === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}
        </span>
      </div>
    </footer>
  );
}
