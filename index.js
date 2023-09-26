fetch("http://localhost:3000/characters")
.then(response => response.json())
.then(characters => {
    //console.log(characters)
    characters.forEach(character => {
        const kombatImage = document.createElement("img")
        kombatImage.src = character.image
      

        kombatImage.addEventListener("click", () => {
            document.querySelector(".detail-image").src = character.image
            document.querySelector("#name").textContent = character.name
            document.querySelector("#description").textContent = character.description
            document.querySelector("#vote-count").textContent = character.votes
        })
          document.querySelector(".character-list").append(kombatImage)
    })

    document.querySelector(".detail-image").src = characters[0].image
    document.querySelector("#name").textContent = characters[0].name
    document.querySelector("#description").textContent = characters[0].description


})




