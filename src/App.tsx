import React from 'react';
import CapsuleForm from './Components/CapsuleForm';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="bw0 bg-dark-gray white pv2 ph3 fw8 tc ttu tracked">
          Personal Stylist
        </h1>
        <h2 className="bw0 br2 pv2 ph3 fw5 tc tracked" >
          How do you want your capsule wardrobe to be?
        </h2>
      </header>
      <section>
        <div >
          < CapsuleForm />
        </div>
      </section>
    </div>
  );
}

export default App;
