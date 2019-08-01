import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
