import '../../styles/globals.css';
import Content from '@/components/Layout/Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Company from './company';
import Contacts from './contacts';
import Home from './home';
import NewProject from './newProject';
import { useEffect, useState } from 'react';
import Footer from '@/components/Layout/Footer';
import NavigationMenuMobile from '@/components/Layout/NavigationMenu/MenuMobile';
import NavigationMenuDesktop from '@/components/Layout/NavigationMenu/MenuDesktop';
import AppProvider, { contextApp } from '../contexts/index';
import Projects from './projects';
import EditProject from './editProject';

/* const isBrowser = typeof window !== 'undefined'; */

export default function AppHome() {
  const [isBrowser, setIsBrowser] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpened, setIsOpened] = useState(true);

  const Open = () => {
    setOpenMenu(true);
  };

  const Close = () => {
    setOpenMenu(false);
  };

  const IsOpenMenus = () => {
    if (innerWidth < 950) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  };

  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined');

    function handleWindowResize() {
      if (typeof window === 'undefined') return null;
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    }

    window.addEventListener('resize', IsOpenMenus);

    return () => {
      window.removeEventListener('resize', IsOpenMenus);
    };
  }, []);
  return isBrowser ? (
    <>
      <Router>
        {isOpened ? (
          <NavigationMenuDesktop />
        ) : (
          <NavigationMenuMobile close={Close} open={Open} openMenu={openMenu} />
        )}

        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/newProject" element={<NewProject />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/editProject/:id" element={<EditProject />} />
          </Routes>
        </Content>
        <Footer />
      </Router>
    </>
  ) : null;
}
