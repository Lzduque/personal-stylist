import React, { createRef, useState } from 'react';
import { Colors, Fields, HexColor } from '../Enums';
import Select from 'react-select';
import chroma from 'chroma-js';

interface IProps {
  selectedColors: {
    mains: Colors[],
    neutrals: Colors[],
    accents: Colors[]
  },
  updateField: any
}

const options = Object.keys(Colors).map((k) =>
  ({ label: Colors[k as keyof typeof Colors], value: k, color: HexColor[k as keyof typeof HexColor] })
)

const colourStyles = {
  control: (styles: any) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles: { [x: string]: any; }, { data, isDisabled, isFocused, isSelected }: any) => {
    const color = chroma(data.color);
    const textColor = chroma.contrast('white', color) >= 4.5
      ? 'white'
      : 'black';
    return {
      ...styles,
      // color of the background of the option - isFocused when hover, then the normal background
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? data.color
          : isFocused
            ? data.color
            : color.alpha(0.5).css(),
      // color of the color of text of the option - isFocused when hover
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast('white', color) >= 4.5
            ? 'white'
            : 'black'
          : isFocused
            ? textColor
            : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.7).css()),
      },
    };
  },
  multiValue: (styles: any, { data }: any): any => {
    const color: any = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.5).css(),
    };
  },
  multiValueLabel: (styles: any, { data }: any) => {
    const textColor = chroma.contrast('white', data.color) >= 4.5
      ? 'white'
      : 'black';
    return {
    ...styles,
      color: textColor,
    };
  },
  multiValueRemove: (styles: any, { data }: any) => {
    const textColor = chroma.contrast('white', data.color) >= 4.5
      ? 'white'
      : 'black';
    return {
    ...styles,
      color: textColor,
    ':hover': {
      backgroundColor: data.color,
      color: textColor,
      },
    };
  },
};

const ColorsField = ({ selectedColors, updateField }: IProps) => {
  const [clickReadMore, setclickReadMore] = useState<boolean>(false);

  const updateOptions = () => {
    // Rebuild all the select options
    selectMains.current.select.buildMenuOptions({ options: [] }, []);
    selectNeutrals.current.select.buildMenuOptions({ options: [] }, []);
    selectAccents.current.select.buildMenuOptions({ options: [] }, []);
  }

  const handleChangeMains = (selectedOption: any) => {
    updateOptions();
    
    const colors = selectedOption 
                  ? selectedOption.map((x: any) => x.value)
                  : [];
    updateField(Fields.MainColors, colors);
  };

  const handleChangeNeutrals = (selectedOption: any) => {
    updateOptions();

    const colors = selectedOption
      ? selectedOption.map((x: any) => x.value)
      : [];
    updateField(Fields.NeutralColors, colors);
  };

  const handleChangeAccents = (selectedOption: any) => {
    updateOptions();
    
    const colors = selectedOption
      ? selectedOption.map((x: any) => x.value)
      : [];
    updateField(Fields.AccentColors, colors);
  };

  const valueMains = selectedColors.mains
    ? selectedColors.mains.map((selected) =>
      ({ label: Colors[selected as keyof typeof Colors], value: selected, color: HexColor[selected as keyof typeof HexColor] })
    )
    : [];

  const valueNeutrals = selectedColors.neutrals
    ? selectedColors.neutrals.map((selected) =>
      ({ label: Colors[selected as keyof typeof Colors], value: selected, color: HexColor[selected as keyof typeof HexColor] })
    )
    : [];

  const valueAccents = selectedColors.accents
    ? selectedColors.accents.map((selected) =>
      ({ label: Colors[selected as keyof typeof Colors], value: selected, color: HexColor[selected as keyof typeof HexColor] })
    )
    : [];

  // Make refs to each select
  const selectMains: any = createRef();
  const selectNeutrals: any = createRef();
  const selectAccents: any = createRef();

  const isOptionSelected = (o: any, opts: any): boolean => {
    return [...valueMains,
     ...valueNeutrals,
     ...valueAccents,
     ...opts]
     .some((opt: any): boolean => opt.value === o.value);
  }

  return (
    <div>
      {clickReadMore ? (
        <div>
          <p className="fw4 tl">
            If you want fewer outfits, 30 for example, you won't need a big color palette, because you won't have many pieces of clothes. Small capsule wardrobes should have a small color palette composed of 3 mains, 1 neutral, and 2 accents colors. For larger capsules, the recommended size is 3 mains, 2 neutrals, and 3 accents.
          </p>
          <p className="fw4 tl">
            The main colors are the most important and the first ones you choose are used first. The accent colors are used for purses and dresses.
            <div className="mt3 pointer:hover" ><button className="bg-transparent bn white fw5 pa0" onClick={() => { setclickReadMore(false) }}>Go back!</button></div>
          </p>
        </div>
      ) : (
        <div className="colors mt0 mb3-ns">
          <h3 className="mt0" >Colors</h3>
          <p className="fw4 tl">
              If you don't know how to choose your colors, try to take a look at your wardrobe and noticing which colors do you reach for more and feel more comfortable in, or just give it a try here and see if you like the result! You can always choose other colors and try again!
            <div className="mt3 pointer:hover" ><button className="bg-transparent bn white fw5 pa0" onClick={() => { setclickReadMore(true) }}>Read more...</button></div>
          </p>
          <ul className="fw4 tl pl3">
            <li className="pt2">Main colours: 3 - 4</li>
            <Select
              ref={selectMains}
              className="select pa2"
              isSearchable={false}
              closeMenuOnSelect={false}
              blurInputOnSelect={false}
              value={valueMains}
              onChange={handleChangeMains}
              // isClearable
              isMulti
              options={options}
              styles={colourStyles}
              isOptionSelected={isOptionSelected}
            />
            <li className="pt2">Neutrals: 1 - 3</li>
            <Select
              ref={selectNeutrals}
              className="select pa2"
              isSearchable={false}
              closeMenuOnSelect={false}
              blurInputOnSelect={false}
              value={valueNeutrals}
              onChange={handleChangeNeutrals}
              // isClearable
              isMulti
              options={options}
              styles={colourStyles}
              isOptionSelected={isOptionSelected}
            />
            <li className="pt2">Accent colours: 2 - 5</li>
            <Select
              ref={selectAccents}
              className="select pa2 pb0"
              isSearchable={false}
              closeMenuOnSelect={false}
              blurInputOnSelect={false}
              value={valueAccents}
              onChange={handleChangeAccents}
              // isClearable
              isMulti
              options={options}
              styles={colourStyles}
              isOptionSelected={isOptionSelected}
            />
          </ul>
      </div >)
      }
    </div>
  )
}

export default ColorsField;
