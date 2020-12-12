import axios from 'axios';

const baseUrl = 'https://no-stylist-20ec2-default-rtdb.firebaseio.com';

const getEachItem = (itemid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards/${itemid}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default getEachItem;
