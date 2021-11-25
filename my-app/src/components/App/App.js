import React from 'react'
import './App.css';
import Header from '../header/header';
import Banner from '../banner/banner';
import Content from '../content/content';
import Footer from '../footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
