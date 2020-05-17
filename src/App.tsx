import React, { useState, useEffect, CSSProperties } from 'react';
import CapsuleForm from './Components/CapsuleForm';
import { Season, Style, NumberOfOutfits, HexColor } from './Enums';
import { Capsule } from './types';
import About from './Components/About';

const App = () => {
  const [appStyle, setAppStyle] = useState<CSSProperties | undefined>({
    backgroundImage: "linear-gradient(-225deg, #fff 0%, #fff 29%, #fff 67%, #fff 100%)"
  });

  const [capsule, setCapsule] = useState<Capsule>({
    season: "AutumnWinter" as Season,
    style: "Casual" as Style,
    numberOfOutfits: "From10to20" as NumberOfOutfits,
    colors: {
      mains: [],
      neutrals: [],
      accents: []
    },
    preferences: []
  })

  useEffect(() => {
    const allColors = [
      ...capsule.colors.mains || [],
      ...capsule.colors.neutrals || [],
      ...capsule.colors.accents || []
    ];
    const hexColors = allColors
      ? allColors.map((color) => HexColor[color as keyof typeof HexColor])
      : ["#fff", "#fff", "#fff", "#fff"]
    setAppStyle({
      backgroundImage: !allColors
        ? "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)"
        : allColors.length === 1
          ? `linear-gradient(90deg, ${hexColors[0]} 0%, ${hexColors[0]} 29%, ${hexColors[0]} 67%, ${hexColors[0]} 100%)`
          : allColors.length === 2
            ? `linear-gradient(45deg, ${hexColors[0]} 0%, ${hexColors[1]} 99%, ${hexColors[1]} 100%)`
            : allColors.length === 3
              ? `radial-gradient(circle 248px at center, ${hexColors[0]}  0%, ${hexColors[1]}  47%, ${hexColors[2]} 100%)`
              : allColors.length === 4
                ? `linear-gradient(90deg, ${hexColors[0]} 0%, ${hexColors[1]} 29%, ${hexColors[2]} 67%, ${hexColors[3]} 100%)`
                : allColors.length === 5
                  ? `linear-gradient(90deg, ${hexColors[0]} 0%, ${hexColors[1]} 25%, ${hexColors[2]} 50%, ${hexColors[3]} 75%, ${hexColors[4]} 100%)`
                  : allColors.length === 6
                    ? `linear-gradient(45deg, ${hexColors[0]} 0%, ${hexColors[1]} 20%, ${hexColors[2]} 40%, ${hexColors[3]} 65%, ${hexColors[4]} 85%, ${hexColors[5]} 100%)`
                    : allColors.length === 7
                      ? `linear-gradient(-45deg, ${hexColors[0]} 0%, ${hexColors[1]} 17%, ${hexColors[2]} 34%, ${hexColors[3]} 50%, ${hexColors[4]} 67%, ${hexColors[5]} 84%, ${hexColors[6]} 100%)`
                      : allColors.length === 8
                        ? `linear-gradient(90deg, ${hexColors[0]} 0%, ${hexColors[1]} 14%, ${hexColors[2]} 28%, ${hexColors[3]} 43%, ${hexColors[4]} 57%, ${hexColors[5]} 70%, ${hexColors[6]} 84%, ${hexColors[7]} 100%)`
                        : allColors.length === 9
                          ? `linear-gradient(-45deg, ${hexColors[0]} 0%, ${hexColors[1]} 12%, ${hexColors[2]} 25%, ${hexColors[3]} 37%, ${hexColors[4]} 50%, ${hexColors[5]} 62%, ${hexColors[6]} 75%, ${hexColors[7]} 87%, ${hexColors[8]} 100%)`
                          : allColors.length === 10
                            ? `linear-gradient(45deg, ${hexColors[0]} 0%, ${hexColors[1]} 11%, ${hexColors[2]} 22%, ${hexColors[3]} 33%, ${hexColors[4]} 44%, ${hexColors[5]} 55%, ${hexColors[6]} 66%, ${hexColors[7]} 77%, ${hexColors[8]} 88%, ${hexColors[9]} 100%)`
                            : allColors.length === 11
                              ? `linear-gradient(90deg, ${hexColors[0]} 0%, ${hexColors[1]} 10%, ${hexColors[2]} 20%, ${hexColors[3]} 30%, ${hexColors[4]} 40%, ${hexColors[5]} 50%, ${hexColors[6]} 60%, ${hexColors[7]} 70%, ${hexColors[8]} 80%, ${hexColors[9]} 90%, ${hexColors[10]} 100%)`
                              : `linear-gradient(45deg, ${hexColors[0]} 0%, ${hexColors[1]} 9%, ${hexColors[2]} 18%, ${hexColors[3]} 27%, ${hexColors[4]} 36%, ${hexColors[5]} 45%, ${hexColors[6]} 54%, ${hexColors[7]} 63%, ${hexColors[8]} 72%, ${hexColors[9]} 81%, ${hexColors[10]} 90%, ${hexColors[11]} 100%)`
    });
  }, [capsule.colors.mains, capsule.colors.neutrals, capsule.colors.accents])

  return (
    <div className="App" style={appStyle}>
      <header className="App-header">
        <h1 className="bw0 bg-black-70 white pv2 ph3 ma0 fw8 tc ttu tracked">
          Personal Stylist
        </h1>
        <h2 id="call" className="bw0 br2 pv2 ph3 fw5 tc tracked" >
          How do you want your capsule wardrobe to be?
        </h2>
        <div className="box flex justify-center center ph4-ns cf fl w-100 w-100-ns pa2">
          <div className="box ba tc bg-black-20 w-100 w-100-l br4 pa4 ma2">
            <About />
          </div>
        </div>
      </header>
      <section>
        <div >
          < CapsuleForm capsule={capsule} setCapsule={setCapsule} />
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
