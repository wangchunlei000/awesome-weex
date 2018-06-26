/**
 * Created by dwb on 2018/6/26.
 */
// const config = require('../../configs/config'); function loadImage(imgUrl) {
//   // let host = config.dev.host;     // let port = config.dev.port;     let
// host = "127.0.0.1";     let port = "8081";     return
// `http://${host}:${port}/resources/${imgUrl}`; }

// const loadImage = ((imgUrl) => {
//   let host = "127.0.0.1";
//   let port = "8081";
//   return `http://${host}:${port}/resources/${imgUrl}`;
// });

export function loadImage(imgUrl) {
  let host = "127.0.0.1";
  let port = "8081";
  return `http://${host}:${port}/resources/${imgUrl}`;
}

// exports.default = {loadImage};
// module.exports = {
//   loadImage
// };