function checkSeason(month) {
  switch (month) {
    case 12:

    case 1:
    case 01:
    case 2:
    case 02:
      return "Winter";
    case 3:
    case 03:
    case 4:
    case 04:
    case 5:
    case 05:
      return "Spring";
    case 6:
    case 06:
    case 7:
    case 07:
    case 8:
    case 08:
      return "Summer";
    case 9:
    case 09:
    case 10:
    case 11:
      return "Autumn";
    default:
      return "Invalid month";
  }
}

console.log(`You are in the season of ${checkSeason(09)}.`);
