import React from 'react';
import { Colors, Clothing, HexColor } from '../Enums';
import { Wardrobe } from './CapsuleForm';

interface IProps {
  wardrobe: Wardrobe
}

const CWardrobe = ({ wardrobe }: IProps) => {
  return (
    <div className="wardrobe box mw9 flex justify-center center ph4-ns cf fl w-100 w-100-ns pa2">
      <div className="bg-white-40 pa4 br4 tc ">
        <h3 className="mt0" >Here is Your Capsule Wardrobe! Enjoy!!</h3>
        <p className="fw4">
          Here are the pieces you are going to need if you want this capsule wardrobe. The quantity and colors you'll need for each piece of clothing are listed below! 
        </p>
        <table className="center collapse">
          <tr className="bg-blue white" >
            <th className="tl pa2 bg-white-30" >
              Clothes
            </th>
            <th className="pa2 bg-white-30">
              #
            </th>
            <th className="flex flex-row flex-wrap pa2 bg-white-30" >
              Colors
            </th>
          </tr>
          {wardrobe!.map((clothe) =>
            <tr key={"clothing-" + (Math.random()).toString()} className="">
              <td className="pa2 bg-white-30 tl">
                {Clothing[clothe[0] as keyof typeof Clothing]}
              </td>
              <td className="pa2 bg-white-30">
                {clothe[1]}
              </td>
              <td className="flex flex-row flex-wrap pa2 bg-white-30" >
                {clothe[2].map(colors =>
                    <div style={{ backgroundColor: HexColor[colors as keyof typeof HexColor] }} className="mr2 pv3 w2" >
                  </div>
                )}
              </td>
            </tr>
          )}
        </table>
      </div>
    </div>
  )
}

export default CWardrobe;