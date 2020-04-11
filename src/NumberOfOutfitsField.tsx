import React from 'react';
import { NumberOfOutfits } from './CapsuleForm';

export class NumberOfOutfitsField extends React.Component<{ selectedNumberOfOutfits: NumberOfOutfits; onChange: (e: any) => void; }, {}> {
  render() {
    return (
      <div className="numberOfOutfits">
        <label>
          Number of Outfits:
          <br />
          <select name="numberOfOutfits" value={this.props.selectedNumberOfOutfits} onChange={this.props.onChange} >
            {Object.keys(NumberOfOutfits).map((k) =>
              <option key={"numberOfOutfits-" + (Math.random()).toString()} value={k}>{NumberOfOutfits[k as keyof typeof NumberOfOutfits]}</option>
            )}
          </select>
        </label>
      </div>
    )
  }
}

