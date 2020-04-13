import React from 'react';
import { Style } from '../Enums';

interface IProps {
  selectedStyle: Style,
  onChange: any
}

const StyleField = ({selectedStyle, onChange}: IProps) => {
  return (
    <div className="style mt0 mb3-ns">
      <label className="fw7 f6" >
        <h3 className="mt0" >Style:</h3>
        <select name="style" className="w-100 f6 h2 bg-white ma1 b--silver " value={selectedStyle} onChange={onChange} >
          {Object.keys(Style).map((k) =>
            <option key={"style-" + (Math.random()).toString()} value={k}>{Style[k as keyof typeof Style]}</option>
          )}
        </select>
      </label>
    </div>
  )
}

export default StyleField;