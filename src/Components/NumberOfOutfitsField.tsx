import React from 'react';
import { NumberOfOutfits } from '../Enums';

interface IProps {
  selectedNumberOfOutfits: NumberOfOutfits,
  onChange: any
}

const NumberOfOutfitsField = ({selectedNumberOfOutfits, onChange}: IProps) => {
  return (
    <div className="numberOfOutfits">
      <label>
        Number of Outfits:
          <br />
        <select name="numberOfOutfits" value={selectedNumberOfOutfits} onChange={onChange} >
          {Object.keys(NumberOfOutfits).map((k) =>
            <option key={"numberOfOutfits-" + (Math.random()).toString()} value={k}>{NumberOfOutfits[k as keyof typeof NumberOfOutfits]}</option>
          )}
        </select>
      </label>
    </div>
  )
}

export default NumberOfOutfitsField;