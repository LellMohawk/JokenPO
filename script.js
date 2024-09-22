const optionImage = document.querySelectorAll(".option-image");
const container = document.querySelector(".container");
const resultText = document.querySelector(".result-text");
const user = document.querySelector(".user img");
const computer = document.querySelector(".computer img");

const computerSrcImg = [
  "imagens/pedra.png",
  "imagens/papel.png",
  "imagens/tesoura.png",
];

const winner = {
  /*
  (R) 0 Pedra
  (P) 1 Papel
  (S) 2 Tesoura
  Pedra < Papel > Tesoura
  Papel < Tesoura > Pedra
  Tesoura < Pedra > Papel
  */
  RR: "Empate",
  RP: "Derrota",
  RS: "Vitória",
  PP: "Empate",
  PS: "Derrota",
  PR: "Vitória",
  SS: "Empate",
  SR: "Derrota",
  SP: "Vitória",
};

function handleOptionClick(event) {
  const clickedImage = event.currentTarget;

  const clickedIndex = Array.from(optionImage).indexOf(clickedImage);

  container.classList.add("start");
  resultText.textContent = "Jo...kem...pô!";

  user.src = computer.src = computerSrcImg[0];

  setTimeout(() => {
    container.classList.remove("start");

    user.src = computerSrcImg[clickedIndex];

    const randomNumber = Math.floor(Math.random() * computerSrcImg.length);
    computer.src = computerSrcImg[randomNumber];

    const userValue = ["R", "P", "S"][clickedIndex];
    const computerValue = ["R", "P", "S"][randomNumber];

    const finalResult = winner[userValue + computerValue];

    resultText.textContent = finalResult || "Erro!";
  }, 2000);
}

optionImage.forEach((img) => {
  img.addEventListener("click", handleOptionClick);
});
