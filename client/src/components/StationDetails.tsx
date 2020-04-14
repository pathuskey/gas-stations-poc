import React from "react"
import IStation from "../types/station"
import Map from "./Map"
import { Card, CardBody } from "reactstrap"

import "./stationDetails.scss"

interface IStationDetailsProps {
  station: IStation
}

interface IAttributeProps {
  label: string
  value: string | React.ReactNode
}

const Attribute: React.FC<IAttributeProps> = ({ label, value }) => {
  return (
    <p>
      <span className="font-weight-bold text-underline">{label}:</span>
      <br />
      {value}
    </p>
  )
}

const StationDetails: React.FC<IStationDetailsProps> = ({ station }) => {
  return (
    <div className="station-details animated fadeIn">
      <Map point={station.geoPoint} />

      <Card className="station-details__card mx-2 mx-sm-3 mx-lg-5 mb-4 shadow">
        <CardBody>
          {station.displayName && (
            <h3 className="mb-3">{station.displayName}</h3>
          )}
          {station.address && (
            <Attribute
              label="Address"
              value={
                <>
                  {station.address.address}
                  <br />
                  {station.address.city}, {station.address.state}{" "}
                  {station.address.postalCode}
                </>
              }
            />
          )}
          {station.phone && <Attribute label="Phone" value={station.phone} />}
          {station.detailsPageURL && (
            <p className="mb-0 mt-3">
              <a
                href={station.detailsPageURL}
                target="_blank"
                rel="noreferrer noopener"
              >
                Go to store...
              </a>
            </p>
          )}
        </CardBody>
      </Card>
    </div>
  )
}

export default StationDetails
