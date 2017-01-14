import axios from 'axios'

export const savePerson = (person) =>
  axios.post('http://localhost:3000/registries', person)
