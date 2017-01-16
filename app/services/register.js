import axios from 'axios'

export const savePerson = (person) =>
  axios
    .post('http://localhost:3000/registries', person)
    .then((data) => data.body)

export const fetchRegistries = () =>
  axios.get('http://localhost:3000/registries')
  .then((registries) => registries.data)
