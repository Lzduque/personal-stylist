import React from 'react';
import CapsuleForm from './Components/CapsuleForm';
import { Season, Style, NumberOfOutfits } from './Enums';
import { Capsule } from './types';

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
      <footer className="tc bg-black-20 fw4 pa3 mt3 white">
          <h4 className="ma1">Do you like it? Contact Me:</h4>
          <ul className="icons list mb1 pl1">
            <li className="pb1" ><a href="https://github.com/Lzduque"><i className="fab fa-github-alt fa-1x white ph2" ></i></a>  Lzduque</li>
            <li className="pb1" ><i className="fas fa-phone-alt fa-1x ph2"></i>   647.862.8984</li>
            <li className="pb1" ><a href="https://www.linkedin.com/in/leticia-zamolo-duque-0266a233/"><i className="fab fa-linkedin fa-1x white ph2" ></i></a>  Leticia Zamolo Duque</li>
            <li ><i className="fas fa-paper-plane fa-1x ph2"></i>   lzduque@hotmail.com</li>
          </ul>
      </footer>
    </div>
  );
}

export default App;
