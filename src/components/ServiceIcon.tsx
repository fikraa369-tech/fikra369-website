import { BriefcaseBusiness, Building2, ChartNoAxesCombined, TrendingUp } from 'lucide-react';

export function ServiceIcon({ name, size = 26 }: { name: 'building' | 'briefcase' | 'chart' | 'growth'; size?: number }) {
  const props = { size, strokeWidth: 1.8 };
  if (name === 'building') return <Building2 {...props} />;
  if (name === 'briefcase') return <BriefcaseBusiness {...props} />;
  if (name === 'chart') return <ChartNoAxesCombined {...props} />;
  return <TrendingUp {...props} />;
}
