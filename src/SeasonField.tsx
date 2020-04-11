import React from 'react';
import { Season } from './CapsuleForm';

export class SeasonField extends React.Component<{ selectedSeason: Season; onChange: (e: any) => void;  },{}> {
  render() {
    return (
      <div className="season">
        <label>
          Season:
          <br />
          <select name="season" value={this.props.selectedSeason} onChange={this.props.onChange} >
            {Object.keys(Season).map((k) =>
              <option key={"season-" + (Math.random()).toString()} value={k}>{Season[k as keyof typeof Season]}</option>
            )}
          </select>
        </label>
      </div>
    )
  }
}
