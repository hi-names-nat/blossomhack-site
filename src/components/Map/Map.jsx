import React, {useState} from 'react'
import mapImage from '../../images/map_images/blossomhackMap.png'
import externalIcon from '../../images/map_images/external.png'
import parkingMap from '../../images/map_images/parkingMap.jpg'
import trackerIcon from '../../images/map_images/tracker.png'

import './Map.css'
import {MapContainer, TileLayer, useMap, Marker, Popup,  } from 'react-leaflet'
import {Icon} from 'leaflet'
import "leaflet/dist/leaflet.css"


export default function Map() {

  const customIcon = new Icon({
    iconUrl: trackerIcon,
    iconSize: [25,25],
  });

  return (

  <div id="Map">

    <p>
    <b><u>Irvine Hall:</u></b> 57 Oxbow Trail, Athens, OH 45701 (

    <a className="link-color" href="https://www.google.com/maps/place/Irvine+Hall,+Athens,+OH+45701/@39.3257807,-82.1062867,19z/data=!3m1!4b1!4m6!3m5!1s0x884873be23ad08a9:0x6fc97fe501cd9296!8m2!3d39.3257807!4d-82.105643!16s%2Fg%2F1q6b7yd7l?entry=ttu" target="_blank" rel="noopener noreferrer">
        Directions:{" "}
        <img className="button-link"
        src={externalIcon}

        />
    </a>
  )
    <br/>
    <b><u>Academic Research Center:</u></b> 61 Oxbow Trail, Athens, OH 45701 (
<a className="link-color" href="https://www.google.com/maps/place/Academic+%26+Research+Center/@39.3266594,-82.1085803,17z/data=!3m1!4b1!4m6!3m5!1s0x884873be1d4f2db1:0x36af1d1d090ebe3c!8m2!3d39.3266594!4d-82.1060054!16s%2Fg%2F11c1tqbpgn?entry=ttu" target="_blank" rel="noopener noreferrer">
        Directions:{" "}
        <img className="button-link"
        src={externalIcon}

        />
    </a>
  )
<br/>



</p>
    <MapContainer center={[39.32610506774254, -82.10586303762311]} zoom={18} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[39.32660506774254, -82.10586303762311]} icon={customIcon}>
          <Popup>
            Academic Research Center: <br/>
            This is where the workshops, dinner, and judging will take place.
          </Popup>
        </Marker>
        <Marker position={[39.3257857,-82.10590]} icon={customIcon}>
          <Popup>
            Irvine Hall:<br/>
            This is where registration, lunch, opening ceremony, and closing ceremony will take place.
          </Popup>
        </Marker>
      </MapContainer>
      <br/>
      <p>
      This weekend is very busy for our campus, so be sure to arrive early to guarantee a space.
      For those who will be driving to the event and require parking, you can park for free in any of the purple or dark green lots on this map.
      <br/> <br/>
      Our opening ceremony/registration will be housed at Irvine Hall (building 118) after which, we will move to the Academic Research Center (building 119) for the remainder of the hackathon before returning to Irvine for the closing ceremony.
      <br/><br/>
      Parking spaces 109, 114, 127, and 128 are recommended as there will be a baseball game Saturday at 2PM.
      <br/>
      Open the link to see all available parking options. (
    <a href={parkingMap} target="_blank" rel="noopener noreferrer">
        <a className="link-color">
        Parking Map Lots:{" "}
        </a>
        <img className="button-link"
        src={externalIcon}
        />
    </a>
)
      </p>
</div>


  )
}
