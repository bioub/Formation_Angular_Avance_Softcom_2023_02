import { readFile, writeFile } from "node:fs/promises";

// Promise avec callback hell
// readFile("src.txt")
//   .then((buffer) => {
//     writeFile("dest.txt", buffer)
//       .then(() => {
//         console.log("Copy done");
//       })
//       .catch((err) => {
//         console.log("Error : " + err.message);
//       });
//   })
//   .catch((err) => {
//     console.log("Error : " + err.message);
//   });

// si je retourne une promesse dans un callback de .then ou de .catch
// plus besoin d'imbriquer et donc plus de callback hell
readFile("src.txt")
  .then((buffer) => {
    return writeFile("dest.txt", buffer);
  })
  .then(() => {
    console.log("Copy done");
  })
  .catch((err) => {
    console.log("Error : " + err.message);
  });

// en condensant un peu
readFile("src.txt")
  .then((buffer) => writeFile("dest.txt", buffer))
  .then(() => console.log("Copy done"))
  .catch((err) => console.log("Error : " + err.message));
