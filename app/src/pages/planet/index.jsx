import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { getData } from '../../services';
import AdminPanel from '../../templates/AdminPanel';

const PlanetPage = () => {
  const [endpoint, setEndpoint] = useState(null);
  const [failLoad, setFailLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({
    results: [],
  });

  useEffect(() => {
    getData(endpoint)
      .then(data => {
        let currentData = data;
        let page = 1;

        if (endpoint) {
          const url = new URL(endpoint);
          const params = new URLSearchParams(url.search);
          page = params.get('page');
          setCurrentPage(page);
        }

        let num = 1;
        currentData.results = currentData.results.map(result => ({
          ...result,
          id: (page - 1) * data.results.length + num++,
        }));

        setData(currentData);
      })
      .catch(err => {
        setFailLoad(true);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [endpoint]);

  const handleDelete = targetId => {
    swal({
      title: 'Delete planet',
      text: 'Are you sure you want to delete this?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        const newData = data.results;
        const index = newData.findIndex(data => data.id === targetId);
        newData[index] = { ...newData[index], isDeleted: true };

        setData(data => ({ ...data, results: newData }));
      }
    });
  };

  const changePage = url => setEndpoint(url);

  const filteredData = data.results.filter(result => !result.isDeleted);

  return (
    <AdminPanel title="Planet">
      <table>
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
          {filteredData.map(result => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.name}</td>
              <td>{result.climate}</td>
              <td>{result.diameter}</td>
              <td>{result.gravity}</td>
              <td>{result.population}</td>
              <td>{result.terrain}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(result.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button disabled={data.previous === null} onClick={() => changePage(data.previous)}>
          Previous
        </button>
        <button disabled={data.next === null} onClick={() => changePage(data.next)}>
          Next
        </button>
      </div>
      <div>Page: {currentPage}</div>
    </AdminPanel>
  );
};

export default PlanetPage;
