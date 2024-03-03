//green, на yellow, на red,
function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
  }
}
// console.log(updateLight("red"));
