import React from 'react';
import { Preferences } from '../Enums';

interface IProps {
  selectedPreferences: Preferences[],
  onChange: any
}

const PreferencesField = ({selectedPreferences, onChange}: IProps) => {
  return (
    <div className="preferences">
      <label>
        Preferences:
              <br />
        <select name="preferences" multiple={true} value={selectedPreferences} onChange={onChange} >
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