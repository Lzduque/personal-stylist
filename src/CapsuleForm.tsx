import React from 'react';

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
      season: Season.AutumnWinter,
      style: Style.Casual,
      numberOfOutfits: NumberOfOutfits.From10to20,
      colors: [],
      preferences: []
    }
  }

  public handleChange(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.setState({season: e.target.value})
  }

  public handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log("e submit: ")
    console.log(e)
  }

  public render(): JSX.Element {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Season:
            <select name="season" >
              {Object.keys(Season).map((k) =>
                <option value={k}>{Season[k as keyof typeof Season]}</option>
              )}
            </select>
          </label>
          <br />
          <label>
            Style:
            <select name="style" >
              {Object.keys(Style).map((k) =>
                <option value={k}>{Style[k as keyof typeof Style]}</option>
              )}
            </select>
          </label>
          <br />
          <label>
            Number of Outfits:
            <select name="numberOfOutfits" >
              {Object.keys(NumberOfOutfits).map((k) =>
                <option value={k}>{NumberOfOutfits[k as keyof typeof NumberOfOutfits]}</option>
              )}
            </select>
          </label>
          <br />
          <label>
            Colors:
            <br />
            Neutrals(2):
            <select name="colors" >
              {Object.keys(Colors).map(
                (k) =>
                  <option value={k}>{Colors[k as keyof typeof Colors]}</option>
              )}
            </select>
            <select name="colors" >
              {Object.keys(Colors).map(
                (k) =>
                  <option value={k}>{Colors[k as keyof typeof Colors]}</option>
              )}
            </select>
            <br />
            Mains(3):
            <select name="colors" >
              {Object.keys(Colors).map(
                (k) =>
                  <option value={k}>{Colors[k as keyof typeof Colors]}</option>
              )}
            </select>
            <select name="colors" >
              {Object.keys(Colors).map(
                (k) =>
                  <option value={k}>{Colors[k as keyof typeof Colors]}</option>
              )}
            </select>
            <select name="colors" >
              {Object.keys(Colors).map(
                (k) =>
                  <option value={k}>{Colors[k as keyof typeof Colors]}</option>
              )}
            </select>
            <br />
            Accents(5):
            <select name="colors" >
              {Object.keys(Colors).map(
                (k) =>
                  <option value={k}>{Colors[k as keyof typeof Colors]}</option>
              )}
            </select>
            <select name="colors" >
              {Object.keys(Colors).map(
                (k) =>
                  <option value={k}>{Colors[k as keyof typeof Colors]}</option>
              )}
            </select>
            <select name="colors" >
              {Object.keys(Colors).map(
                (k) =>
                  <option value={k}>{Colors[k as keyof typeof Colors]}</option>
              )}
            </select>
            <select name="colors" >
              {Object.keys(Colors).map(
                (k) =>
                  <option value={k}>{Colors[k as keyof typeof Colors]}</option>
              )}
            </select>
            <select name="colors" >
              {Object.keys(Colors).map(
                (k) =>
                  <option value={k}>{Colors[k as keyof typeof Colors]}</option>
              )}
            </select>
          </label>
          <br />
          <label>
            Preferences:
            <br />
            Skirts:
            <input name="skirts" value="skirts" type="checkbox" placeholder="Type here" />
            Dresses:
            <input name="dresses" value="dresses" type="checkbox" placeholder="Type here" />
            Pants:
            <input name="pants" value="pants" type="checkbox" placeholder="Type here" />
            High Heels:
            <input name="heels" value="heels" type="checkbox" placeholder="Type here" />
            Leggings:
            <input name="leggings" value="leggings" type="checkbox" placeholder="Type here" />
          </label>
          <br />
          <button type="submit">
            Submit
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
