import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./CountryMap.css"

const CountryMap = ({selectedCoordinates}) => {

    return(
        <MapContainer center={[0,0]} zoom={0} scrollWheelZoom={false}>

            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selectedCoordinates}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default CountryMap