import React from 'react';
import { NumberOfOutfits, Fields } from '../Enums';
import Select from 'react-select';

interface IProps {
  selectedNumberOfOutfits: NumberOfOutfits,
  updateField: any
}

const options = Object.keys(NumberOfOutfits).map((k) =>
  ({ label: NumberOfOutfits[k as keyof typeof NumberOfOutfits], value: k })
)
const NumberOfOutfitsField = ({ selectedNumberOfOutfits, updateField}: IProps) => {
  const handleChange = (selectedOption: any) => {
    updateField(Fields.NumberOfOutfits, selectedOption.value);
  };

  const value = { label: NumberOfOutfits[selectedNumberOfOutfits as string as keyof typeof NumberOfOutfits], value: selectedNumberOfOutfits as string };

  return (
    <div className="numberOfOutfits mt0 mb3-ns">
      <h3 className="mt0" >Number of Outfits</h3>
      <p className="fw4 tl">
        Number of different outfits you want in your capsule wardrobe - you should consider your lifestyle, closet size and laundry habbits to choose this:
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

export default NumberOfOutfitsField;