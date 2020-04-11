import React from 'react';
import { Colors } from './Enums';

export default class Wardrobe extends React.Component<{ wardrobe: [[string, number, [Colors]]] | null }, {}> {

  render() {
    return (
      <div className="wardrobe">
        {this.props.wardrobe!.map((clothe) =>
          <div key={"clothing-" + (Math.random()).toString()}>
            <p>{clothe[0]} {clothe[1]} {clothe[2]}</p>
          </div>
        )}
      </div>
    )
  }
}
