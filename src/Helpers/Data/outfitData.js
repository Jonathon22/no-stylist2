import axios from 'axios';

const baseUrl = 'https://no-stylist-20ec2-default-rtdb.firebaseio.com';

const getUserOutfits = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/outfits.json?orderBy="userid"&equalTo="${uid}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const getAllOutfits = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/outfits.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

export {
  getUserOutfits,
  getAllOutfits,
};
