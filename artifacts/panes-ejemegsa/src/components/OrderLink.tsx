import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';
import { whatsappUrl } from '@/data/siteConfig';

export default function OrderLink({ className = 'btn btn-primary', children = 'Consultar por WhatsApp' }: { className?: string; children?: string }) {
  const destination = whatsappUrl();
  if (destination) return <a className={className} href={destination} target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp-order"><MessageCircle size={17} />{children}<ArrowUpRight size={16} /></a>;
  return <Link className={className} href="/contacto" data-testid="link-contact-order"><MessageCircle size={17} />{children}<ArrowUpRight size={16} /></Link>;
}
