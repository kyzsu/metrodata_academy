import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { getData, initEndpoint } from "../../services";
import AdminPanel from "../../templates/AdminPanel";
import AddPlanetForm from "./addPlanetForm";
import EditPlanetForm from "./editPlanetForm";

const PlanetPage = () => {
  const [endpoint, setEndpoint] = useState(null);
  const [failLoad, setFailLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({
    results: [],
  });
  const [editing, setEditing] = useState(false);

  const initialPlanet = {
    id: null,
    name: "",
    climate: "",
    diameter: "",
    gravity: "",
    population: "",
    terrain: "",
  };

  const [currentPlanet, setCurrentPlanet] = useState(initialPlanet);

  useEffect(() => {
    getData(endpoint)
      .then((data) => {
        let currentData = data;
        let page = 1;

        if (endpoint) {
          const url = new URL(endpoint);
          const params = new URLSearchParams(url.search);
          page = params.get("page");
          setCurrentPage(parseInt(page));
        }

        let num = 1;
        currentData.results = currentData.results.map((result) => ({
          ...result,
          id: (page - 1) * data.results.length + num++,
        }));

        setData(currentData);
      })
      .catch((err) => {
        setFailLoad(true);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [endpoint]);

  const addPlanet = (planet) => {
    planet.id = data.results.length + 1;
    setData((data) => ({
      ...data,
      results: [...data.results, planet],
    }));
  };

  const editPlanet = (id, planet) => {
    setEditing(true);
    setCurrentPlanet(planet);
  };

  const updatePlanet = (newPlanet) => {
    setData(
      data.results.map((planet) =>
        planet.id === currentPlanet.id ? newPlanet : planet
      )
    );
  };

  const handleDelete = (targetId) => {
    swal({
      title: "Delete planet",
      text: "Are you sure you want to delete this?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const newData = data.results;
        const index = newData.findIndex((data) => data.id === targetId);
        newData[index] = { ...newData[index], isDeleted: true };

        setData((data) => ({ ...data, results: newData }));
      }
    });
  };

  const changePage = (url) => {
    setLoading(true);
    setEndpoint(url);
  };

  const filteredData = data.results.filter((result) => !result.isDeleted);

  return (
    <AdminPanel title="Planet">
      {editing ? (
        <>
          <EditPlanetForm
            setEditing={setEditing}
            currentPlanet={currentPlanet}
            updatePlanet={updatePlanet}
          />
        </>
      ) : (
        <>
          <AddPlanetForm addPlanet={addPlanet} />
        </>
      )}
      <div className="card mt-4">
        <div className="card-header">
          <h3 className="card-title">Data Planet</h3>
        </div>
        <div className="card-body table-responsive p-0">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Climate</th>
                <th>Diameter</th>
                <th>Gravity</th>
                <th>Population</th>
                <th>Terrain</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={7}>Loading...</td>
                </tr>
              )}
              {failLoad && (
                <tr>
                  <td colSpan={7}>Can not load the data</td>
                </tr>
              )}
              {filteredData.length === 0 && !loading && (
                <tr>
                  <td colSpan={7}>There's no data</td>
                </tr>
              )}
              {!loading &&
                filteredData.map((result, index) => (
                  <tr key={result.id}>
                    <td>
                      {(currentPage - 1) * filteredData.length + index + 1}
                    </td>
                    <td>{result.name}</td>
                    <td>{result.climate}</td>
                    <td>{result.diameter}</td>
                    <td>{result.gravity}</td>
                    <td>{result.population}</td>
                    <td>{result.terrain}</td>
                    <td>
                      <div className="d-flex">
                        <button
                          className="btn btn-light mr-2"
                          onClick={() => editPlanet(result.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(result.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer clearfix">
          <div className="float-left">Page: {currentPage}</div>
          <ul className="pagination m-0 float-right">
            <li
              className={`page-item paginate_button ${
                data.previous === null ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                disabled={data.previous === null}
                onClick={() => changePage(data.previous)}
              >
                &laquo;
              </button>
            </li>
            {data.results.length !== 0 &&
              [...Array(data.count / data.results.length)].map((u, index) => (
                <li
                  className={`page-item paginate_button ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    disabled={currentPage === index + 1}
                    onClick={() =>
                      changePage(initEndpoint + "?page=" + (index + 1))
                    }
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            <li
              className={`page-item paginate_button ${
                data.next === null ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                disabled={data.next === null}
                onClick={() => changePage(data.next)}
              >
                &raquo;
              </button>
            </li>
          </ul>
        </div>
      </div>
    </AdminPanel>
  );
};

export default PlanetPage;
