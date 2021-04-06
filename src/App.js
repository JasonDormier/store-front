import './App.css';

import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Products from "./components/store-front/products.js";
import { Provider } from 'react-redux';
import store from './store/index.js';

function App() {
  return (
    <>
      <Provider store={store()}>
        <Header />
        <main>
          <Products />
        </main>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
