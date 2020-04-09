import React from 'react';
import './App.css';
import { CapsuleForm } from './CapsuleForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Personal Stylist
        </h1>
        <h2>
          How do you want your capsule wardrobe to be?
        </h2>
        <div className="mt-3">
          < CapsuleForm />
        </div>
      </header>
    </div>
  );
}

export default App;
