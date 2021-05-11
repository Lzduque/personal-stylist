import React from 'react';
import { Colors, HexColor } from '../Enums';

interface IProps {
  colors: {
    mains: Colors[];
    neutrals: Colors[];
    accents: Colors[];
  };
}

const Palette = ({ colors }: IProps) => {
  return (
    <div className="container flex flex-row flex-wrap justify-around w-100 mw7 content-center center ph4-ns">
      <div className="box ba bg-black-20 tc w-100 w-100-l br4 pa4 ma2">
        <h3 className="mt0">This is the Palette you created!!</h3>
        <div className="paletteContainer bg-white-50 ">
          <div className="mainPalette flex flex-row mv2 mr2">
            {colors.mains.map((colors) => (
              <div
                key={HexColor[colors as keyof typeof HexColor]}
                style={{
                  backgroundColor: HexColor[colors as keyof typeof HexColor]
                }}
                className="item pv3 w2 ml2"
              ></div>
            ))}
          </div>
          <div className="neutralPalette flex flex-row mv2 mr2">
            {colors.neutrals.map((colors) => (
              <div
                key={HexColor[colors as keyof typeof HexColor]}
                style={{
                  backgroundColor: HexColor[colors as keyof typeof HexColor]
                }}
                className="item pv3 w2 ml2"
              ></div>
            ))}
          </div>
          <div className="accentPalette flex flex-column mb2 mh2 items-center">
            {colors.accents.map((colors) => (
              <div
                key={HexColor[colors as keyof typeof HexColor]}
                style={{
                  backgroundColor: HexColor[colors as keyof typeof HexColor]
                }}
                className="item pv3 w-100 mt2"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Palette;
