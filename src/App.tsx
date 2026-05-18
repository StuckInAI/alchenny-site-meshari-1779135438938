import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Recipes from '@/pages/Recipes';
import Store from '@/pages/Store';
import WorkWithMe from '@/pages/WorkWithMe';
import CroissantCrew from '@/pages/CroissantCrew';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/store" element={<Store />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
          <Route path="/croissant-crew" element={<CroissantCrew />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
