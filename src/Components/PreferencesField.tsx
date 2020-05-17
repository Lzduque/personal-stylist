import React, { useState } from 'react';
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
  const [clickReadMore, setclickReadMore] = useState<boolean>(false);

  const handleChange = (selectedOption: any) => {
    const preferences = selectedOption
                        ? selectedOption.map((x: any) => x.value)
                        : [];
    updateField(Fields.Preferences, preferences);
  };

  const value = selectedPreferences
                ? selectedPreferences.map((selected) => 
                ({ label: Preferences[selected as string as keyof typeof Preferences], value: selected as string })
                ) 
                : [];

  return (
    <div>
      {clickReadMore ? (
        <div>
          <p className="fw4 tl">
            We give you the option of choosing your preferences, like dresses, pants, or skirts to be part of your dream closet. If you don't select them, they won't be there! Don't worry about other types of clothing like shoes, tops, and coats, we've got you covered!
            <div className="mt3 fw5 pointer:hover" ><a onClick={() => {
              setclickReadMore(false)
            }}>Go back!</a></div>
          </p>
        </div>
      ) : (
        <div className="preferences mt0 mb3-ns">
          <h3 className="mt0" >Preferences</h3>
          <p className="fw4 tl">
              What types of clothing would you like to have in your capsule wardrobe? 
            <div className="mt3 fw5 pointer:hover" ><a onClick={() => {setclickReadMore(true)}}>Read more...</a></div>
          </p>
          <Select
            className="select"
            isSearchable={false}
            closeMenuOnSelect={false}
            blurInputOnSelect={false}
            value={value}
            onChange={handleChange}
            isClearable
            isMulti
            options={options}
          />
        </div>)
      }
    </div>
  )
}

export default PreferencesField;