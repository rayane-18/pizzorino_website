let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];
function CountryCapital(country) {
  for (let i = 0; i < country.length; i++) {
    if (countries[i].toLowerCase === country.toLowerCase) {
      return (
        "Your country : " +
        countries[i] +
        " has the capital named : " +
        capital[i] +
        "."
      );
    } else {
      return "invalid country name";
    }
  }
}
console.log(CountryCapital("china"));
