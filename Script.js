document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("saibaMais");
  if (botao) {
    botao.addEventListener("click", () => {
      const paragrafo = document.createElement("p");
      paragrafo.textContent = "Aproveite descontos exclusivos em nossos pacotes de viagem!";
      document.querySelector("main").appendChild(paragrafo);
    });
  }
});