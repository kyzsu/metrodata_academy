import React, { Component } from "react";

class ReadSWapi extends Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
    this._getData = this.getData.bind(this);
  }

  getData() {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((people) => this.setState({ people: people.results }))
      .catch((error) => console.log(`The force couldn't reach! ${error}`));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this._getData}>People</button>
        <p>
          {this.state.people.map((single) => {
            return <li key={single.name}>{single.name}</li>;
          })}
        </p>
      </div>
    );
  }
}

export default ReadSWapi;
