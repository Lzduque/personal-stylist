import React, { useState, useEffect }  from 'react';
import { Clothing, HexColor } from '../Enums';
import { Wardrobe } from './CapsuleForm';

interface IProps {
  wardrobe: Wardrobe
}


const CWardrobe = ({ wardrobe }: IProps) => {
  const [textCopied, setTextCopied] = useState<boolean>(false);

  useEffect(() => {
    setTextCopied(false);
  }, [window.location])


  return (
    <div className="wardrobe box mw9 flex justify-center center ph4-ns cf fl w-100 w-100-ns pa2">
      <div className="ba bg-black-10 pa4 br4 tc ">
        <h3 className="mt0" >Here is Your Capsule Wardrobe! Enjoy!!</h3>
        <p className="fw4">
          Here are the pieces you are going to need if you want this capsule wardrobe. The quantity and colors you'll need for each piece of clothing are listed below! 
        </p>
        <table className="center collapse">
          <tbody>
          <tr className="bg-dark-gray white" >
            <th className="tl pa2 bg-black-20" >
              Clothes
            </th>
            <th className="pa2 bg-black-20">
              #
            </th>
            <th className="flex flex-row flex-wrap pa2 bg-black-20" >
              Colors
            </th>
          </tr>
          {wardrobe!.map((clothe) =>
            <tr key={"clothing-" + (Math.random()).toString()} className="">
              <td className="pa2 bg-white-50 tl">
                {Clothing[clothe[0] as keyof typeof Clothing]}
              </td>
              <td className="pa2 bg-white-50">
                {clothe[1]}
              </td>
              <td className="flex flex-row flex-wrap pa2 bg-white-50" >
                {clothe[2].map(colors =>
                  <div key={HexColor[colors as keyof typeof HexColor]} style={{ backgroundColor: HexColor[colors as keyof typeof HexColor] }} className="mr2 mt2 pv3 w2" >
                  </div>
                )}
              </td>
            </tr>
          )}
          </tbody>
        </table>
        <div className="tc mt4" >
          <button onClick={() => { 
            setTextCopied(true);
            navigator.clipboard.writeText(window.location.toString()) 
            }} className="bw0 br2 bg-gray pv2 ph3 white fw5 tc ttu tracked bg-animate hover-bg-dark-gray shadow-5" >
            {textCopied === true? 'Link copied!' : 'Share your Capsule Wardrobe!'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CWardrobe;