import axios from 'axios'

export const savePerson = (person) =>
  axios
    .post('http://ooceguera.webfactional.com/registries', person)
    .then((data) => data.body)

export const fetchRegistries = () =>
  axios.get('http://ooceguera.webfactional.com/registries')
  .then((registries) => registries.data)
