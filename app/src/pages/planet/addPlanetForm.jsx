import React from "react";
import { useState } from "react";

const AddPlanetForm = (props) => {
  const initPlanet = {
    id: null,
    name: "",
    climate: "",
    diameter: "",
    gravity: "",
    population: "",
    terrain: "",
  };

  const [planet, setPlanet] = useState(initPlanet);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanet({ ...planet, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      planet.name &&
      planet.climate &&
      planet.diameter &&
      planet.gravity &&
      planet.population &&
      planet.terrain
    ) {
      handleChange(e, props.addPlanet(planet));
    }
  };

  return (
    <form>
      {/* <label>Name</label> */}
      <input
        type="text"
        name="name"
        value={planet.name}
        placeholder="name"
        onChange={handleChange}
      />
      {/* <label>Climate</label> */}
      <input
        type="text"
        name="climate"
        value={planet.climate}
        placeholder="climate"
        onChange={handleChange}
      />
      {/* <label>Diameter</label> */}
      <input
        type="text"
        name="diameter"
        value={planet.diameter}
        placeholder="diameter"
        onChange={handleChange}
      />
      {/* <label>Gravity</label> */}
      <input
        type="text"
        name="gravity"
        value={planet.gravity}
        placeholder="gravity"
        onChange={handleChange}
      />
      {/* <label>Population</label> */}
      <input
        type="text"
        name="population"
        value={planet.population}
        placeholder="population"
        onChange={handleChange}
      />
      {/* <label>Terrain</label> */}
      <input
        type="text"
        name="terrain"
        value={planet.terrain}
        placeholder="terrain"
        onChange={handleChange}
      />
      <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
        Add planet
      </button>
    </form>
  );
};

export default AddPlanetForm;
