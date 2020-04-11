import React from 'react';
import { SeasonField } from './SeasonField';

const server = "http://localhost:3000"

enum Fields {
  Season = "season",
  Style = "style",
  NumberOfOutfits = "numberOfOutfits",
  Colors = "colors",
  Preferences = "preferences"
}

export enum Season {
  AutumnWinter = "Autumn/Winter",
  SpringSummer = "Spring/Summer"
}

enum Style {
  Casual = "Casual",
  Office = "Office"
}

enum NumberOfOutfits {
  From10to20 = "From 10 to 20",
  From21to30 = "From 21 to 30",
  From31to40 = "From 31 to 40",
  From41to50 = "From 41 to 50",
  From51to60 = "From 51 to 60",
  From61to70 = "From 61 to 70",
  From71to80 = "From 71 to 80",
  From81to90 = "From 81 to 90",
  From91to100 = "From 91 to 100",
  From101to110 = "From 101 to 110",
  From111to120 = "From 111 to 120",
  From121to130 = "From 121 to 130",
  From131to140 = "From 131 to 140",
  From141to150 = "From 141 to 150",
  From151to160 = "From 151 to 160"
}

enum Colors {
  White = "White",
  OffWhite = "Off-White",
  Beige = "Beige",
  Brown = "Brown",
  Black = "Black",
  Navy = "Navy",
  Blue = "Blue",
  LightBlue = "Light Blue",
  DarkGreen = "Dark Green",
  LightGreen = "Light Green",
  DarkYellow = "Dark Yellow",
  LightYellow = "Light Yellow",
  DarkPink = "Dark Pink",
  LightPink = "Light Pink",
  DarkRed = "Dark Red",
  LightRed = "Light Red",
  DarkOrgange = "Dark Organge",
  LightOrange = "Light Orange",
  DarkPurple = "Dark Purple",
  LightPurple = "Light Purple"
}

enum Preferences {
  Skirts = "Skirts",
  Dresses = "Dresses",
  Pants = "Pants",
  HighHeels = "High Heels",
  LeggingsPants = "Leggings"
}

interface IState {
  error: string,
  wardrobe: any[],
  capsule: {
    season: Season;
    style: Style;
    numberOfOutfits: NumberOfOutfits;
    colors: Colors[];
    preferences: Preferences[];
  }
}

export class CapsuleForm extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      error: "",
      wardrobe: [],
      capsule: {
        season: "AutumnWinter" as Season,
        style: "Casual" as Style,
        numberOfOutfits: "From10to20" as NumberOfOutfits,
        colors: [],
        preferences: []

      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  public handleChange(e: React.ChangeEvent<HTMLSelectElement>, field: Fields): void {
    e.preventDefault();
    console.log("event");
    console.log(e.target.value);
    
    switch (field) {
      case Fields.Season:
        var capsule = { ...this.state.capsule}
        capsule.season = e.target.value as Season
        this.setState({ capsule })
        break;
      case Fields.Style:
        var capsule = { ...this.state.capsule }
        capsule.style = e.target.value as Style
        this.setState({ capsule })
        break;
      case Fields.NumberOfOutfits:
        var capsule = { ...this.state.capsule }
        capsule.numberOfOutfits = e.target.value as NumberOfOutfits
        this.setState({ capsule })
        break;
      case Fields.Colors:
        const colorClicked = e.target.value as Colors
        if (this.state.capsule.colors.includes(colorClicked)) {
          const newColors = this.state.capsule.colors.filter((color) => color !== colorClicked)
          var capsule = { ...this.state.capsule }
          capsule.colors = newColors
          this.setState({ capsule })
        } else {
          var capsule = { ...this.state.capsule }
          capsule.colors = [...capsule.colors,
            e.target.value as Colors]
          this.setState({ capsule })
        }
        break;
      case Fields.Preferences:
        const preferenceClicked = e.target.value as Preferences
        if (this.state.capsule.preferences.includes(preferenceClicked)) {
          const newPreferences = this.state.capsule.preferences.filter((preference) => preference !== preferenceClicked)
          var capsule = { ...this.state.capsule }
          capsule.preferences = newPreferences
          this.setState({ capsule })
        } else {
          var capsule = { ...this.state.capsule }
          capsule.preferences = [...capsule.preferences, e.target.value as Preferences]
          this.setState({ capsule })
        }
        break;
      default:
        return
    }
    console.log(this.state)
  }

  public handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    console.log("state to submit");
    console.log(this.state.capsule);

    await this.submitForm();
  }

  private async submitForm(): Promise<boolean> {
    const encodedRequest = btoa(JSON.stringify(this.state.capsule)).replace(/\//g, '_').replace(/\+/g, '-')
    try {
      console.log("encodedRequest");
      console.log(encodedRequest);
      const response = await fetch(`${server}/capsule/${encodedRequest}`, {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        }),
      })
      if (response.status === 400) {     
        console.log("Status 400");
        return false;
      }
      const responseBody = await response.text();
      console.log("response");
      console.log(response);
      console.log("responseBody");
      console.log(responseBody);

      if (!JSON.parse(responseBody).error) {
        console.log("JSON.parse(responseBody)")
        console.log(JSON.parse(responseBody))
        this.setState({ wardrobe: JSON.parse(responseBody) });
        this.setState({ error: "" });
        return response.ok;
      } else {
        this.setState({ error: JSON.parse(responseBody).message });
        return false;
      }
    } catch (ex) {
      console.log("error: " + ex)
      return false;
    }
  }

  public render(): JSX.Element {
    let hasCapsule;
    if (this.state.wardrobe.length > 0) {
    hasCapsule = this.state.wardrobe.map((clothe) =>
      <div key={clothe}>
        <p>{clothe[0]} {clothe[1]} {clothe[2]}</p>
      </div>
    )}

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <SeasonField selectedSeason={this.state.capsule.season} onChange={(e) => this.handleChange(e, Fields.Season)} />
          <br />
          <div className="style">
            <label>
              Style:
              <br />
              <select name="style" value={this.state.capsule.style} onChange={(e) => this.handleChange(e, Fields.Style)}>
                {Object.keys(Style).map((k) =>
                  <option key={"style-" + (Math.random()).toString()} value={k}>{Style[k as keyof typeof Style]}</option>
                )}
              </select>
            </label>
          </div>
          <br />
          <div className="numberOfOutfits">
            <label>
              Number of Outfits:
              <br />
              <select name="numberOfOutfits" value={this.state.capsule.numberOfOutfits} onChange={(e) => this.handleChange(e, Fields.NumberOfOutfits)} >
                {Object.keys(NumberOfOutfits).map((k) =>
                  <option key={"numberOfOutfits-" + (Math.random()).toString()} value={k}>{NumberOfOutfits[k as keyof typeof NumberOfOutfits]}</option>
                )}
              </select>
            </label>
          </div>
          <br />
          <div className="colors">
            <label>
              Colors:
              <p>
                Select the colors you want in you capsule wardrobe. Select from 6 to 12 diferent colors. Keep in mind that, to work well, the colors should be distributed like this:
              </p>
              <ul>
                <li>Main colours: 3 - 4</li>
                <li>Neutrals: 1 - 3</li>
                <li>Accent colours: 2 - 5</li>
              </ul>
              <select name="colors" multiple={true} value={this.state.capsule.colors} onChange={(e) => this.handleChange(e, Fields.Colors)} >
                {Object.keys(Colors).map(
                  (k) =>
                    <option key={"color-neutrals-" + (Math.random()).toString()} value={k}>{Colors[k as keyof typeof Colors]}</option>
                )}
              </select>
            </label>
          </div>
          <br />
          <div className="preferences">
            <label>
              Preferences:
              <br />
              <select name="preferences" multiple={true} value={this.state.capsule.preferences} onChange={(e) => this.handleChange(e, Fields.Preferences)} >
                {Object.keys(Preferences).map(
                  (k) => 
                  <option key={"preferences-" + (Math.random()).toString()} value={k}>{Preferences[k as keyof typeof Preferences]}</option>
                )}
              </select>
            </label>
          </div>
          <br />
          <div className="error">
            {this.state.error}
          </div>
          <button type="submit">
            Check your new Capsule Wardrobe!
          </button>
        </form>
        <div className="wardrobe">
          {hasCapsule}
        </div>
      </div>
    )
  }
}
