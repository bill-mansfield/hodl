import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoinpaprikaAPI from '@coinpaprika/api-nodejs-client';
import Form from './components/form';

export default function App() {

  const client = new CoinpaprikaAPI();
  client.getGlobal().then(console.log).catch(console.error);
  
  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  );
}
