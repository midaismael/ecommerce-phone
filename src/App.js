import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import {Routes, Route, Navigate} from 'react-router-dom'; 
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/Products" element={<Product/>} />
    <Route exact path="/Products/:id" element={<ProductDetail/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/contact" element={<Contact/>} />
    <Route exact path="/" element={<Navigate replace to="/home"/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
