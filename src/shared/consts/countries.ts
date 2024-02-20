import countiesJson from './countries.json'

interface Countries {
  countries: Array<{ name: string }>
}

const data: Countries = JSON.parse(JSON.stringify(countiesJson))

export const countries = data.countries
