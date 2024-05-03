import './styles.css';
import TopNav from './components/TopNav/TopNav';
import Header from './pages/header/Header';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Product from './pages/product/Product';
import Team from './pages/team/Team';

function App() {
  return (
    <>
      <TopNav />
      <Header />
      <About />
      <Team />
      <Product />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
