import React from 'react';
import { Style } from './CapsuleForm';

export class StyleField extends React.Component<{ selectedStyle: Style; onChange: (e: any) => void; }, {}> {
  render() {
    return (
      <div className="style">
        <label>
          Style:
          <br />
          <select name="style" value={this.props.selectedStyle} onChange={this.props.onChange} >

            {Object.keys(Style).map((k) =>
              <option key={"style-" + (Math.random()).toString()} value={k}>{Style[k as keyof typeof Style]}</option>
            )}
          </select>
        </label>
      </div>
    )
  }
}
