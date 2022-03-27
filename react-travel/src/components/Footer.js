import React, { useEffect, useState } from 'react';

//====== below api connect tool start ======//
import axios from 'axios';
import qs from 'qs'; // for 後端 payload 的 formdata 格式，一般預設為 json
//====== above api connect tool end ======//

function Footer() {
  // const [testData, setTestData] = useState(); // 存傳回來的test
  // const [testToken, setTestToken] = useState(); // 存傳回來的token
  // console.log('testToken', testToken);
  // const [field, setField] = useState({
  //   ProductID: '35',
  // });

  // //====== below formdata format ======//
  // // useEffect(() => {
  // //   async function sendSearch() {
  // //     let data = qs.stringify(field);
  // //     try {
  // //       const travelData = await axios.post(
  // //         `http://34.81.168.79:9001/api/MyNeighborAPI/GetWebProductDetail`,
  // //         data,
  // //         {
  // //           headers: {
  // //             'Content-type': 'application/x-www-form-urlencoded',
  // //           },
  // //         }
  // //       );
  // //       setTestData(travelData.data);
  // //       console.log('testData:', travelData.data);
  // //     } catch (e) {
  // //       console.log(e);
  // //     }
  // //   }
  // //   sendSearch();
  // // }, []);
  // //====== above formdata format ======//

  // //====== below json format ======//
  // useEffect(() => {
  //   async function sendSearch() {
  //     let data = qs.stringify({
  //       EmpNo: 'Judy',
  //       PasswordNotEnc: '111111',
  //     });
  //     try {
  //       const travelData = await axios.post(
  //         `https://icpplatformapi.azurewebsites.net/api/Emp/GetToken`,
  //         data
  //       );
  //       setTestToken(travelData.data.access_token);
  //       console.log('tokenData:', travelData.data.access_token);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   sendSearch();
  // }, []);
  // //====== above json format ======//

  // //====== below json format ======//
  // useEffect(() => {
  //   if (!testToken) {
  //     return;
  //   }
  //   async function sendSearch() {
  //     let data = {
  //       ActivityID: 'AAAAAAAA',
  //       Process: 'ActivityEdit',
  //     };
  //     try {
  //       const travelData = await axios.post(
  //         `https://icpplatformapi.azurewebsites.net/api/Activity/ActivityDetail`,
  //         data,
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: 'Bearer' + ' ' + testToken,
  //           },
  //         }
  //       );
  //       setTestData(travelData.data);
  //       console.log('takeData:', travelData.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   sendSearch();
  // }, [testToken]);
  // //====== above json format ======//

  return (
    <>
      <p className="text-white">TAIWAN TRAVEL</p>
    </>
  );
}

export default Footer;
