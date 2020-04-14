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
        {wardrobe!.map((clothe) =>
          <div key={"clothing-" + (Math.random()).toString()} className="flex flex-row w-100 cf ma2">
            <div className="w1-ns pa2 bg-white ">
              {Clothing[clothe[0] as keyof typeof Clothing]}
            </div>
            <div className="w2-ns pa2 bg-white mh2 tc">
              {clothe[1]}
            </div>
            {clothe[2].map(colors =>
              <div className="w-10-ns pa2 flex bg-white mr2">
                {Colors[colors as keyof typeof Colors] + ' '}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CWardrobe;