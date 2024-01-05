const names = ["Rayane", "Hamid", "Samir", "imad", "mahdi", "karim"];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  const randomNameElement = document.getElementById("randomName");
  const nameContainer = document.getElementById("nameContainer");
  const generateButton = document.getElementById("generateButton");

  generateButton.addEventListener("click", () => {
    const randomName = getRandomName();
    randomNameElement.innerText = randomName;
  });
});
