import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { VisualDevOverview, VisualDevProject } from './pages/VisualDev';
import { Personal, Animations, Photography } from './pages/Collections';
import About from './pages/About';

const titles = { '/': 'Candace Tang', '/vis-dev': 'VIS DEV. | Candace Tang', '/personal': 'PERSONAL. | Candace Tang', '/animations': 'ANIMATIONS! | Candace Tang', '/photography': 'PHOTOGRAPHY. | Candace Tang', '/about': 'ABOUT ME. | Candace Tang' };
function ScrollTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0); document.title = titles[pathname] || 'VIS DEV. | Candace Tang'; }, [pathname]); return null; }
export default function App() { return <><ScrollTop /><Header /><Routes><Route path="/" element={<Home />} /><Route path="/vis-dev" element={<VisualDevOverview />} /><Route path="/vis-dev/:slug" element={<VisualDevProject />} /><Route path="/personal" element={<Personal />} /><Route path="/animations" element={<Animations />} /><Route path="/photography" element={<Photography />} /><Route path="/about" element={<About />} /><Route path="*" element={<Home />} /></Routes><Footer /></>; }
