function toggleMode() {
  //Pegando o elemento HTML
  const html = document.documentElement

  // Forma de fazer a troca do layout para o light
  // Fazendo a troca de classes
  html.classList.toggle("light")

  // Trocar a imagem de profile
  // Pegar a tag img
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuros e camisa preta, sem barba e fundo colorido"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
