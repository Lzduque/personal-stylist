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
        To choose the number of outfits you want in your capsule wardrobe, you should consider your lifestyle, closet size, and laundry habits. If you want one different outfit for each day of the summer, you need 90 different outfits.
        The more outfits you want, the more clothes you will need to make it work. The clothes are combined so each outfit is composed of a unique combination of some of your pieces, for example, 1 pair of pants, 1 top, 1 coat, and one pair of shoes.
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