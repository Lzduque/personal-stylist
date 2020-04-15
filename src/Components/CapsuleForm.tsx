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

  const updateField = (field: Fields, value: any): any => {
    console.log("value");
    console.log(value);

    switch (field) {
      case Fields.Season:
        setCapsule({
          ...capsule,
          season: value as Season
        })
        break;
      case Fields.Style:
        setCapsule({
          ...capsule,
          style: value as Style
        })
        break;
      case Fields.NumberOfOutfits:
        setCapsule({
          ...capsule,
          numberOfOutfits: value as NumberOfOutfits
        })
        break;
      case Fields.Colors:
        setCapsule({
          ...capsule,
          colors: value as Colors[]
        })
        break;
      case Fields.Preferences:
        setCapsule({
          ...capsule,
          preferences: value as Preferences[]
        })
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
        <div className="container flex flex-row flex-wrap justify-around mw9 content-center center ph4-ns " >
          <div className="box tc bg-white-40 w5 mw7 br4 pa4 ma2">
            <SeasonField selectedSeason={capsule.season} updateField={updateField} />
            </div>
          <div className="box tc bg-white-40 w5 mw7 br4 pa4 ma2">
            <StyleField selectedStyle={capsule.style} updateField={updateField} />
          </div>
          <div className="box tc bg-white-40 w5 mw7 br4 pa4 ma2">
            <NumberOfOutfitsField selectedNumberOfOutfits={capsule.numberOfOutfits} updateField={updateField} />
          </div>
          <div className="box tc bg-white-40 w5 mw7 br4 pa4 ma2">
            <div className="" >
              <PreferencesField selectedPreferences={capsule.preferences} updateField={updateField} />
            </div>
          </div>
          <div className="box tc bg-white-40 w7 mw7 br4 pa4 ma2">
            <ColorsField selectedColors={capsule.colors} updateField={updateField} />
          </div>
        </ div>
        <div className="tc">
          {error
            ? <div className="error tc ba b--dark-red bg-light-red white pv1 ph1 dib-ns ma3 center ">
              {error}
            </div >
            : <br />
          }
        </div>
        <br />
        <div className="tc" >
          <button type="submit" className="bw0 br2 bg-blue pv2 ph3 washed-blue fw5 tc ttu tracked bg-animate hover-bg-dark-gray shadow-5">
            Check your new Capsule Wardrobe!
          </button>
        </div>
      </form>
      <br />
      <div className="container flex" >
              {wardrobe
        ? <CWardrobe wardrobe={wardrobe} />
        : <br />
      }
      </div>
    </div>
  )
}

export default CapsuleForm;