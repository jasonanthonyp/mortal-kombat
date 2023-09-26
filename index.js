fetch("http://localhost:3000/characters")
.then(response => response.json())
.then(characters => {
    //console.log(characters)
    characters.forEach(character => {
        const kombatImage = document.createElement("img")
        kombatImage.src = character.image
        document.querySelector(".character-list").append(kombatImage)

        // kombatImage.addEventListener("click", () => {
        //     document.querySelector(".detail-image").src = character.image
        // })
        
    })
})




