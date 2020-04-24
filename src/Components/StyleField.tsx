import React from 'react';
import { Style, Fields } from '../Enums';
import Select from 'react-select';

interface IProps {
  selectedStyle: Style,
  updateField: any
}

const options = Object.keys(Style).map((k) =>
  ({ label: Style[k as keyof typeof Style], value: k })
)
const StyleField = ({ selectedStyle, updateField}: IProps) => {
  const handleChange = (selectedOption: any) => {
    updateField(Fields.Style, selectedOption.value);
  };

  const value = { label: Style[selectedStyle as string as keyof typeof Style], value: selectedStyle as string };

  return (
    <div className="style mt0 mb3-ns">
      <h3 className="mt0" >Style</h3>
      <p className="fw4 tl">
        Style of your future capsule wardrobe:
      </p>
      <Select
        className="select"
        isSearchable={false}
        value={value}
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default StyleField;