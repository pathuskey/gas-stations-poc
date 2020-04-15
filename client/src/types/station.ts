export default interface IStation {
  id?: number
  displayName?: string
  distance?: number
  address?: IAddress
  phone?: string
  geoPoint?: IGeoPoint
  detailsPageURL?: string
}

export interface IAddress {
  postalCode?: string
  address?: string
  city?: string
  state?: string
  country?: string
}

export interface IGeoPoint {
  latitude: number
  longitude: number
}
