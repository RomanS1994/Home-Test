// function friend(friends) {
//   const arr = [];
//   friends.map((el) => {
//     if (el.length === 4) {
//       arr.push(el);
//     }
//   });
//   return arr;
// }

//---------------------------------------------
// var 2

const friend = (friends) => friends.filter((el) => el.length === 4);

// console.log(friend(["Ryan", "Kieran", "Mark"]));
