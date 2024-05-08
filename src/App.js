import './styles.css';
import TopNav from './components/TopNav/TopNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/header/Header';
import About from './pages/about/About';
import Product from './pages/product/Product';
import Contact from './pages/contact/Contact';
import Team from './pages/team/Team';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <TopNav />
      <Header />
      <About />
      <Product />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;