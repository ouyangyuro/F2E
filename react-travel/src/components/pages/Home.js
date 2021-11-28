import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//====== below api connect tool start ======//
import axios from 'axios';
//====== above api connect tool end ======//

//====== below 取得Context資料 start ======//
import { useData } from '../../utils/context';
//====== above 取得Context資料 end ======//

//====== below utils TDX驗證 start ======//
import { getAuthorizationHeader } from '../../utils/getAuthorizationHeader';
//====== above utils TDX驗證 end ======//

function Home() {
  const { setTravelData, travelData } = useData(); // 取得觀光Data
  const { theme } = useParams(); //取得精選主題
  console.log('Home theme', theme); //for test FIXME:

  useEffect(() => {
    if (!theme) {
      return;
    }
    async function sendtheme() {
      try {
        const themeData = await axios.get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/?$filter=contains(Class1,'${theme}')&$top=${30}&$format=JSON`,
          {
            headers: getAuthorizationHeader(),
          }
        );
        console.log('Home travelData', themeData.data); //for test FIXME:
        setTravelData(themeData.data);
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
