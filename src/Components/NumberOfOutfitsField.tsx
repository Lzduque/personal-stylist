import React, { useState } from 'react';
import { NumberOfOutfits, Fields } from '../Enums';
import Select from 'react-select';

interface IProps {
  selectedNumberOfOutfits: NumberOfOutfits;
  updateField: any;
}

const options = Object.keys(NumberOfOutfits).map((k) => ({
  label: NumberOfOutfits[k as keyof typeof NumberOfOutfits],
  value: k
}));

const NumberOfOutfitsField = ({
  selectedNumberOfOutfits,
  updateField
}: IProps) => {
  const [clickReadMore, setclickReadMore] = useState<boolean>(false);

  const handleChange = (selectedOption: any) => {
    updateField(Fields.NumberOfOutfits, selectedOption.value);
  };

  const value = {
    label:
      NumberOfOutfits[
        selectedNumberOfOutfits as string as keyof typeof NumberOfOutfits
      ],
    value: selectedNumberOfOutfits as string
  };

  return (
    <div>
      {clickReadMore ? (
        <div>
          <p className="fw4 tl">
            If you want a different outfit every day of the summer, you
            need 90 different outfits.
          </p>
          <p className="fw4 tl">
            The more outfits you want, the more clothes you will need to make it
            work. The clothes are combined so each outfit is composed of a unique
            combination of some of your pieces. For example, one combo might be 1 pair of pants, 1 top, 1 coat, and one pair of shoes.
            <div className="mt3 pointer:hover">
              <button
                className="bg-transparent bn white fw5 pa0"
                onClick={() => {
                  setclickReadMore(false);
                }}
              >
                Go back!
              </button>
            </div>
          </p>
        </div>
      ) : (
        <div className="numberOfOutfits mt0 mb3-ns">
          <h3 className="mt0">Number of Outfits</h3>
          <p className="fw4 tl">
            To choose the number of outfits you want in your capsule wardrobe,
            you should consider your lifestyle, closet size, and laundry habits.
            <div className="mt3 pointer:hover">
              <button
                className="bg-transparent bn white fw5 pa0"
                onClick={() => {
                  setclickReadMore(true);
                }}
              >
                Read more...
              </button>
            </div>
          </p>
          <Select
            className="select"
            isSearchable={false}
            value={value}
            onChange={handleChange}
            options={options}
          />
        </div>
      )}
    </div>
  );
};

export default NumberOfOutfitsField;
