// import axios from 'axios';
// import ApiKeys from '../props/apiKeys';

// const baseUrl = ApiKeys.databaseURL;

// // const checkIfUserExistsInFirebase = (user) => {
//   axios
//     .get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${user.uid}"`)
//     .then((resp) => {
//       if (Object.values(resp.data).length === 0) {
//         axios.post(`${baseUrl}/users.json`, user).then((response) => {
//           const update = { firebaseKey: response.data.name };
//           axios
//             .patch(`${baseUrl}/users/${response.data.name}.json`, update)
//             .catch((error) => console.warn(error));
//         });
//       } else {
//         console.warn('User Already Exists');
//       }
//       window.sessionStorage.setItem('ua', true);
//     })
//     .catch((error) => console.error(error));
// };

// const getAllUsers = () => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/users.json`).then((response) => {
//     const userData = response.data;
//     const users = [];
//     if (userData) {
//       Object.keys(userData).forEach((item) => {
//         users.push(userData[item]);
//       });
//     }
//     resolve(users);
//   }).catch((error) => reject(error));
// });

// export default {
//   checkIfUserExistsInFirebase,
//   getAllUsers,
// };
