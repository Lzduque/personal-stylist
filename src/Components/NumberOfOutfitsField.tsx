import React from 'react';
import { NumberOfOutfits } from '../Enums';

interface IProps {
  selectedNumberOfOutfits: NumberOfOutfits,
  onChange: any
}

const NumberOfOutfitsField = ({selectedNumberOfOutfits, onChange}: IProps) => {
  return (
    <div className="numberOfOutfits mt0 mb3-ns">
      <label className="fw7 f6" >
        <h3 className="mt0" >Number of Outfits:</h3>
        <select name="numberOfOutfits" className="w-100 f6 h2 bg-white ma1 b--silver" value={selectedNumberOfOutfits} onChange={onChange} >
          {Object.keys(NumberOfOutfits).map((k) =>
            <option key={"numberOfOutfits-" + (Math.random()).toString()} value={k}>{NumberOfOutfits[k as keyof typeof NumberOfOutfits]}</option>
          )}
        </select>
      </label>
    </div>
  )
}

export default NumberOfOutfitsField;