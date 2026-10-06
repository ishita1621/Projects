import axios from 'axios'

const api = axios.create({
  baseURL: 'https://countriesnow.space/api/v0.1',
})

export async function getCountries() {
  const response = await api.get('/countries')

  return response.data.data
}

export async function getStates(country) {
  const response = await api.post('/countries/states', {
    country,
  })

  return response.data.data.states
}

export async function getCities(country, state) {
  const response = await api.post('/countries/state/cities', {
    country,
    state,
  })

  console.log('City API response:', response.data)

  return response.data.data
}
