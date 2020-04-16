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
      <footer className="bg-black-20 tc fw4 pa2 mt3 white">
        <h4 className="ma1">Do you like it? Contact Me:</h4>
        <ul className="icons list mb1 pl1">
          <li><i className="fas fa-phone-alt fa-1x pb1"></i>   647.862.8984</li>
          <li><i className="fas fa-paper-plane fa-1x pb1"></i>   lzduque@hotmail.com</li>
          <li><a href="https://www.linkedin.com/in/leticia-zamolo-duque-0266a233/"><i className="fab fa-linkedin-in fa-2x ph2 white " ></i></a>
            <a href="https://github.com/Lzduque"><i className="fab fa-github-alt fa-2x ph2 white " ></i></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
