export const siteConfig = {
  brand: 'Panes con Pollo Ejemegsa',
  slogan: 'Tradición jucuapense en cada bocado.',
  location: 'Jucuapa, El Salvador',
  // Completar únicamente con datos confirmados del negocio.
  whatsappNumber: '',
  email: '',
  social: {
    facebook: { label: 'Panes con Pollo', url: 'https://www.facebook.com/' },
    instagram: { label: '@panesconpollo.sv', url: 'https://www.instagram.com/panesconpollo.sv/' },
    tiktok: { label: '@panesconpollo.sv', url: 'https://www.tiktok.com/@panesconpollo.sv' },
  },
} as const;

export const whatsappUrl = (message = 'Hola, quisiera información sobre los panes con pollo.') => {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, '');
  return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}` : null;
};
