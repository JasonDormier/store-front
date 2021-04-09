import './App.css';

import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Products from "./components/store-front/products.js";
import SimpleCart from './components/cart/simple-cart.js';
import { Route } from 'react-router-dom';
//import Cart from './components/sh'


function App() {
  return (
    <>
      <Header />
      <SimpleCart />
      <main>
        <Route exact path="/" component={Products} />
        {/* <Route exact path="/" component={Cart} /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
