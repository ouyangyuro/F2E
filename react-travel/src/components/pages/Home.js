import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//====== below api connect tool start ======//
import axios from 'axios';
//====== above api connect tool end ======//

//====== below 加密 tool start ======//
import jsSHA from 'jssha';
//====== above 加密 tool end ======//

//====== below 取得Context資料 start ======//
import { useData } from '../../utils/context';
//====== above 取得Context資料 end ======//

function Home() {
  const { setTravelData, travelData } = useData(); // 取得觀光Data
  const { theme } = useParams(); //取的精選主題
  console.log('Home theme', theme);

  function getAuthorizationHeader() {
    //  填入自己 ID、KEY 開始
    let AppID = process.env.REACT_APP_TDX_apiId;
    let AppKey = process.env.REACT_APP_TDX_apiKey;
    //  填入自己 ID、KEY 結束
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization =
      'hmac username="' +
      AppID +
      '", algorithm="hmac-sha1", headers="x-date", signature="' +
      HMAC +
      '"';
    return { Authorization: Authorization, 'X-Date': GMTString };
  }

  useEffect(() => {
    if (!theme) {
      return;
    }
    async function sendtheme() {
      console.log('theme in', theme); //for test FIXME:
      try {
        const travelData = await axios.get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/?$filter=contains(Class1,'${theme}')&$top=${30}&$format=JSON`,
          {
            headers: getAuthorizationHeader(),
          }
        );
        console.log('travelData', travelData.data); //for test FIXME:
        setTravelData(travelData.data);
      } catch (e) {
        console.log(e);
      }
    }
    sendtheme();
  }, [theme]);
  //=== 搜尋主題 Api end ===//

  return (
    <>
      <div>
        <ul className="list">
          {travelData.map((item, i) => (
            <li key={i}>{item.Name}</li>
          ))}
        </ul>
      </div>

      <article></article>
      <article></article>
      <article></article>
      <article></article>
    </>
  );
}

export default Home;
