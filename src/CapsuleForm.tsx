import React from 'react';
import SeasonField from './SeasonField';
import StyleField from './StyleField';
import NumberOfOutfitsField from './NumberOfOutfitsField';
import ColorsField from './ColorsField';
import PreferencesField from './PreferencesField';
import { Fields, Season, Style, NumberOfOutfits, Colors, Preferences, Clothing } from './Enums';
import Wardrobe from './Wardrobe';

const server = "http://localhost:3000"

interface IState {
  error: string,
  wardrobe: [[Clothing, number, [Colors]]] | null,
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
      wardrobe: null,
      capsule: {
        season: "AutumnWinter" as Season,
        style: "Casual" as Style,
        numberOfOutfits: "From10to20" as NumberOfOutfits,
        colors: [],
        preferences: []

      }
    }
  }

  public handleChange = (e: React.ChangeEvent<HTMLSelectElement>, field: Fields): void => {
    e.preventDefault();
    console.log("event");
    console.log(e.target.value);

    const capsule = { ...this.state.capsule }

    switch (field) {
      case Fields.Season:
        capsule.season = e.target.value as Season
        this.setState({ capsule })
        break;
      case Fields.Style:
        capsule.style = e.target.value as Style
        this.setState({ capsule })
        break;
      case Fields.NumberOfOutfits:
        capsule.numberOfOutfits = e.target.value as NumberOfOutfits
        this.setState({ capsule })
        break;
      case Fields.Colors:
        const colorClicked = e.target.value as Colors
        if (this.state.capsule.colors.includes(colorClicked)) {
          const newColors = this.state.capsule.colors.filter((color) => color !== colorClicked)
            capsule.colors = newColors
          this.setState({ capsule })
        } else {
            capsule.colors = [...capsule.colors,
          e.target.value as Colors]
          this.setState({ capsule })
        }
        break;
      case Fields.Preferences:
        const preferenceClicked = e.target.value as Preferences
        if (this.state.capsule.preferences.includes(preferenceClicked)) {
          const newPreferences = this.state.capsule.preferences.filter((preference) => preference !== preferenceClicked)
            capsule.preferences = newPreferences
          this.setState({ capsule })
        } else {
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
    await this.setState({ wardrobe: null });
    await this.submitForm();
  }

  private submitForm = async (): Promise<boolean> => {
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

        await this.setState({ wardrobe: JSON.parse(responseBody), error: "" });
        return response.ok;
      } else {
        await this.setState({ error: JSON.parse(responseBody).message });
        return false;
      }
    } catch (ex) {
      console.log("error: " + ex)
      return false;
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <SeasonField selectedSeason={this.state.capsule.season} onChange={(e) => this.handleChange(e, Fields.Season)} />
          <br />
          <StyleField selectedStyle={this.state.capsule.style} onChange={(e) => this.handleChange(e, Fields.Style)} />
          <br />
          <NumberOfOutfitsField selectedNumberOfOutfits={this.state.capsule.numberOfOutfits} onChange={(e) => this.handleChange(e, Fields.NumberOfOutfits)} />
          <br />
          <ColorsField selectedColors={this.state.capsule.colors} onChange={(e) => this.handleChange(e, Fields.Colors)} />
          <br />
          <PreferencesField selectedPreferences={this.state.capsule.preferences} onChange={(e) => this.handleChange(e, Fields.Preferences)} />
          <br />
          <div className="error">
            {this.state.error}
          </div>
          <button type="submit">
            Check your new Capsule Wardrobe!
          </button>
        </form>
        { this.state.wardrobe
          ? <Wardrobe wardrobe={this.state.wardrobe} />
          : <br />
        }
      </div>
    )
  }
}
