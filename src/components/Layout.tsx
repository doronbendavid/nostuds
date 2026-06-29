import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="site-root">
      <Nav />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
