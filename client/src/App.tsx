import React, { useEffect, useState } from "react"
import "typeface-roboto"
import api from "./api"
import SearchForm from "./components/SearchForm"
import SearchParams from "./types/searchParams"
import IStation from "./types/station"
import StationCard from "./components/StationCard"
import StationDetails from "./components/StationDetails"
import { Spinner, Container, Row, Col } from "reactstrap"

import "./scss/global.scss"

const App = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>()
  const [gasStations, setGasStations] = useState<IStation[] | null>()
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [noResults, setNoResults] = useState<boolean>(false)
  const [selectedStation, setSelectedStation] = useState<IStation | null>()

  const handleSearchSubmit = (params?: SearchParams): void => {
    setSearchParams({
      zipCode: params?.zipCode,
      distance: params?.distance,
    })
  }

  useEffect(() => {
    const getGasStations = async () => {
      try {
        if (searchParams?.zipCode) {
          setIsSearching(true)
        }

        const response: any = await api.getGasStations(searchParams)

        if (response.success) {
          setGasStations(response.data)

          if (searchParams?.zipCode) {
            setNoResults(false)
          }
        } else {
          setGasStations(null)

          if (searchParams?.zipCode) {
            setNoResults(true)
          }
        }
      } catch (err) {
        console.log(err)
        setGasStations(null)
      } finally {
        setIsSearching(false)
        setSelectedStation(null)
      }
    }

    getGasStations()
  }, [searchParams])

  return (
    <main className="main-content">
      <div className="main-content__header px-3 py-4 border-bottom bg-white">
        <SearchForm onSubmit={handleSearchSubmit} />
      </div>

      <Container className="px-0">
        {gasStations && gasStations.length > 0 && (
          <Row className="flex-md-row-reverse" noGutters>
            <Col className="main-content__col pl-lg-0 pr-lg-4" xs="12" lg="9">
              {selectedStation ? (
                <StationDetails station={selectedStation} />
              ) : (
                <p className="text-center lead px-5 pt-4 pt-lg-5">
                  Please select a store to see more details.
                </p>
              )}
            </Col>

            <Col
              className="main-content__col px-5 px-lg-4 pb-4 pt-lg-4"
              xs="12"
              lg="3"
            >
              {gasStations.map((gasStation: IStation, i: number) => (
                <StationCard
                  key={i}
                  className="mb-2 shadow-sm"
                  displayName={gasStation.displayName}
                  distance={gasStation.distance}
                  style={{ "--index": i }}
                  onClick={() => setSelectedStation(gasStation)}
                  active={gasStation.id === selectedStation?.id}
                />
              ))}
            </Col>
          </Row>
        )}

        {noResults && (
          <p className="text-center lead px-5 pt-5">
            Sorry! We could not found any gas stations near your area.
          </p>
        )}

        {!gasStations && !noResults && (
          <p className="text-center lead px-5 pt-5">
            Search to find a gas station near you.
          </p>
        )}

        {isSearching && (
          <div
            className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ zIndex: 1, top: 0, left: 0 }}
          >
            <Spinner
              color="primary"
              style={{ width: "4rem", height: "4rem" }}
            />
          </div>
        )}
      </Container>
    </main>
  )
}

export default App
