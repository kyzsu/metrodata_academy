import Axios from 'axios';

const initEndpoint = 'https://swapi.dev/api/planets';

export async function getData(endpoint = null) {
  return Axios.get(endpoint ? endpoint : initEndpoint)
    .then(res => res.data)
    .catch(console.error);
}
