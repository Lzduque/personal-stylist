import React, { useEffect } from 'react';
import { Preferences, Fields } from '../Enums';
import Select from 'react-select';

interface IProps {
  selectedPreferences: Preferences[],
  updateField: any
}

const options = Object.keys(Preferences).map((k) =>
  ({ label: Preferences[k as keyof typeof Preferences], value: k })
)

const PreferencesField = ({ selectedPreferences, updateField}: IProps) => {
  const handleChange = (selectedOption: any) => {
    updateField(Fields.Preferences, selectedOption.map((x: any) => x.value));
    console.log(`Option selected:`, selectedOption);
  };

  const value = selectedPreferences.map((selected) => 
    ({ label: Preferences[selected as string as keyof typeof Preferences], value: selected as string })
  );

  useEffect(() => {
    console.log(selectedPreferences)
  }, [selectedPreferences])

  return (
    <div className="preferences mt0 mb3-ns">
      <h3 className="mt0" >Preferences:</h3>
      <Select
        closeMenuOnSelect={false}
        value={value}
        onChange={handleChange}
        isClearable
        isMulti
        options={options}
      />
    </div>
  )
}

export default PreferencesField;