import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import "./CountryMap.css"

const CountryMap = ({selectedCoordinates}) => {

    const MapWrapper = ({selectedCoordinates}) => {
        const map = useMap()
    
        useEffect(() => {
            map.setView(selectedCoordinates)
        }, [selectedCoordinates, map])

        return null
    }
    
    return(
        <MapContainer center={selectedCoordinates} zoom={4} scrollWheelZoom={false}>
            <MapWrapper selectedCoordinates={selectedCoordinates}/>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selectedCoordinates}>
            </Marker>
        </MapContainer>
    )
}

export default CountryMap