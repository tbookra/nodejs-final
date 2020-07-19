const express = require("express");
const clients = require('../models/clients');
const app = require("../app");
const router = express.Router();

// const currentUsers = async () => {
//   try{
//   let userArr = await clients.selectUsers();
//  module.exports.usersList = userArr[0];
//   } catch (e) {
//       console.log(e);
//     }
//   };


// console.log('this is the new amodule.exports.usersListrr!!!  ', module.exports.usersList);
// console.log('this is the new arr1!!!  ', arr);
// let arr = [
//     {
//       username: "a1",
//       password: "a1",
//       name: "kenny",
//     },
//     {
//       username: "a2",
//       password: "a2",
//       name: "sten",
//     },
//   ];
  
// let usersList = async function (){
//   try{
//    await clients.selectUsers();
//    module.exports.usersList = usersList;
//   }catch (e) {
//           console.log(e);
//         }
  
// }; 

// let arr1 = async function (username) {
//   let usersList = await clients.selectUsers();
//   console.log('usersList  ',usersList[0]);
// //  return usersList[0].filter((user) => user.username == username);
//  }
// console.log('arr1: ', usersList);
  let find = (username) => arr.filter((user) => user.username == username);

  module.exports.find = find;

  