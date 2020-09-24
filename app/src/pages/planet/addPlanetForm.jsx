import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

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

  function CreateForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          New Planet
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Planet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="row">
                <div className="col">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={planet.name}
                    // placeholder="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label>Climate</label>
                  <input
                    type="text"
                    name="climate"
                    value={planet.climate}
                    // placeholder="climate"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Diameter</label>
                  <input
                    type="text"
                    name="diameter"
                    value={planet.diameter}
                    // placeholder="diameter"
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label>Gravity</label>
                  <input
                    type="text"
                    name="gravity"
                    value={planet.gravity}
                    // placeholder="gravity"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Population</label>
                  <input
                    type="text"
                    name="population"
                    value={planet.population}
                    // placeholder="population"
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label>Terrain</label>
                  <input
                    type="text"
                    name="terrain"
                    value={planet.terrain}
                    // placeholder="terrain"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-warning" onClick={handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return <CreateForm />;
};

export default AddPlanetForm;
