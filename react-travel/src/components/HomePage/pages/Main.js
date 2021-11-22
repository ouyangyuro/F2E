import React, { useState } from 'react';

//====== below api connect tool start ======//
import axios from 'axios';
//====== above api connect tool end ======//

//====== below 加密 tool start ======//
import jsSHA from 'jssha';
//====== above 加密 tool end ======//

function Main() {
  const [limitNum, setLimitNum] = useState(''); // 要搜的筆數
  const [keywordTxt, setKeywordTxt] = useState(''); // 搜尋的關鍵字
  const [travelData, setTravelData] = useState([]); // 存傳回來的觀光Data

  console.log('limitNum out', limitNum); //for test
  console.log('keywordTxt out', keywordTxt); //for test

  //=== Api star ===//
  async function sendSearch() {
    console.log('keywordTxt in', keywordTxt); //for test
    console.log('limitNum in', limitNum); //for test
    try {
      const travelData = await axios.get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name,'${keywordTxt}')&$top=${limitNum}&$format=JSON`,
        {
          headers: getAuthorizationHeader(),
        }
      );
      console.log('travelData', travelData.data); //for test
      setTravelData(travelData.data);
    } catch (e) {
      console.log(e);
    }
  }
  //=== Api end ===//

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

  return (
    <>
      <input
        type="text"
        placeholder="請輸入景點關鍵字"
        className="keyword"
        value={keywordTxt}
        onChange={(e) => setKeywordTxt(e.target.value)}
      />
      <select value={limitNum} onChange={(e) => setLimitNum(e.target.value)}>
        <option value="30">請選擇你要篩選的筆數</option>
        <option value="3">3</option>
        <option value="10">10</option>
      </select>
      <button onClick={sendSearch}>搜尋</button>
      <h2>景點列表</h2>
      <ul className="list">
        {travelData.map((item, i) => (
          <li key={i}>{item.Name}</li>
        ))}
      </ul>

      <article></article>
      <article></article>
      <article></article>
      <article></article>
    </>
  );
}

export default Main;
