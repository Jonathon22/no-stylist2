// import axios from 'axios';

// const baseUrl = 'https://no-stylist-20ec2-default-rtdb.firebaseio.com';

// const patchFBOutfitskeys = () => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/outfits.json`).then((response) => {
//     // console.warn(Object.keys(response.data));
//     const keys = Object.keys(response.data);
//     keys.forEach((key) => {
//       axios.patch(`${baseUrl}/outfits/${key}.json`, { firebaseKey: key });
//     });
//   }).catch((error) => reject(error));
// });

// const patchFBItemskeys = () => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/items.json`).then((response) => {
//     // console.warn(Object.keys(response.data));
//     const keys = Object.keys(response.data);
//     keys.forEach((key) => {
//       axios.patch(`${baseUrl}/items/${key}.json`, { firebaseKey: key });
//     });
//   }).catch((error) => reject(error));
// });

// export {
//   patchFBOutfitskeys,
//   patchFBItemskeys,
// };
