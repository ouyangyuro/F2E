import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import $ from 'jquery';

//====== below api connect tool start ======//
import axios from 'axios';
//====== above api connect tool end ======//

//====== below 取得Context資料 start ======//
import { useData } from '../utils/context';
//====== above 取得Context資料 end ======//

//====== below utils 縣市資料 start ======//
import { destination } from '../utils/destination';
//====== above utils 縣市資料 end ======//

//====== below utils TDX驗證 start ======//
import { getAuthorizationHeader } from '../utils/getAuthorizationHeader';
//====== above utils TDX驗證 end ======//

//====== img start ======//
import logo from '../image/LOGO.svg';
import arrow from '../image/ArrowDown.svg';
import search from '../image/Search.svg';
import history from '../image/history.svg';
import outside from '../image/outside.svg';
import religion from '../image/religion.svg';
import lantern from '../image/lantern.svg';
import view from '../image/view.svg';
import food from '../image/food.svg';
import live from '../image/live.svg';
import travel from '../image/travel.svg';
//====== img end ======//

function Nav() {
  const { setTravelData } = useData(); // 取得觀光Data
  const [keywordTxt, setKeywordTxt] = useState(''); // 搜尋的關鍵字
  console.log('keywordTxt Nav', keywordTxt); //for test FIXME:
  const [sendToggle, setSendToggle] = useState(false);
  //=== 搜尋關鍵字 Api star ===//
  useEffect(() => {
    async function sendSearch() {
      try {
        const travelData = await axios.get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Keyword,'${keywordTxt}')&$top=${9}&$format=JSON`,
          {
            headers: getAuthorizationHeader(),
          }
        );
        setTravelData(travelData.data);
      } catch (e) {
        console.log(e);
      }
    }
    sendSearch();
  }, [sendToggle]);
  //=== 搜尋關鍵字 Api end ===//

  //=== 搜尋input完，按enter事件 start ===//
  const handleEnterKey = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      !sendToggle ? setSendToggle(true) : setSendToggle(false);
    }
  };
  //=== 搜尋input完，按enter事件 end ===//

  //=== 顯示目的地btn start ===//
  const toggleLocation = (e) => {
    $('.location').toggle();
  };
  //=== 顯示目的地btn end ===//

  //=== 目的地btn被選擇時變色 start ===//
  const selBtn = (e) => {
    $(e.currentTarget).toggleClass('selBtn');
    $(e.currentTarget).siblings().removeClass('selBtn'); //清除其他被選擇的btn
  };
  //=== 目的地btn被選擇時變色 end ===//

  //=== 按 home logo btn start ===//
  const togglehome = (e) => {
    setKeywordTxt(''); //以防搜尋關鍵字
    !sendToggle ? setSendToggle(true) : setSendToggle(false);
  };
  //=== 按 home logo btn end ===//

  return (
    <>
      <div className="nav_container sticky top-0">
        <div className="h-[40px] text-white">fack space</div>
        <div className="nav_top">
          {/* to home */}
          <Link to="/F2E" className="nav_logo" onClick={togglehome}>
            <img src={logo} alt="nav logo" />
          </Link>
          <div className="nav_searchPlace relative">
            {/*below search places */}
            <button onClick={toggleLocation}>
              <img
                src={arrow}
                alt="btn_places"
                className="absolute 2xl:right-3 xl:right-14 lg:right-28 transform -translate-y-2/3"
              />
            </button>
            <input
              type="text"
              className="location_input mt-4 rounded-md 2xl:w-full xl:w-5/6 lg:w-2/3 border-gray-200 bg-gray-100 text-gray-700 focus:border-gray-500 focus:bg-white"
              placeholder="目的地"
            />
            <div className="location hidden absolute bg-white z-20">
              <div className="flex flex-wrap justify-between">
                {destination.map((location, i) => (
                  <button
                    className="hover:bg-primary hover:text-white hover:bg-primary_green"
                    value={location.locationValue}
                    onClick={selBtn}
                    key={i}
                  >
                    {location.locationName}
                  </button>
                ))}
              </div>
            </div>
            {/*above search places */}

            {/*below search keyword */}
            <button
              onClick={() => {
                !sendToggle ? setSendToggle(true) : setSendToggle(false);
              }}
            >
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
                <Link to={`/F2E/古蹟類`}>
                  {/* Link 裡面再用一層 button 而不是直接將 Link 的 type 設定為button 是因為safari無法吃到樣式 */}
                  <button className="circle_history">
                    <img src={history} alt="btn_history" />
                  </button>
                </Link>
                <p className="theme_font">歷史文化</p>
              </div>
              <div>
                <Link to={`/F2E/自然風景類`}>
                  <button className="circle_outside">
                    <img src={outside} alt="btn_outside" />
                  </button>
                </Link>
                <p className="theme_font">戶外踏青</p>
              </div>
            </div>
            {/* second row*/}
            <div className="flex justify-around mt-5">
              <div>
                <Link to={`/F2E/廟宇類`}>
                  <button className="circle_religion">
                    <img src={religion} alt="btn_religion" />
                  </button>
                </Link>
                <p className="theme_font">宗教巡禮</p>
              </div>
              <div>
                <Link to={`/F2E/遊憩類`}>
                  <button className="circle_lantern">
                    <img src={lantern} alt="btn_lantern" />
                  </button>
                </Link>
                <p className="theme_font">親子活動</p>
              </div>
            </div>
            {/* third row*/}
            <div className="flex justify-around mt-5">
              <div>
                <Link to={`/F2E/國家風景區類`}>
                  <button className="circle_view">
                    <img src={view} alt="btn_view" />
                  </button>
                </Link>
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
