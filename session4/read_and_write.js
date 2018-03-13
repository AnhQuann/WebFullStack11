// // const fs = require('fs');
// //
// // ////////////////////////////////////////////////////////////////////////////////
// // // Read file
// //
// // let dataFromFile = fs.readFileSync('./package.json', 'utf-8');
// // console.log(dataFromFile);
// //
// // fs.readFile('./package.json', 'utf-8', (error, data)=>{
// //   if (error) {
// //     console.log(error);
// //   }
// //   console.log(data);
// // });
// //
// // ////////////////////////////////////////////////////////////////////////////////
// // // Write file
// //
// // let dataObjectWriteFile = {
// //   a: 5,
// //   b: 6
// // }
// //
// // fs.writeFile('test.txt', JSON.stringify(dataObjectWriteFile), (err)=> { //JSON.stringify: convert from OBJECT to STRING
// //   if (err) {
// //     console.log(err);
// //   }
// //   console.log('Write file success!');
// // });
// //
// // fs.readFile('test.txt', 'utf-8', (error, data)=>{
// //   if (error) {
// //     console.log(error);
// //   }
// //   console.log(JSON.parse(data).a); //JSON.parse: convert from STRING to OBJECT
// // });
//
// let fs = require('./fileController');
//
// let dataTest = {
//   FirstName: "Anh Quan",
//   LastName: "Nguyen"
// }
//
// // fs.writeFile('test.txt', JSON.stringify(dataTest));
//
// fs.readFile('test.txt', (fileData)=>{
//   console.log(JSON.parse(fileData).LastName);
// })
