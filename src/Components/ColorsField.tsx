import React from 'react';
import { Colors } from '../Enums';

interface IProps {
  selectedColors: Colors[],
  onChange: any
}

const ColorsField = ({selectedColors, onChange}: IProps) => {
  return (
    <div className="colors mt0 mb3-ns">
      <label className="fw7 f6" >
        <h3 className="mt0" >Colors:</h3>
        <p className="fw4">
          Select the colors you want in you capsule wardrobe. Select from 6 to 12 diferent colors. Keep in mind that, to work well, the colors should be distributed like this:
        </p>
        <ul className="fw4 tl">
          <li>Main colours: 3 - 4</li>
          <li>Neutrals: 1 - 3</li>
          <li>Accent colours: 2 - 5</li>
        </ul>
        <select name="colors" className="bg-white ma1 b--silver w-100 h4-ns ph3 pv2 " multiple={true} value={selectedColors} onChange={onChange} >
          {Object.keys(Colors).map(
            (k) =>
              <option key={"color-neutrals-" + (Math.random()).toString()} value={k}>{Colors[k as keyof typeof Colors]}</option>
          )}
        </select>
      </label>
    </div>
  )
}

export default ColorsField;
