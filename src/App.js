import React from 'react';
import './App.css';
import { Header, Content, Footer, Routes } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content>
        <Routes/>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
