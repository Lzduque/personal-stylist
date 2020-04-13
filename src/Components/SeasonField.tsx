import React from 'react';
import { Season } from '../Enums';

interface IProps {
  selectedSeason: Season,
  onChange: any
}

const SeasonField = ({selectedSeason, onChange}: IProps) => {
  return (
    <div className="season mt0 mb3-ns" >
      <label className="fw7 f6" >
        <h3 className="mt0" >Season:</h3>
        <select name="season" className="w-100 f6 h2 bg-white ma1 b--silver " value={selectedSeason} onChange={onChange} >
          {Object.keys(Season).map((k) =>
            <option key={"season-" + (Math.random()).toString()} value={k}>{Season[k as keyof typeof Season]}</option>
          )}
        </select>
      </label>
    </div>
  )
}

export default SeasonField;