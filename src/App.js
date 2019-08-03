import React from 'react';
import './App.css';
import { Header, Content, Footer, StartPage } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content>
        <h1>Hrodna</h1>
        <StartPage/>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
