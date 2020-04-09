import React from 'react';
const server = "http://localhost:3000"

enum Fields {
  Season = "season",
  Style = "style",
  NumberOfOutfits = "numberOfOutfits",
  Colors = "colors",
  Preferences = "preferences"
}

enum Season {
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

interface IErrors {
  [key: string]: string
}

interface IState {
  season: Season;
  style: Style;
  numberOfOutfits: NumberOfOutfits;
  colors: Colors[];
  preferences: Preferences[];
}

export class CapsuleForm extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      season: "AutumnWinter" as Season,
      style: "Casual" as Style,
      numberOfOutfits: "From10to20" as NumberOfOutfits,
      colors: [],
      preferences: []
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
        this.setState({ season: e.target.value as Season })
        break;
      case Fields.Style:
        this.setState({ style: e.target.value as Style })
        break;
      case Fields.NumberOfOutfits:
        this.setState({ numberOfOutfits: e.target.value as NumberOfOutfits })
        break;
      case Fields.Colors:
        const colorClicked = e.target.value as Colors
        if (this.state.colors.includes(colorClicked)) {
          const newColors = this.state.colors.filter((color) => color !== colorClicked)
          this.setState({ colors: newColors })
        } else {
          this.setState({
            colors: [...this.state.colors,
            e.target.value as Colors]
          })
        }
        break;
      case Fields.Preferences:
        const preferenceClicked = e.target.value as Preferences
        if (this.state.preferences.includes(preferenceClicked)) {
          const newPreferences = this.state.preferences.filter((preference) => preference !== preferenceClicked)
          this.setState({ preferences: newPreferences })
        } else {
          this.setState({
            preferences: [...this.state.preferences,
            e.target.value as Preferences]
          })
        }
        break;
      default:
        return
    }
    console.log(this.state)
  }

  // public handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
  //   e.preventDefault();
  //   console.log("e submit: ")
  //   console.log(this.state)
  // }

  public handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    console.log("state to submit");
    console.log(this.state);

    await this.submitForm();
  }

  // private validateForm(): boolean {
  //   const errors: IError = {};
  //   Object.keys(this.state).map((fieldName: string) => {
  //     errors[fieldName] = this.validate(fieldName)
  //   })
  // }

  private async submitForm(): Promise<boolean> {
    const encodedRequest = btoa(JSON.stringify(this.state)).replace(/\//g, '_').replace(/\+/g, '-')
    try {
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
      console.log("responseBody");
      console.log(responseBody);
      return response.ok;
    } catch (ex) {
      console.log("error: " + ex)
      return false;
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="season">
            <label>
              Season:
              <br />
              <select name="season" value={this.state.season} onChange={(e) => this.handleChange(e, Fields.Season)}>
                {Object.keys(Season).map((k) =>
                  <option key={"season-" + (Math.random()).toString()} value={k}>{Season[k as keyof typeof Season]}</option>
                )}
              </select>
            </label>
          </div>
          <br />
          <div className="style">
            <label>
              Style:
              <br />
              <select name="style" value={this.state.style} onChange={(e) => this.handleChange(e, Fields.Style)}>
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
              <select name="numberOfOutfits" value={this.state.numberOfOutfits} onChange={(e) => this.handleChange(e, Fields.NumberOfOutfits)} >
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
                Select the colors you want in you capsule wardrobe. Select from 6 to 12 diferrent colors. Keep in mind that, to work well, the colors should be distributed like this:
              </p>
              <ul>
                <li>Main colours: 3 - 4</li>
                <li>Neutrals: 1 - 3</li>
                <li>Accent colours: 2 - 5</li>
              </ul>
              <select name="colors" multiple={true} value={this.state.colors} onChange={(e) => this.handleChange(e, Fields.Colors)} >
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
              <select name="preferences" multiple={true} value={this.state.preferences} onChange={(e) => this.handleChange(e, Fields.Preferences)} >
                {Object.keys(Preferences).map(
                  (k) => 
                  <option key={"preferences-" + (Math.random()).toString()} value={k}>{Preferences[k as keyof typeof Preferences]}</option>
                )}
              </select>
            </label>
          </div>
          <br />
          <button type="submit">
            Check your new Capsule Wardrobe!
          </button>
        </form>
      </div>
    )
  }
}

// class CapsuleForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Season:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )   
//   }
// }
