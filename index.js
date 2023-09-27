
let selectedCharacter


function getLikes(id) {
    fetch("http://localhost:3000/characters/" + id)
    .then(response => response.json())
    .then(character => {
        document.querySelector("#vote-count").textContent = character.votes
    })
    

}






fetch("http://localhost:3000/characters")
.then(response => response.json())
.then(characters => {
    //console.log(characters)
    selectedCharacter = characters[0]
    characters.forEach(character => {
        const kombatImage = document.createElement("img")
        kombatImage.src = character.image
      

        kombatImage.addEventListener("click", () => {
            selectedCharacter = character
            document.querySelector(".detail-image").src = character.image
            document.querySelector("#name").textContent = character.name
            document.querySelector("#description").textContent = character.description
            getLikes(selectedCharacter.id)

        })
          document.querySelector(".character-list").append(kombatImage)
    })

    document.querySelector(".detail-image").src = characters[0].image
    document.querySelector("#name").textContent = characters[0].name
    document.querySelector("#description").textContent = characters[0].description
    document.querySelector("#vote-count").textContent = characters[0].votes

})


    
    

document.querySelector("#submit-likes").addEventListener("submit", event => {
    event.preventDefault();

    //console.log("hello")
   
    const likeButton = document.querySelector("#skull")
    let newLikeButton = document.querySelector("#vote-count")


    //count++

    //newLikeButton.innerText = count

    let updateVotes = selectedCharacter.votes

    console.log(selectedCharacter)
    fetch("http://localhost:3000/characters/" + selectedCharacter.id), {
        
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify ({
            votes: ++updateVotes
        })
    }
    
})




