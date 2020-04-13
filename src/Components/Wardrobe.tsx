import React from 'react';
import { Colors, Clothing } from '../Enums';
import { Wardrobe } from './CapsuleForm';

interface IProps {
  wardrobe: Wardrobe
}

const CWardrobe = ({ wardrobe }: IProps) => {
  return (
    <div className="wardrobe mw9 center ph3-ns" >
      <div className="cf ph2-ns" >
        <div className="fl w-100 w-100-ns pa2">
          <div className="bg-white-40 pa4 br4 ">
            <h3 className="mt0" >Here is Your Capsule Wardrobe! Enjoy!!</h3>
            {wardrobe!.map((clothe) =>
              <div key={"clothing-" + (Math.random()).toString()} className="mw9 center">
                <div className="cf">
                  <div className="fl w-100 w-15-ns pa2">
                    <div className="bg-white ">
                      {Clothing[clothe[0] as keyof typeof Clothing]}
                    </div>
                  </div>
                  <div className="fl w-50 w-10-ns pa2">
                    <div className="bg-white tc">
                      {clothe[1]}
                    </div>
                  </div>
                  <div className="fl w-50 w-75-ns pa2 flex">
                    {clothe[2].map(colors => 
                      <div className="bg-white w-20 mr2">
                      {Colors[colors as keyof typeof Colors] + ' '}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CWardrobe;