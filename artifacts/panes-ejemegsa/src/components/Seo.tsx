import { useEffect } from 'react';

type SeoProps = { title: string; description: string };
export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | Panes con Pollo Ejemegsa`;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${title} | Panes con Pollo Ejemegsa`);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', `${title} | Panes con Pollo Ejemegsa`);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, [title, description]);
  return null;
}
