import React from 'react';
import { Colors } from './CapsuleForm';

export class ColorsField extends React.Component<{ selectedColors: Colors[]; onChange: (e: any) => void; }, {}> {
  render() {
    return (
      <div className="colors">
        <label>
          Colors:
              <p>
            Select the colors you want in you capsule wardrobe. Select from 6 to 12 diferent colors. Keep in mind that, to work well, the colors should be distributed like this:
              </p>
          <ul>
            <li>Main colours: 3 - 4</li>
            <li>Neutrals: 1 - 3</li>
            <li>Accent colours: 2 - 5</li>
          </ul>
          <select name="colors" multiple={true} value={this.props.selectedColors} onChange={this.props.onChange} >
            {Object.keys(Colors).map(
              (k) =>
                <option key={"color-neutrals-" + (Math.random()).toString()} value={k}>{Colors[k as keyof typeof Colors]}</option>
            )}
          </select>
        </label>
      </div>
    )
  }
}
