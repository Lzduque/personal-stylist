import {
  Season,
  Style,
  NumberOfOutfits,
  Colors,
  Preferences,
  Clothing
} from './Enums';

export interface Capsule {
  season: Season;
  style: Style;
  numberOfOutfits: NumberOfOutfits;
  colors: {
    mains: Colors[];
    neutrals: Colors[];
    accents: Colors[];
  };
  preferences: Preferences[];
}

export interface Error {
  error: string;
}

export type Wardrobe = [Clothing, number, Colors[]][] | undefined;
