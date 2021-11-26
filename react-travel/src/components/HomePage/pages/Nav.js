import React, { useState } from 'react';

//====== below api connect tool start ======//
import axios from 'axios';
//====== above api connect tool end ======//

//====== below 加密 tool start ======//
import jsSHA from 'jssha';
//====== above 加密 tool end ======//

//====== below 取得Context資料 start ======//
import { useData } from '../../../utils/context';
//====== above 取得Context資料 end ======//

//====== img start ======//
import logo from '../../../img/LOGO.svg';
import arrow from '../../../img/ArrowDown.svg';
import search from '../../../img/Search.svg';
import history from '../../../img/history.svg';
import outside from '../../../img/outside.svg';
import religion from '../../../img/religion.svg';
import lantern from '../../../img/lantern.svg';
import view from '../../../img/view.svg';
import food from '../../../img/food.svg';
import live from '../../../img/live.svg';
import travel from '../../../img/travel.svg';
//====== img end ======//

function Nav() {
  const { setTravelData } = useData(); // 取得觀光Data
  const [keywordTxt, setKeywordTxt] = useState(''); // 搜尋的關鍵字
  console.log('keywordTxt out', keywordTxt); //for test FIXME:

  //=== 搜尋關鍵字 Api star ===//
  async function sendSearch() {
    console.log('keywordTxt in', keywordTxt); //for test FIXME:

    try {
      const travelData = await axios.get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name,'${keywordTxt}')&$top=${30}&$format=JSON`,
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
  //=== 搜尋關鍵字 Api end ===//

  //=== 搜尋input完，按enter事件 start ===//
  const handleEnterKey = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      sendSearch();
    }
  };
  //=== 搜尋input完，按enter事件 end ===//

  return (
    <>
      <div className="nav_container sticky top-0">
        <div className="nav_top">
          <div className="nav_logo">
            <img src={logo} alt="nav logo" />
          </div>
          <div className="nav_searchPlace relative">
            {/*below search places */}
            <button>
              <img
                src={arrow}
                alt="btn_places"
                className="absolute 2xl:right-3 xl:right-14 lg:right-28 transform -translate-y-2/3"
              />
            </button>
            <input
              type="text"
              className="mt-4 rounded-md 2xl:w-full xl:w-5/6 lg:w-2/3 border-gray-200 bg-gray-100 text-gray-700 focus:border-gray-500 focus:bg-white"
              placeholder="目的地"
            />
            <div className="location bg-gray-500">
              <div className="flex flex-wrap">
                <p>台北市</p>
                <p>台中市</p>
                <p>台南市</p>
                <p>台北市</p>
                <p>台中市</p>
                <p>台南市</p>
              </div>
            </div>
            {/*above search places */}

            {/*below search keyword */}
            <button onClick={sendSearch}>
              <img
                src={search}
                alt="btn_search"
                className="absolute 2xl:right-3 xl:right-14 lg:right-28 transform translate-y-10"
              />
            </button>
            <input
              type="text"
              className="mt-4 rounded-md 2xl:w-full xl:w-5/6 lg:w-2/3 border-gray-200 bg-gray-100 text-gray-700 focus:border-gray-500 focus:bg-white"
              placeholder="搜尋關鍵字"
              value={keywordTxt}
              onChange={(e) => setKeywordTxt(e.target.value)}
              onKeyPress={handleEnterKey}
            />
            {/*above search keyword */}
            <hr className="mt-5 2xl:w-full xl:w-5/6 lg:w-2/3" />
          </div>
        </div>
        {/* above nav top, below nav down, <hr /> is separate */}
        <div className="nav_down">
          <p className="theme_title">精選主題</p>
          <div className="theme mt-5">
            {/* first row*/}
            <div className="flex justify-around">
              <div>
                <button className="circle_history">
                  <img src={history} alt="btn_history" />
                </button>
                <p className="theme_font">歷史文化</p>
              </div>
              <div>
                <button className="circle_outside">
                  <img src={outside} alt="btn_outside" />
                </button>
                <p className="theme_font">戶外踏青</p>
              </div>
            </div>
            {/* second row*/}
            <div className="flex justify-around mt-5">
              <div>
                <button className="circle_religion">
                  <img src={religion} alt="btn_religion" />
                </button>
                <p className="theme_font">宗教巡禮</p>
              </div>
              <div>
                <button className="circle_lantern">
                  <img src={lantern} alt="btn_lantern" />
                </button>
                <p className="theme_font">親子活動</p>
              </div>
            </div>
            {/* third row*/}
            <div className="flex justify-around mt-5">
              <div>
                <button className="circle_view">
                  <img src={view} alt="btn_view" />
                </button>
                <p className="theme_font text-center">風景區</p>
              </div>
              <div>
                <button className="circle_food">
                  <img src={food} alt="btn_food" />
                </button>
                <p className="theme_font">美食品嘗</p>
              </div>
            </div>
            {/* fourth row*/}
            <div className="flex justify-around mt-5">
              <div>
                <button className="circle_live">
                  <img src={live} alt="btn_live" />
                </button>
                <p className="theme_font">住宿推薦</p>
              </div>
              <div>
                <button className="circle_travel">
                  <img src={travel} alt="btn_travel" />
                </button>
                <p className="theme_font">觀光活動</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
