import SearchParams from "../types/searchParams"

export const getGasStations = async (
  searchParams: SearchParams = new SearchParams()
): Promise<object> => {
  const url = `http://server:8080/?zipCode=${searchParams?.zipCode}&distance=${searchParams?.distance}`
  const response = await fetch(url)

  return response.json()
}

const apis = {
  getGasStations,
}

export default apis
