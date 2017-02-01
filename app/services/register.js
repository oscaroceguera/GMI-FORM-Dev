import axios from 'axios'
import { API_URL } from './config'

export const savePerson = (person) =>
  axios
    .post(`${API_URL}/registries`, person)
    .then((data) => data.body)

export const fetchRegistries = () =>
  axios
    .get(`${API_URL}/registries`)
    .then((registries) => registries.data)
