import React, { useState, useEffect } from 'react';
import { Clothing, HexColor } from '../Enums';
import { Wardrobe } from '../types';
import SharePopUp from './SharePopUp';

interface IProps {
  wardrobe: Wardrobe;
}

const CWardrobe = ({ wardrobe }: IProps) => {
  const [clickOnShare, setClickOnShare] = useState<boolean>(false);

  useEffect(() => {
    setClickOnShare(false);
  }, []);

  return (
    <div className="container flex flex-row flex-wrap justify-around mw9 content-center center ph4-ns">
      <div className="box ba bg-black-20 tc w-100 w-100-l br4 pa4 ma2">
        <h3 className="mt0">Here is Your Capsule Wardrobe! Enjoy!!</h3>
        <p className="fw4">
          Here are the pieces you are going to need if you want this capsule
          wardrobe. The quantity and colors you'll need for each piece of
          clothing are listed below!
        </p>
        <p className="fw4">
          Feel free to tweak it as you seem fit! These are just recommendations!
          But keep in mind that if you take off one pair of pants, for example,
          you will have fewer outfits then you requested initially.
        </p>
        <table className="center collapse">
          <tbody>
            <tr className="bg-black-20 white">
              <th className="tl pa2 bg-black-20">Clothes</th>
              <th className="pa2 bg-black-20">#</th>
              <th className="flex flex-row flex-wrap pa2 bg-black-20">
                Colors
              </th>
            </tr>
            {wardrobe!.map((clothe) => (
              <tr key={'clothing-' + Math.random().toString()} className="">
                <td className="pa2 bg-white-50 tl black ">
                  {Clothing[clothe[0] as keyof typeof Clothing]}
                </td>
                <td className="pa2 bg-white-50 black">{clothe[1]}</td>
                <td className="flex flex-row flex-wrap pa2 bg-white-50">
                  {clothe[2].map((colors) => (
                    <div
                      key={HexColor[colors as keyof typeof HexColor]}
                      style={{
                        backgroundColor:
                          HexColor[colors as keyof typeof HexColor]
                      }}
                      className="mr2 mt2 pv3 w2"
                    ></div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="tc mt4">
          <div className="btn">
            <button
              onClick={() => {
                setClickOnShare(true);
              }}
              className="bw0 br2 bg-gray pv2 ph3 white fw5 tc ttu tracked bg-animate hover-bg-dark-gray shadow-5"
            >
              Share your Capsule Wardrobe!
            </button>
          </div>
          <div className="flex justify-center">
            {clickOnShare && <SharePopUp setClickOnShare={setClickOnShare} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CWardrobe;
