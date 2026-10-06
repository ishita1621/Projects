import { useState, useEffect } from 'react'
import {
    getCountries,
    getStates,
    getCities,
} from '../services/AxiosLocation'
import {
    Stack,
    Typography,
    Paper,
} from '@mui/material'
import MuiAutocomplete from './MuiAutocomplete'

function LocationSelector() {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState(null)

    const [states, setStates] = useState([])
    const [state, setState] = useState(null)

    const [cities, setCities] = useState([])
    const [city, setCity] = useState(null)

    const [countriesLoading, setCountriesLoading] = useState(false)
    const [statesLoading, setStatesLoading] = useState(false)
    const [citiesLoading, setCitiesLoading] = useState(false)

    const [countriesError, setCountriesError] = useState('')
    const [statesError, setStatesError] = useState('')
    const [citiesError, setCitiesError] = useState('')



    useEffect(() => {
        async function loadCountries() {
            setCountriesLoading(true)
            setCountriesError('')
            try {
                const data = await getCountries()

                setCountries(data)
            } catch (error) {
                console.error('Failed to load countries:', error)
                setCountriesError('Failed to load countries')
                setCountries([])
            }
            finally {
                setCountriesLoading(false)
            }
        }

        loadCountries()
    }, [])

    useEffect(() => {
        async function loadStates() {
            if (!country) {
                setStates([])
                return
            }
            setStatesLoading(true)
            setStatesError('')

            try {
                const data = await getStates(country.country)



                setStates(data)
            } catch (error) {
                console.error('Failed to load states:', error)
                setStatesError('Failed to load states')
                setStates([])

            }
            finally {
                setStatesLoading(false)
            }
        }

        loadStates()
    }, [country])


    useEffect(() => {
        async function loadCities() {
            if (!state) {
                setCities([])
                return
            }
            setCitiesLoading(true)
            setCitiesError('')
            try {
                const data = await getCities(
                    country.country,
                    state.name
                )

                console.log('Cities:', data)

                setCities(data)
            } catch (error) {
                console.error('Failed to load cities:', error)
                setCitiesError('Failed to load cities')
                setCities([])
            } finally {
                setCitiesLoading(false)
            }
        }

        loadCities()
    }, [state])

    return (
        <>
            <Paper
                sx={{
                    width: '100%',
                    maxWidth: 500,
                    p: 4,
                    borderRadius: 3,
                }}
            >
                <Typography variant="h5" mb={3}>
                    Select Location
                </Typography>

                <Stack spacing={2}>
                    <MuiAutocomplete
                        label="Country"
                        options={countries}
                        value={country}
                        getOptionLabel={(option) =>
                            console.log('Country option:', option) ||
                            option.country || ''}

                        loading={countriesLoading}
                        onChange={(newValue) => {
                            setCountry(newValue)
                            setState(null)
                            setCity(null)

                            setStatesError('')
                            setCitiesError('')
                        }}
                    />

                    {countriesError && (
                        <Typography color="error" variant="body2">
                            {countriesError}
                        </Typography>
                    )}

                    <MuiAutocomplete
                        label="State / Province"
                        options={states}
                        value={state}
                        loading={statesLoading}
                        disabled={!country}
                        getOptionLabel={(option) => option.name || ''}
                        onChange={(newValue) => {
                            setState(newValue)
                            setCity(null)

                            setCitiesError('')
                        }}
                    />
                    {statesError && (
                        <Typography color="error" variant="body2">
                            {statesError}
                        </Typography>
                    )}
                    <MuiAutocomplete
                        label="City"
                        options={cities}
                        value={city}
                        loading={citiesLoading}
                        getOptionLabel={(option) => option || ''}
                        disabled={!state}
                        onChange={(newValue) => {
                            setCity(newValue)
                        }}
                    />
                    {citiesError && (
                        <Typography color="error" variant="body2">
                            {citiesError}
                        </Typography>
                    )}
                </Stack>
            </Paper>
        </>

    )
}




export default LocationSelector