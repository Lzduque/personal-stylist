import React from 'react';
import { Colors, Clothing } from './Enums';

export default class Wardrobe extends React.Component<{ wardrobe: [[Clothing, number, [Colors]]] | null }, {}> {

  render() {
    return (
      <div className="wardrobe">
        {this.props.wardrobe!.map((clothe) =>
          <div key={"clothing-" + (Math.random()).toString()}>
            <p>{Clothing[clothe[0] as keyof typeof Clothing]} {clothe[1]} {clothe[2].map(colors => Colors[colors as keyof typeof Colors] + ' ')}</p>
          </div>
        )}
      </div>
    )
  }
}
