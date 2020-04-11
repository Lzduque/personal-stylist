import React from 'react';
import { Style } from '../Enums';

interface IProps {
  selectedStyle: Style,
  onChange: any
}

const StyleField = ({selectedStyle, onChange}: IProps) => {
  return (
    <div className="style">
      <label>
        Style:
          <br />
        <select name="style" value={selectedStyle} onChange={onChange} >
          {Object.keys(Style).map((k) =>
            <option key={"style-" + (Math.random()).toString()} value={k}>{Style[k as keyof typeof Style]}</option>
          )}
        </select>
      </label>
    </div>
  )
}

export default StyleField;