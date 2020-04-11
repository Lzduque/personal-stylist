import React from 'react';
import { Season } from '../Enums';

interface IProps {
  selectedSeason: Season,
  onChange: any
}

const SeasonField = ({selectedSeason, onChange}: IProps) => {
  return (
    <div className="season">
      <label>
        Season:
          <br />
        <select name="season" value={selectedSeason} onChange={onChange} >
          {Object.keys(Season).map((k) =>
            <option key={"season-" + (Math.random()).toString()} value={k}>{Season[k as keyof typeof Season]}</option>
          )}
        </select>
      </label>
    </div>
  )
}

export default SeasonField;