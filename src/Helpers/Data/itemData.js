import axios from 'axios';

const baseUrl = 'https://no-stylist-20ec2-default-rtdb.firebaseio.com';

const getEachItem = (itemid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items/${itemid}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getAllItems = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const createItem = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/items.json`, object)
    .then((response) => {
      axios.patch(`${baseUrl}/items/${response.data.name}.json`, { firebaseKey: response.data.name })
        .then((patchResponse) => {
          resolve(patchResponse);
        }).catch((error) => reject(error));
    });
});

export {
  getEachItem,
  getAllItems,
  createItem,
};
