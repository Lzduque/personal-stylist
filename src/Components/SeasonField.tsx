import React, { useEffect } from 'react';
import { Season, Fields } from '../Enums';
import Select from 'react-select';

interface IProps {
  selectedSeason: Season,
  updateField: any
}

const options = Object.keys(Season).map((k) =>
  ({ label: Season[k as keyof typeof Season], value: k })
)

const SeasonField = ({ selectedSeason, updateField}: IProps) => {
  const handleChange = (selectedOption: any) => {
    updateField(Fields.Season, selectedOption.value);
  };

  const value = { label: Season[selectedSeason as string as keyof typeof Season], value: selectedSeason as string };

  useEffect(() => {
    console.log("selectedSeason: ", selectedSeason);
  }, [selectedSeason])

  return (
    <div className="season mt0 mb3-ns" >
      {/* <label className="fw7 f6" > */}
      <h3 className="mt0" >Season:</h3>
      <Select
        value={value}
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default SeasonField;