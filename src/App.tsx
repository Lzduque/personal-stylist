import React from 'react';
import CapsuleForm from './Components/CapsuleForm';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="bw0 bg-blue washed-blue pv2 ph3 fw8 tc ttu tracked">
          Personal Stylist
        </h1>
        <h2 className="dark-gray bw0 br2 pv2 ph3 fw5 tc tracked" >
          How do you want your capsule wardrobe to be?
        </h2>
        <div >
          < CapsuleForm />
        </div>
      </header>
    </div>
  );
}

export default App;
