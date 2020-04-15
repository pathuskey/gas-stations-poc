interface ISearchParams {
  zipCode?: string
  distance?: string
}

export default class SearchParams {
  public zipCode?: string
  public distance?: string

  constructor(searchParams?: ISearchParams) {
    this.zipCode = searchParams?.zipCode || ""
    this.distance = searchParams?.distance || "10"
  }
}
