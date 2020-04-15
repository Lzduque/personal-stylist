import React from 'react';
import { Preferences } from '../Enums';

interface IProps {
  selectedPreferences: Preferences[],
  updateField: any
}

const PreferencesField = ({ selectedPreferences, updateField}: IProps) => {
  return (
    <div className="preferences mt0 mb3-ns">
      <label className="fw7 f6" >
        <h3 className="mt0" >Preferences:</h3>
        <select name="preferences" className="bg-white ma1 b--silver w-100 h3 h4-ns ph3 pv2 " multiple={true} value={selectedPreferences} onChange={updateField} >
          {Object.keys(Preferences).map(
            (k) =>
              <option key={"preferences-" + (Math.random()).toString()} value={k}>{Preferences[k as keyof typeof Preferences]}</option>
          )}
        </select>
      </label>
    </div>
  )
}

export default PreferencesField;