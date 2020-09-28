import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

const EditPlanetForm = (props) => {
  const [planet, setPlanet] = useState(props.currentPlanet);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanet({ ...planet, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(planet);
    if (
      planet.name &&
      planet.climate &&
      planet.diameter &&
      planet.gravity &&
      planet.population &&
      planet.terrain
    )
      props.updatePlanet(planet);
  };

  useEffect(() => {
    setPlanet(props.currentPlanet);
  }, [props]);

  const [show, setShow] = useState(true);

  return (
    <Modal show={show}>
      <Modal.Header>
        <h1>Update planet</h1>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="name"
                value={planet.name}
                onChange={handleChange}
                placeholder="name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="climate"
                value={planet.climate}
                onChange={handleChange}
                placeholder="climate"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="diameter"
                value={planet.diameter}
                onChange={handleChange}
                placeholder="diameter"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="gravity"
                value={planet.gravity}
                onChange={handleChange}
                placeholder="gravity"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="population"
                value={planet.population}
                onChange={handleChange}
                placeholder="population"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="terrain"
                value={planet.terrain}
                onChange={handleChange}
                placeholder="terrain"
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          type="submit"
          onClick={() => props.setEditing(false)}
        >
          Cancel
        </Button>
        <Button variant="outline-warning" type="submit" onClick={handleSubmit}>
          Save planet
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPlanetForm;
