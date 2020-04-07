import React from 'react';
import './App.css';
import { Form } from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Personal Stylist
        </h1>
        <br/>
        <h2>
          How do you want your capsule wardrobe to be?
        </h2>
        < Form />
      </header>
    </div>
  );
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

export default App;
