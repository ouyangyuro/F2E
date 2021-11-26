import React from 'react';

//====== below 取得Context資料 start ======//
import { useData } from '../../../utils/context';
//====== above 取得Context資料 end ======//

function Main() {
  const { travelData } = useData(); // 取得觀光Data

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

export default Main;
