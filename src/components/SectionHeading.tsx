import type { ReactNode } from 'react';

export function SectionHeading({ eyebrow, title, text, align = 'start' }: { eyebrow: string; title: string; text?: string; align?: 'start' | 'center'; }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function IconBox({ children }: { children: ReactNode }) {
  return <span className="icon-box">{children}</span>;
}
