import React from 'react';

export class CapsuleForm extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <form>
          <label>
            Season:
            <select name="season" >
              <option value="AutumnWinter">AutumnWinter</option>
              <option value="SpringSummer">SpringSummer</option>
            </select>
          </label>
          <br/>
          <label>
            Style:
            <select name="style" >
              <option value="Casual">Casual</option>
              <option value="Office">Office</option>
            </select>
          </label>
          <br />
          <label>
            Number of Outfits:
            <select name="numberOfOutfits" >
              <option value="From10to20">From10to20</option>
              <option value="From21to30">From21to30</option>
              <option value="From31to40">From31to40</option>
              <option value="From41to50">From41to50</option>
              <option value="From51to60">From51to60</option>
              <option value="From61to70">From61to70</option>
              <option value="From71to80">From71to80</option>
              <option value="From81to90">From81to90</option>
              <option value="From91to100">From91to100</option>
              <option value="From101to110">From101to110</option>
              <option value="From111to120">From111to120</option>
              <option value="From121to130">From121to130</option>
              <option value="From131to140">From131to140</option>
              <option value="From141to150">From141to150</option>
              <option value="From151to160">From151to160</option>
            </select>
          </label>
          <br />
          <label>
            Colors:
            <select name="colors" >
              <option value="White">White</option>
              <option value="OffWhite">OffWhite</option>
              <option value="Beige">Beige</option>
              <option value="Brown">Brown</option>
              <option value="Black">Black</option>
              <option value="Navy">Navy</option>
              <option value="Blue">Blue</option>
              <option value="LightBlue">LightBlue</option>
              <option value="DarkGreen">DarkGreen</option>
              <option value="LightGreen">LightGreen</option>
              <option value="DarkYellow">DarkYellow</option>
              <option value="LightYellow">LightYellow</option>
              <option value="DarkPink">DarkPink</option>
              <option value="LightPink">LightPink</option>
              <option value="DarkRed">DarkRed</option>
              <option value="LightRed">LightRed</option>
              <option value="DarkOrgange">DarkOrgange</option>
              <option value="LightOrange">LightOrange</option>
              <option value="DarkPurple">DarkPurple</option>
              <option value="LightPurple">LightPurple</option>
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
