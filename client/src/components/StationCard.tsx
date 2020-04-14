import React from "react"
import IComponentProps from "../types/componentProps"
import IStation from "../types/station"
import { Card, CardBody, Button } from "reactstrap"

import "./stationCard.scss"

interface IStationCardProps extends IStation, IComponentProps {
  active: boolean
}

const StationCard: React.FC<IStationCardProps> = ({
  displayName,
  distance,
  className,
  style,
  onClick,
  active,
}) => {
  return (
    <Card
      className={`station-card ${
        active ? "station-card--active" : ""
      } ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <CardBody>
        {displayName && (
          <p className="station-card__title h5 text-primary">{displayName}</p>
        )}

        {distance && (
          <p className="station-card__distance">
            <label>Distance:</label> {distance} miles
          </p>
        )}

        <Button className="station-card__btn stretched-link" size="sm" outline>
          See Details{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" style={{ fill: "none" }} />
            <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z" />
          </svg>
        </Button>
      </CardBody>
    </Card>
  )
}

export default StationCard
