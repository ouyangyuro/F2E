import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

//====== below api connect tool start ======//
import axios from 'axios';
//====== above api connect tool end ======//

//====== below 取得Context資料 start ======//
import { useData } from '../../utils/context';
//====== above 取得Context資料 end ======//

//====== below utils TDX驗證 start ======//
import { getAuthorizationHeader } from '../../utils/getAuthorizationHeader';
//====== above utils TDX驗證 end ======//

//====== img start ======//
import icon from '../../image/icon.png';
//====== img end ======//

function Home() {
  const { setTravelData, travelData } = useData(); // 取得觀光Data
  const { theme } = useParams(); //取得精選主題
  console.log('Home theme', theme); //for test FIXME:

  useEffect(() => {
    //如果沒有指定 theme 就跑這邊
    if (!theme) {
      //=== 搜尋全部景點 Api start ===//
      async function sendspot() {
        try {
          const spotData = await axios.get(
            `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/?&$top=${9}&$format=JSON`,
            {
              headers: getAuthorizationHeader(),
            }
          );
          // console.log('Home spotData', spotData.data); //for test FIXME:
          setTravelData(spotData.data);
        } catch (e) {
          console.log(e);
        }
      }
      sendspot();
      console.log('hi no theme');
      return;
      //=== 搜尋全部景點 Api end ===//
    }
    //=== 搜尋主題 Api start ===//
    async function sendtheme() {
      try {
        const themeData = await axios.get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/?$filter=contains(Class1,'${theme}')&$top=${9}&$format=JSON`,
          {
            headers: getAuthorizationHeader(),
          }
        );
        // console.log('Home travelData', themeData.data); //for test FIXME:
        setTravelData(themeData.data);
      } catch (e) {
        console.log('error:', e);
      }
    }
    sendtheme();
    //=== 搜尋主題 Api end ===//
  }, [theme]);

  return (
    <>
      <article className="hotSpot ml-5">熱門景點</article>
      {travelData && (
        <div className="flex flex-wrap justify-around gap-4 px-6">
          {travelData.map((item, i) => (
            <div
              key={i}
              className="max-w-1/3 rounded-lg overflow-hidden card_shadow cursor-pointer transform transition duration-500 hover:scale-95"
            >
              <Link to={'/F2E/detail/' + i}>
                {item.Picture.PictureUrl1 === undefined ? (
                  <img
                    className="w-330px h-40 bg-gray-200 object-contain"
                    src={icon}
                    alt="spot pic"
                  />
                ) : (
                  <img
                    className="w-330px h-40 object-cover"
                    src={item.Picture.PictureUrl1}
                    alt="spot pic"
                  />
                )}

                <div className="px-6 py-4 h-full bg-white">
                  <div className="mb-2 card_title">{item.Name}</div>
                  {item.ScenicSpotName === undefined ? (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #無
                    </span>
                  ) : (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{item.ScenicSpotName}
                    </span>
                  )}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{item.Phone}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
