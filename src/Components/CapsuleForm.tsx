import React, { useState } from 'react';
import SeasonField from './SeasonField';
import StyleField from './StyleField';
import NumberOfOutfitsField from './NumberOfOutfitsField';
import ColorsField from './ColorsField';
import PreferencesField from './PreferencesField';
import { Fields, Season, Style, NumberOfOutfits, Colors, Preferences, Clothing } from '../Enums';
import CWardrobe from './Wardrobe';

const server = "http://localhost:3000"

interface Error {
  error: string;
}

// export interface Wardrobe {
//   wardrobe: [[Clothing, number, [Colors]]] | undefined;
// }

export type Wardrobe = [[Clothing, number, [Colors]]] | undefined;

interface Capsule {
  season: Season;
  style: Style;
  numberOfOutfits: NumberOfOutfits;
  colors: Colors[];
  preferences: Preferences[];
}

const CapsuleForm = () => {

  const [error, setError] = useState<Error>();
  const [wardrobe, setWardrobe] = useState<Wardrobe>();
  const [capsule, setCapsule] = useState<Capsule>({
    season: "AutumnWinter" as Season,
    style: "Casual" as Style,
    numberOfOutfits: "From10to20" as NumberOfOutfits,
    colors: [],
    preferences: []
  })

  const handleChange = (field: Fields): any => (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    console.log("event");
    console.log(e.target.value);

    switch (field) {
      case Fields.Season:
        setCapsule({
          ...capsule,
          season: e.target.value as Season
        })
        break;
      case Fields.Style:
        setCapsule({
          ...capsule,
          style: e.target.value as Style
        })
        break;
      case Fields.NumberOfOutfits:
        setCapsule({
          ...capsule,
          numberOfOutfits: e.target.value as NumberOfOutfits
        })
        break;
      case Fields.Colors:
        const colorClicked = e.target.value as Colors
        if (capsule.colors.includes(colorClicked)) {
          const newColors = capsule.colors.filter((color) => color !== colorClicked)
          setCapsule({
            ...capsule,
            colors: newColors
          })
        } else {
          setCapsule({
            ...capsule,
            colors: [...capsule.colors,
            e.target.value as Colors]
          })
        }
        break;
      case Fields.Preferences:
        const preferenceClicked = e.target.value as Preferences
        if (capsule.preferences.includes(preferenceClicked)) {
          const newPreferences = capsule.preferences.filter((preference) => preference !== preferenceClicked)
          setCapsule({
            ...capsule,
            preferences: newPreferences
          })
        } else {
          setCapsule({
            ...capsule,
            preferences: [...capsule.preferences,
            e.target.value as Preferences]
          })
        }
        break;
      default:
        return
    }
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    console.log("state to submit");
    console.log(capsule);
    await setWardrobe(undefined);
    await submitForm();
  }

  const submitForm = async (): Promise<boolean> => {
    const encodedRequest = btoa(JSON.stringify(capsule)).replace(/\//g, '_').replace(/\+/g, '-')
    try {
      console.log("encodedRequest");
      console.log(encodedRequest);
      const response = await fetch(`${server}/capsule/${encodedRequest}`, {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        }),
      })
      if (response.status !== 200) {
        console.log(`Status ${response.status}`);
        return false;
      }
      const responseBody = await response.text();
      console.log("response");
      console.log(response);
      console.log("responseBody");
      console.log(responseBody);

      if (!JSON.parse(responseBody).error) {
        console.log("JSON.parse(responseBody)");
        console.log(JSON.parse(responseBody));

        await setWardrobe(JSON.parse(responseBody))
        await setError(undefined);
        return response.ok;
      } else {
        await setError(JSON.parse(responseBody).message);
        return false;
      }
    } catch (ex) {
      console.log("error: " + ex)
      return false;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SeasonField selectedSeason={capsule.season} onChange={handleChange(Fields.Season)} />
        <br />
        <StyleField selectedStyle={capsule.style} onChange={handleChange(Fields.Style)} />
        <br />
        <NumberOfOutfitsField selectedNumberOfOutfits={capsule.numberOfOutfits} onChange={handleChange(Fields.NumberOfOutfits)} />
        <br />
        <ColorsField selectedColors={capsule.colors} onChange={handleChange(Fields.Colors)} />
        <br />
        <PreferencesField selectedPreferences={capsule.preferences} onChange={handleChange(Fields.Preferences)} />
        <br />
        <div className="error">
          {error}
        </div>
        <button type="submit">
          Check your new Capsule Wardrobe!
          </button>
      </form>
        { wardrobe
          ? <CWardrobe wardrobe={wardrobe} />
          : <br />
        }
      </div>
    )
  }

export default CapsuleForm;