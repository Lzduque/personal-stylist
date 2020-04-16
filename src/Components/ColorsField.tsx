import React, { useEffect } from 'react';
import { Colors, Fields, HexColor } from '../Enums';
import Select from 'react-select';
import chroma from 'chroma-js';

interface IProps {
  selectedColors: Colors[],
  updateField: any
}

const options = Object.keys(Colors).map((k) =>
  ({ label: Colors[k as keyof typeof Colors], value: k, color: HexColor[k as keyof typeof HexColor] })
)

const colourStyles = {
  control: (styles: any) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles: { [x: string]: any; }, { data, isDisabled, isFocused, isSelected }: any) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.2).css()
            : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') >= 4.5
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.5).css()),
      },
    };
  },
  multiValue: (styles: any, { data }: any): any => {
    const color: any = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles: any, { data }: any) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles: any, { data }: any) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

const ColorsField = ({ selectedColors, updateField }: IProps) => {
  const handleChange = (selectedOption: any) => {
    const selectedColors = selectedOption 
                            ? selectedOption.map((x: any) => x.value)
                            : null;
    updateField(Fields.Colors, selectedColors);
  };

  useEffect(() => {
    console.log(selectedColors)
  }, [selectedColors])

  return (
    <div className="colors mt0 mb3-ns">
      <h3 className="mt0" >Colors:</h3>
      <p className="fw4 tl">
        Select the colors you want in you capsule wardrobe. Select from 6 to 12 diferent colors. Keep in mind that, to work well, the colors should be distributed like this, in this order:
        </p>
      <ul className="fw4 tl pl3">
        <li>Main colours: 3 - 4</li>
        <li>Neutrals: 1 - 3</li>
        <li>Accent colours: 2 - 5</li>
      </ul>
      <Select
        closeMenuOnSelect={false}
        onChange={handleChange}
        isClearable
        isMulti
        options={options}
        styles={colourStyles}
      />
    </div >
  )
}

export default ColorsField;
