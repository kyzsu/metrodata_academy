import React, { Component } from "react";

class Todo extends Component {
  state = {
    edit: false,
    id: null,
    planets: [],
  };

  componentDidMount() {
    const url = "https://swapi.dev/api/planets/";

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          planets: data.results,
        });
        console.log(this.state.planets);
      });
  }

  onSubmitHandleSW(event) {
    event.preventDefault();
    this.setState({
      planets: [
        ...this.state.planets,
        {
          name: event.target.name.value,
          gravity: event.target.gravity.value,
          terrain: event.target.terrain.value,
          climate: event.target.climate.value,
        },
      ],
    });
    event.target.name.value = "";
    event.target.gravity.value = "";
    event.target.terrain.value = "";
    event.target.climate.value = "";
  }

  onEdithandleSW(event) {
    this.setState({
      edit: true,
      id: arguments[0],
      name: arguments[1],
    });
    console.log(arguments[0] + " " + arguments[1]);
  }

  onUpdateHandleSW(event) {
    event.preventDefault();
    this.setState({
      planets: this.state.planets.map((p) => {
        if (p.name === this.state.name) {
          p["name"] = event.target.name.value;
          return p;
        }
        return p;
      }),
    });
    this.setState({ edit: false });
  }

  renderEditFormSW() {
    if (this.state.edit) {
      return (
        <form onSubmit={this.onUpdateHandleSW.bind(this)}>
          {" "}
          <input
            type="text"
            name="name"
            className="item"
            defaultValue={this.state.name}
          />{" "}
          <button className="update-add-item">Update</button>{" "}
        </form>
      );
    }
  }

  onDeleteHandleSW() {
    let id = arguments[0];
    console.log(arguments[0]);
    this.setState({
      planets: this.state.planets.filter((planet) => {
        if (planet.name !== id) {
          return planet;
        }
      }),
    });
  }

  render() {
    return (
      <div>
        {this.renderEditFormSW()}
        <form onSubmit={this.onSubmitHandleSW.bind(this)}>
          <input type="text" name="name" className="item" placeholder="name" />{" "}
          <input
            type="text"
            name="terrain"
            className="item"
            placeholder="terrain"
          />{" "}
          <input
            type="text"
            name="gravity"
            className="item"
            placeholder="gravity"
          />{" "}
          <input
            type="text"
            name="climate"
            className="item"
            placeholder="climate"
          />{" "}
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.planets.map((p) => (
            <li key={p.name}>
              <h3>Name: {p.name}</h3>
              <p>Terrain: {p.terrain}</p>
              <p>Gravity: {p.gravity}</p>
              <p>Climate: {p.climate}</p>
              <button onClick={this.onDeleteHandleSW.bind(this, p.name)}>
                Delete
              </button>
              <button onClick={this.onEdithandleSW.bind(this, p.name, p.name)}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
