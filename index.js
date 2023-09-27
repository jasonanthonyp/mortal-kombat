const charList = document.querySelector(".character-list");
let selectedId;

function showDetails(char) {
    selectedId = char.id;
    fetch(`http://localhost:3000/characters/${selectedId}`)
        .then(res => res.json())
        .then(character => {
            document.querySelector(".detail-image").src = character.image;
            document.querySelector("#name").textContent = character.name;
            document.querySelector("#description").textContent = character.description;
            document.querySelector("#vote-count").textContent = character.votes;
        })
}

function listChar(char) {
    const kombatImage = document.createElement("img");
    kombatImage.src = char.image;
    kombatImage.addEventListener("click", (e) => {
        e.preventDefault();
        selectedId = char.id;
        showDetails(char);
    })
    charList.append(kombatImage);
};

fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(characters => {
        showDetails(characters[0]);
        characters.forEach(character => {
            listChar(character);
        });
    });

document.getElementById("submit-likes").addEventListener("submit", (e) => {
    e.preventDefault();
    let voteCount = document.getElementById("vote-count");
    let newVotes = parseInt(voteCount.textContent);
    newVotes++;
    fetch(`http://localhost:3000/characters/${selectedId}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            votes: newVotes
        })
    });
    voteCount.textContent = newVotes;
});