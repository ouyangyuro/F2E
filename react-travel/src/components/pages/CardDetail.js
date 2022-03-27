import React from 'react';
import { useParams } from 'react-router-dom';

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
} from '@heroicons/react/solid';
//====== above icon start ======//

function CardDetail() {
  const { setTravelData, travelData } = useData(); // 取得觀光Data
  console.log('CardDetail travelData', travelData);
  const { id } = useParams(); //取得id
  console.log('CardDetail id', id);

  return (
    <>
      <div className="w-full px-4 py-16">
        <div className="w-full max-w-5xl mx-auto">
          {/* img start */}
          <div>
            {travelData[id].Picture.PictureUrl1 === undefined ? (
              <img
                className="w-full h-80 bg-gray-200 object-contain rounded-2xl"
                src={icon}
                alt="spot pic"
              />
            ) : (
              <img
                className="w-full h-80 object-cover rounded-2xl"
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
            <p className="max-h-60 mt-4">
              {travelData[id].DescriptionDetail === undefined ? (
                <p>無資訊</p>
              ) : (
                <p>{travelData[id].DescriptionDetail}</p>
              )}
            </p>
          </div>
          {/* Description detail start */}

          {/* TravelInfo end */}
          <div className="mt-6">
            <h4 className="text-primary_green description_title">交通方式</h4>
            <p className="max-h-60 mt-4">
              {travelData[id].TravelInfo === undefined ? (
                <p>無資訊</p>
              ) : (
                <p>{travelData[id].TravelInfo}</p>
              )}
            </p>
          </div>
          {/* TravelInfo start */}
        </div>
      </div>
    </>
  );
}

export default CardDetail;
