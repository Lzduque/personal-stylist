import React, { useEffect } from 'react';
import { Colors, Fields } from '../Enums';
import Select from 'react-select';

interface IProps {
  selectedColors: Colors[],
  updateField: any
}

const options = Object.keys(Colors).map((k) =>
  ({ label: Colors[k as keyof typeof Colors], value: k })
)

const ColorsField = ({ selectedColors, updateField }: IProps) => {
  const handleChange = (selectedOption: any) => {
    updateField(Fields.Colors, selectedOption.map((x: any) => x.value));
    console.log(`Option selected:`, selectedOption);
  };

  const value = selectedColors.map((selected) =>
    ({ label: Colors[selected as string as keyof typeof Colors], value: selected as string })
  );

  useEffect(() => {
    console.log(selectedColors)
  }, [selectedColors])

  return (
    <div className="colors mt0 mb3-ns">
      <h3 className="mt0" >Colors:</h3>
      <p className="fw4">
        Select the colors you want in you capsule wardrobe. Select from 6 to 12 diferent colors. Keep in mind that, to work well, the colors should be distributed like this:
        </p>
      <ul className="fw4 tl">
        <li>Main colours: 3 - 4</li>
        <li>Neutrals: 1 - 3</li>
        <li>Accent colours: 2 - 5</li>
      </ul>
      <Select
        closeMenuOnSelect={false}
        value={value}
        onChange={handleChange}
        isClearable
        isMulti
        options={options}
      />
    </div >
  )
}

export default ColorsField;
