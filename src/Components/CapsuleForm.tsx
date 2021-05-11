import React, { useState, useEffect } from 'react';
import SeasonField from './SeasonField';
import StyleField from './StyleField';
import NumberOfOutfitsField from './NumberOfOutfitsField';
import ColorsField from './ColorsField';
import PreferencesField from './PreferencesField';
import {
  Clothing,
  Fields,
  Season,
  Style,
  NumberOfOutfits,
  Colors,
  Preferences
} from '../Enums';
import CWardrobe from './Wardrobe';
import Palette from './Palette';
import Loader from './Loader';
import { Capsule, Wardrobe } from '../types';

const server =
  process.env.NODE_ENV === 'production'
    ? 'https://personal-stylist-api.herokuapp.com'
    : 'http://localhost:3000';

const frontEnd =
  process.env.NODE_ENV === 'production'
    ? 'https://lzduque.github.io/personal-stylist'
    : 'http://localhost:2000';

interface IProps {
  capsule: Capsule;
  setCapsule: any;
}

// FIXME Provide better mockData
const mockData: Wardrobe = [
  [
    'ShirtTop' as Clothing,
    3,
    ['Navy' as Colors, 'White' as Colors, 'LightBlue' as Colors]
  ],
  [
    'TShirtTankTop' as Clothing,
    3,
    ['Navy' as Colors, 'White' as Colors, 'LightBlue' as Colors]
  ],
  ['JeansPants' as Clothing, 2, ['Navy' as Colors, 'White' as Colors]],
  ['DaySkirt' as Clothing, 1, ['Navy' as Colors]],
  ['DayDress' as Clothing, 1, ['LightGreen' as Colors]],
  ['Sweater' as Clothing, 2, ['Navy' as Colors, 'White' as Colors]],
  ['Jacket' as Clothing, 1, ['Navy' as Colors]],
  ['Shoes' as Clothing, 2, ['OffWhite' as Colors, 'Beige' as Colors]],
  ['RelaxedBag' as Clothing, 1, ['OffWhite' as Colors]]
];

const CapsuleForm = ({ capsule, setCapsule }: IProps) => {
  const [error, setError] = useState<Error | null>(null);
  const [wardrobe, setWardrobe] = useState<Wardrobe | null>(null);
  const [capsuleReady, setCapsuleReady] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // FIXME handleSubmit, not anytime something changes
  useEffect(() => {
    const checkURl = async (webPage: any) => {
      const encodedCapsule = webPage.hash.slice(2);
      if (encodedCapsule.length > 0) {
        const decodedCapsule = JSON.parse(
          atob(encodedCapsule.replace(/_/g, '/').replace(/-/g, '+'))
        );
        setCapsule(decodedCapsule);
        setCapsuleReady(true);
      }
    };

    checkURl(window.location);
  }, [setCapsule]);

  useEffect(() => {
    const sendForm = async () => {
      const encodedRequest = btoa(JSON.stringify(capsule))
        .replace(/\//g, '_')
        .replace(/\+/g, '-');
      const newWebPage: string = `${frontEnd}/#/${encodedRequest}`;

      try {
        const response = await fetch(`${server}/capsule/${encodedRequest}`, {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json'
          })
        });
        if (response.status !== 200) {
          console.log(`Status ${response.status}`);
          return false;
        }
        const responseBody = await response.text();
        if (!JSON.parse(responseBody).error) {
          window.location.replace(newWebPage);
          setWardrobe(JSON.parse(responseBody));
          setError(null);
          setIsLoading(false);
          return response.ok;
        } else {
          setError(JSON.parse(responseBody).message);
          return false;
        }
      } catch (ex) {
        // FIXME Don't play with the window object!
        const useMockData: Boolean = window.confirm(
          "Something's wrong... I can't communicate with my database. Would you like to see mock data instead?"
        );
        if (useMockData) {
          setWardrobe(mockData);
          setError(null);
          setIsLoading(false);
        }
        // FIXME Handle network errors
        return false;
      }
    };

    if (capsuleReady) {
      sendForm();
      setCapsuleReady(false);
    }
  }, [capsule, capsuleReady]);

  const updateField = (field: Fields, value: any): any => {
    switch (field) {
      case Fields.Season:
        setCapsule({
          ...capsule,
          season: value as Season
        });
        break;
      case Fields.Style:
        setCapsule({
          ...capsule,
          style: value as Style
        });
        break;
      case Fields.NumberOfOutfits:
        setCapsule({
          ...capsule,
          numberOfOutfits: value as NumberOfOutfits
        });
        break;
      case Fields.MainColors:
        setCapsule({
          ...capsule,
          colors: {
            mains: value as Colors[],
            neutrals: [...capsule.colors.neutrals],
            accents: [...capsule.colors.accents]
          }
        });
        break;
      case Fields.NeutralColors:
        setCapsule({
          ...capsule,
          colors: {
            mains: [...capsule.colors.mains],
            neutrals: value as Colors[],
            accents: [...capsule.colors.accents]
          }
        });
        break;
      case Fields.AccentColors:
        setCapsule({
          ...capsule,
          colors: {
            mains: [...capsule.colors.mains],
            neutrals: [...capsule.colors.neutrals],
            accents: value as Colors[]
          }
        });
        break;
      case Fields.Preferences:
        setCapsule({
          ...capsule,
          preferences: value as Preferences[]
        });
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setWardrobe(null);
    setIsLoading(true);
    setCapsuleReady(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container flex flex-row flex-wrap justify-around mw9 content-center center ph4-ns">
          <div className="box ba bg-black-20 tc w-100 w-30-l br4 pa4 ma2">
            <SeasonField
              selectedSeason={capsule.season}
              updateField={updateField}
            />
          </div>
          <div className="box ba tc bg-black-20 w-100 w-30-l br4 pa4 ma2">
            <StyleField
              selectedStyle={capsule.style}
              updateField={updateField}
            />
          </div>
          <div className="box ba tc bg-black-20 w-100 w-30-l br4 pa4 ma2">
            <NumberOfOutfitsField
              selectedNumberOfOutfits={capsule.numberOfOutfits}
              updateField={updateField}
            />
          </div>
          <div className="box ba tc bg-black-20 w-100 w-30-l br4 pa4 ma2">
            <PreferencesField
              selectedPreferences={capsule.preferences}
              updateField={updateField}
            />
          </div>
          <div className="box ba tc bg-black-20 w-100 w-60-l br4 pa4 ma2">
            <ColorsField
              selectedColors={capsule.colors}
              updateField={updateField}
            />
          </div>
        </div>
        <div className="tc">
          {error ? (
            <div className="error tc bg-black ba pa3 dib-ns ma3 center ">
              {error}
            </div>
          ) : (
            <br />
          )}
        </div>
        <br />
        <div className="tc">
          <button
            type="submit"
            className="bw0 br2 bg-gray pv2 ph3 white f3 fw5 tc ttu tracked bg-animate hover-bg-dark-gray shadow-5"
          >
            Check out your new Capsule Wardrobe!
          </button>
        </div>
      </form>
      <br />
      <div className="container flex">
        {wardrobe ? <Palette colors={capsule.colors} /> : <br />}
      </div>
      <div className="container flex">
        {wardrobe ? (
          <CWardrobe wardrobe={wardrobe} />
        ) : isLoading ? (
          <Loader />
        ) : (
          <br />
        )}
      </div>
    </div>
  );
};

export default CapsuleForm;
