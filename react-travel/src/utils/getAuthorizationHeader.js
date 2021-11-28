//====== below 加密 tool start ======//
import jsSHA from 'jssha';
//====== above 加密 tool end ======//

export function getAuthorizationHeader() {
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
