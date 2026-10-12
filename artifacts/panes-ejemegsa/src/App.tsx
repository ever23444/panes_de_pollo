import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import SiteLayout from '@/components/SiteLayout';
import Seo from '@/components/Seo';
import Home from '@/pages/Home';
import Nosotros from '@/pages/Nosotros';
import Menu from '@/pages/Menu';
import Recursos from '@/pages/Recursos';
import Creadores from '@/pages/Creadores';
import Contacto from '@/pages/Contacto';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { Link } from 'wouter';

const queryClient = new QueryClient();

function NotFound() {
  return <main id="contenido" className="page-main not-found"><Seo title="Página no encontrada" description="La página que buscas no está disponible. Explora Panes con Pollo Ejemegsa desde Jucuapa." /><span className="eyebrow">Nos perdimos por el camino</span><h1>Esta página no está aquí.</h1><p>Pero el sabor de Jucuapa sí. Vuelve al inicio y sigamos.</p><Link href="/" className="btn btn-primary">Volver al inicio</Link></main>;
}

function Router() {
  return <RoutedErrorBoundary><SiteLayout><Switch>
    <Route path="/" component={Home} />
    <Route path="/nosotros" component={Nosotros} />
    <Route path="/menu" component={Menu} />
    <Route path="/recursos" component={Recursos} />
    <Route path="/creadores" component={Creadores} />
    <Route path="/contacto" component={Contacto} />
    <Route component={NotFound} />
  </Switch></SiteLayout></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;
