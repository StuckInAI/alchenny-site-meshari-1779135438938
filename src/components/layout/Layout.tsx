import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from '@/components/BackToTop';

export default function Layout() {
  return (
    <>
      <div className="topAccent" />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
