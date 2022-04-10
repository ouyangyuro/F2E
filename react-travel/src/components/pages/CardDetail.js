import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

//====== below map leaflet start ======//
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconimg from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
//====== above map leaflet end ======//

//====== below 取得Context資料 start ======//
import { useData } from '../../utils/context';
//====== above 取得Context資料 end ======//

//====== img start ======//
import icon from '../../image/icon.png';
//====== img end ======//

//====== below icon start ======//
import {
  LocationMarkerIcon,
  ClockIcon,
  PhoneIcon,
  ChevronLeftIcon,
} from '@heroicons/react/solid';
//====== above icon start ======//

function CardDetail() {
  let history = useHistory();
  //=== solve map's marker not show up start ===//
  let DefaultIcon = L.icon({
    iconUrl: iconimg,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  //=== solve map's marker not show up end ===//

  const { id } = useParams(); //取得id
  console.log('CardDetail id', id); //for check
  const { setTravelData, travelData } = useData(); // 取得觀光Data
  console.log('CardDetail travelData', travelData[id]); //for check
  const position = [
    travelData[id].Position.PositionLat,
    travelData[id].Position.PositionLon,
  ]; // map position

  return (
    <>
      <div className="w-full px-4 py-10">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex items-center">
            <ChevronLeftIcon
              onClick={history.goBack}
              className="w-6 h-6 mr-3 cursor-pointer"
            />
            <h5 className="cardSpot">{travelData[id].ScenicSpotName}</h5>
          </div>
          {/* img start */}
          <div>
            {travelData[id].Picture.PictureUrl1 === undefined ? (
              <img
                className="w-full h-80 bg-gray-200 object-contain rounded-xl"
                src={icon}
                alt="spot pic"
              />
            ) : (
              <img
                className="w-full h-80 object-cover rounded-xl"
                src={travelData[id].Picture.PictureUrl1}
                alt="spot pic"
              />
            )}
          </div>
          {/* img end */}

          {/* basic info start */}
          <div className="mt-6 h-36 p-5 bg-info_Bg rounded-2xl">
            <div className="flex items-center">
              <LocationMarkerIcon className="w-5 h-5 text-primary_green mr-2" />
              {travelData[id].Address === undefined ? (
                <p>無資訊</p>
              ) : (
                <p>{travelData[id].Address}</p>
              )}
            </div>
            <div className="flex items-center mt-4">
              <ClockIcon className="w-5 h-5 text-primary_green mr-2" />
              {travelData[id].OpenTime === undefined ? (
                <p>無資訊</p>
              ) : (
                <p>{travelData[id].OpenTime}</p>
              )}
            </div>
            <div className="flex items-center mt-4">
              <PhoneIcon className="w-5 h-5 text-primary_green mr-2" />
              {travelData[id].Phone === undefined ? (
                <p>無資訊</p>
              ) : (
                <p>{travelData[id].Phone}</p>
              )}
            </div>
          </div>
          {/* basic info end */}

          {/* Description detail end */}
          <div className="mt-6">
            <h4 className="text-primary_green description_title">景點介紹</h4>
            <div className="max-h-60 mt-4">
              {travelData[id].DescriptionDetail === undefined ? (
                <p>無資訊</p>
              ) : (
                <p>{travelData[id].DescriptionDetail}</p>
              )}
            </div>
          </div>
          {/* Description detail start */}

          {/* TravelInfo end */}
          <div className="mt-6">
            <h4 className="text-primary_green description_title">交通方式</h4>
            {/* map start */}
            <MapContainer
              center={position}
              zoom={13}
              className="w-full h-72 mt-4 rounded-lg"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}></Marker>
            </MapContainer>
            {/* map end */}
            <div className="max-h-60 mt-4">
              {travelData[id].TravelInfo === undefined ? (
                <p>無資訊</p>
              ) : (
                <p>{travelData[id].TravelInfo}</p>
              )}
            </div>
          </div>
          {/* TravelInfo start */}
        </div>
      </div>
    </>
  );
}

export default CardDetail;
