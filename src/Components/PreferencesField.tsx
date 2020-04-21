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

const PreferencesField = ({ selectedPreferences, updateField }: IProps) => {
  const handleChange = (selectedOption: any) => {
    const preferences = selectedOption
                        ? selectedOption.map((x: any) => x.value)
                        : null;
    updateField(Fields.Preferences, preferences);
  };

  const value = selectedPreferences
                ? selectedPreferences.map((selected) => 
                ({ label: Preferences[selected as string as keyof typeof Preferences], value: selected as string })
                ) 
                : null;

  useEffect(() => {
    console.log("selectedPreferences: ", selectedPreferences);
  }, [selectedPreferences])

  return (
    <div className="preferences mt0 mb3-ns">
      <h3 className="mt0" >Preferences:</h3>
      <Select
        isSearchable={false}
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