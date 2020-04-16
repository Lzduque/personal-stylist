import React, { useEffect } from 'react';
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

  useEffect(() => {
    console.log(selectedNumberOfOutfits)
  }, [selectedNumberOfOutfits])

  return (
    <div className="numberOfOutfits mt0 mb3-ns">
      <h3 className="mt0" >Number of Outfits:</h3>
      <Select
        value={value}
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default NumberOfOutfitsField;