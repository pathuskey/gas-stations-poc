import React, { useEffect } from "react"
import { Map as BaseMap, TileLayer, Marker } from "react-leaflet"
import L from "leaflet"
import { IGeoPoint } from "../types/station"

import "./map.scss"

interface IMapProps {
  point?: IGeoPoint
}

const Map: React.FC<IMapProps> = ({ point }) => {
  useEffect(() => {
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    })
  }, [])

  if (point) {
    return (
      <BaseMap
        className="map"
        center={[point.latitude, point.longitude]}
        zoom={12}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[point.latitude, point.longitude]} />
      </BaseMap>
    )
  }

  return null
}

export default Map
