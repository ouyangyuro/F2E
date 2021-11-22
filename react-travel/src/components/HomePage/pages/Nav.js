import React from 'react';

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
  return (
    <>
      <div className="nav_container fixed">
        <div className="nav_top">
          <div className="nav_logo">
            <img src={logo} alt="nav logo" />
          </div>
          <div className="nav_searchPlace">
            <form className="relative">
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
              {/*above search places */}

              {/*below search keyword */}
              <button>
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
              />
              {/*above search keyword */}
            </form>
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
