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
    const textColor = chroma.contrast('white', color) >= 4.5
      ? 'white'
      : 'black';
    return {
      ...styles,
      // color of the background of the option - isFocused when hover, then the normal background
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? data.color
          : isFocused
            ? data.color
            : color.alpha(0.5).css(),
      // color of the color of text of the option - isFocused when hover
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast('white', color) >= 4.5
            ? 'white'
            : 'black'
          : isFocused
            ? textColor
            : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.7).css()),
      },
    };
  },
  multiValue: (styles: any, { data }: any): any => {
    const color: any = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.5).css(),
    };
  },
  multiValueLabel: (styles: any, { data }: any) => {
    const textColor = chroma.contrast('white', data.color) >= 4.5
      ? 'white'
      : 'black';
    return {
    ...styles,
      color: textColor,
    };
  },
  multiValueRemove: (styles: any, { data }: any) => {
    const textColor = chroma.contrast('white', data.color) >= 4.5
      ? 'white'
      : 'black';
    return {
    ...styles,
      color: textColor,
    ':hover': {
      backgroundColor: data.color,
      color: textColor,
      },
    };
  },
};

const ColorsField = ({ selectedColors, updateField }: IProps) => {
  const handleChange = (selectedOption: any) => {
    const colors = selectedOption 
                  ? selectedOption.map((x: any) => x.value)
                  : null;
    updateField(Fields.Colors, colors);
  };

  useEffect(() => {
    console.log("selectedColors: ", selectedColors);
  }, [selectedColors])

  const value = selectedColors
    ? selectedColors.map((selected) =>
      ({ label: Colors[selected as keyof typeof Colors], value: selected, color: HexColor[selected as keyof typeof HexColor] })
    )
    : null;

  return (
    <div className="colors mt0 mb3-ns">
      <h3 className="mt0" >Colors:</h3>
      <p className="fw4 tl">
        Select the colors you want in your capsule wardrobe. Select from 6 to 12 different colors. Keep in mind that, to work well, the colors should be distributed like this, in this order:
        </p>
      <ul className="fw4 tl pl3">
        <li>Main colours: 3 - 4</li>
        <li>Neutrals: 1 - 3</li>
        <li>Accent colours: 2 - 5</li>
      </ul>
      <Select
        isSearchable={false}
        closeMenuOnSelect={false}
        blurInputOnSelect={false}
        value={value}
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
