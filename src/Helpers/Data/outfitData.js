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

const getOutfitItems = (outfitid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/outfit-items.json?orderBy="outfitid"&equalTo="${outfitid}"`).then((response) => {
    const itemResponse = response.data;
    const itemArray = [];
    if (itemResponse) {
      Object.keys(itemResponse).forEach((item) => {
        itemArray.push(itemResponse[item]);
      });
    }
    resolve(itemArray);
  }).catch((error) => reject(error));
});

const deleteOutfit = (outfitFirebaseKey) => axios.delete(`${baseUrl}/outfits/${outfitFirebaseKey}.json`)
  .then(() => {
    axios.get(`${baseUrl}/outfit-items.json?orderBy="outfitid"&equalTo="${outfitFirebaseKey}"`)
      .then((response) => {
        const responseArray = Object.values(response);
        responseArray.forEach((respArr) => {
          const itemOnOutfitArray = Object.keys(respArr);
          itemOnOutfitArray.forEach((id) => {
            deleteItemFromOutfit(id);
          });
        });
      });
  });

const deleteItemFromOutfit = (itemid) => axios.delete(`${baseUrl}/outfit-items/${itemid}.json`);

const createOutfit = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/outfits.json`, object)
    .then((response) => {
      axios.patch(`${baseUrl}/outfits/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
    }).catch((error) => reject(error));
});

const updateOutfit = (outfitObj) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/outfits/${outfitObj.firebaseKey}.json`, outfitObj)
    .then((response) => {
      resolve(response);
    }).catch((error) => reject(error));
});

export {
  getUserOutfits,
  getAllOutfits,
  getOutfitItems,
  deleteOutfit,
  createOutfit,
  updateOutfit,
};
