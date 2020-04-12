import React from 'react';
import { Colors, Clothing } from '../Enums';
import { Wardrobe } from './CapsuleForm';

interface IProps {
  wardrobe: Wardrobe
}

const CWardrobe = ({ wardrobe }: IProps) => {
  return (
    <div className="wardrobe">
      {wardrobe!.map((clothe) =>
        <div key={"clothing-" + (Math.random()).toString()}>
          <p>{Clothing[clothe[0] as keyof typeof Clothing]} {clothe[1]} {clothe[2].map(colors => Colors[colors as keyof typeof Colors] + ' ')}</p>
        </div>
      )}
    </div>
  )
}

export default CWardrobe;