let randomizer = Math.floor(Math.random() * 4);

let fate;

switch (randomizer) {
  case 0:
    fate = "A certain victory";
    break;
  case 1:
    fate = "Not so certain victory";
    break;
  case 2:
    fate = "An uneasy victory";
    break;
  default:
    fate = "Your fate is unclear, ô chosen undead";
}

console.log("Your fate is: " + fate);
