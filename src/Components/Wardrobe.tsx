import React from 'react';
import { Colors, Clothing } from '../Enums';

interface IProps {
  wardrobe: [[Clothing, number, [Colors]]] | null
}

const Wardrobe = ({wardrobe}: IProps) => {
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

export default Wardrobe;