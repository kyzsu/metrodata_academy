import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { getData, initEndpoint } from "../../services";
import AdminPanel from "../../templates/AdminPanel";
import { formatNumber } from "../../utils/number";
import AddPlanetForm from "./addPlanetForm";
import EditPlanetForm from "./editPlanetForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

const PlanetPage = () => {
  const [endpoint, setEndpoint] = useState(null);
  const [failLoad, setFailLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({
    results: [],
  });
  const [sort, setSort] = useState({ field: null, type: null, order: null });

  const [initialDataLength, setInitialDataLength] = useState(0);

  //for editing
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
  const editPlanet = (id, planet) => {
    setEditing(true);
    setCurrentPlanet(planet);
  };
  const updatePlanet = (newPlanet) => {
    // setData(
    //   data.results.map((planet) =>
    //     planet.name === currentPlanet.name ? newPlanet : planet
    //   )
    // );
    setData((data) => {
      return {
        ...data,
        results: data.results.map((planet) =>
          planet.name === currentPlanet.name ? newPlanet : planet
        ),
      };
    });
  };

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
        // console.log(currentData);
        let num = 1;
        currentData.results = currentData.results.map((result) => ({
          ...result,
          id: (page - 1) * data.results.length + num++,
        }));

        setInitialDataLength(currentData.results.length);
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
    console.log(data.results);
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

  const changeSort = (field, type) => {
    setSort((sort) => {
      let order = null;
      if (sort.order === null) {
        order = "asc";
      } else if (sort.order === "asc") {
        order = "desc";
      } else {
        return {
          field: null,
          type: null,
          order: null,
        };
      }

      return {
        field,
        type,
        order,
      };
    });
  };

  const sortedData = data.results.sort((a, b) => {
    if (sort.type === "string") {
      if (sort.order === "asc") {
        return a[sort.field].localeCompare(b[sort.field]);
      }
      return b[sort.field].localeCompare(a[sort.field]);
    }

    if (sort.type === "number") {
      if (sort.order === "asc") {
        return a[sort.field] - b[sort.field];
      }
      return b[sort.field] - a[sort.field];
    }

    return new Date(a.created) - new Date(b.created);
  });

  const filteredData = sortedData.filter((result) => !result.isDeleted);

  return (
    <AdminPanel title="Planet">
      {editing ? (
        <>
          <EditPlanetForm
            currentPlanet={currentPlanet}
            setEditing={setEditing}
            updatePlanet={updatePlanet}
          />
        </>
      ) : (
        <>
          <AddPlanetForm addPlanet={addPlanet} />
        </>
      )}
      <div className="card mt-4">
        <div className="card-body table-responsive p-0">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th onClick={() => changeSort("name", "string")}>Name</th>
                <th onClick={() => changeSort("climate", "string")}>Climate</th>
                <th onClick={() => changeSort("diameter", "number")}>
                  Diameter
                </th>
                <th onClick={() => changeSort("gravity", "string")}>Gravity</th>
                <th onClick={() => changeSort("population", "number")}>
                  Population
                </th>
                <th onClick={() => changeSort("terrain", "string")}>Terrain</th>
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
                    <td>{formatNumber(result.diameter)}</td>
                    <td>{result.gravity}</td>
                    <td>{formatNumber(result.population)}</td>
                    <td>{result.terrain}</td>
                    <td>
                      <div className="d-flex">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="button-tooltip">
                              Update the data
                            </Tooltip>
                          }
                        >
                          <Button
                            variant="light"
                            onClick={() => editPlanet(result.id, result)}
                            className="mr-2"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="button-tooltip">
                              Delete the data
                            </Tooltip>
                          }
                        >
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(result.id)}
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </Button>
                        </OverlayTrigger>
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
              [...Array(data.count / initialDataLength)].map((u, index) => (
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
