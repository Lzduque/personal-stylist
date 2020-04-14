import React from 'react';
import { Colors, Clothing } from '../Enums';
import { Wardrobe } from './CapsuleForm';

interface IProps {
  wardrobe: Wardrobe
}

const CWardrobe = ({ wardrobe }: IProps) => {
  return (
    <div className="wardrobe box mw9 center ph4-ns cf fl w-100 w-100-ns pa2">
      <div className="bg-white-40 pa4 br4">
        <h3 className="mt0" >Here is Your Capsule Wardrobe! Enjoy!!</h3>
        <p className="fw4">
          Here are the pieces you are going to need if you want this capsule wardrobe. The quantity and colors you'll need for each piece of clothing are listed below! 
        </p>
        <div className="flex flex-row w-100 cf ma2 v-mid">
          <div className="fw6 w2 w4-ns pa2 mb2 mt0" >
            Clothes
          </div>
          <div className="fw6 w2 pa2 mh2 mb2 tc mt0" >
            #
          </div>
          <div className="fw6 w-100 pa2 mb2 mr2 mt0" >
            Colors
          </div>
        </div>
        {wardrobe!.map((clothe) =>
          <div key={"clothing-" + (Math.random()).toString()} className="flex flex-row w-100 cf ma2 v-mid">
            <div className="w4 pa2 bg-white mb2 ">
              {Clothing[clothe[0] as keyof typeof Clothing]}
            </div>
            <div className="w2 pa2 bg-white mh2 mb2 tc">
              {clothe[1]}
            </div>
            <div className="flex flex-row flex-wrap" >
              {clothe[2].map(colors =>
                <div className="w3 flex flex-wrap bg-white mb2 mr2 tc">
                  {Colors[colors as keyof typeof Colors] + ' '}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CWardrobe;