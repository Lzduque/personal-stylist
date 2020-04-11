import React from 'react';
import { Preferences } from './CapsuleForm';

export class PreferencesField extends React.Component<{ selectedPreferences: Preferences[]; onChange: (e: any) => void; }, {}> {
  render() {
    return (
      <div className="preferences">
        <label>
          Preferences:
              <br />
          <select name="preferences" multiple={true} value={this.props.selectedPreferences} onChange={this.props.onChange} >
            {Object.keys(Preferences).map(
              (k) =>
                <option key={"preferences-" + (Math.random()).toString()} value={k}>{Preferences[k as keyof typeof Preferences]}</option>
            )}
          </select>
        </label>
      </div>
    )
  }
}
