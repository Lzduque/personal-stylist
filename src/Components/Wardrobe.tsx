import React from 'react';
import { Colors, Clothing } from '../Enums';
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
        <table className="center">
          <tr>
            <th className="tl white pa2 bg-white-20" >
              Clothes
            </th>
            <th className="mh2 white pa2 bg-white-20">
              #
            </th>
            <th className="flex white flex-row flex-wrap pa2 bg-white-20" >
              Colors
            </th>
          </tr>
          {wardrobe!.map((clothe) =>
            <tr key={"clothing-" + (Math.random()).toString()} className="">
              <td className="white pa2 bg-white-20">
                {Clothing[clothe[0] as keyof typeof Clothing]}
              </td>
              <td className="white mh2 pa2 bg-white-20">
                {clothe[1]}
              </td>
              <td className="flex flex-row flex-wrap white pa2 bg-white-20" >
                {clothe[2].map(colors =>
                  <div className="mr2">
                    {Colors[colors as keyof typeof Colors] + ' '}
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