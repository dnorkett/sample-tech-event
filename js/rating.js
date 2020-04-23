const speakerList = document.querySelectorAll('.speakerLi');
const selectedSpeakersText = document.querySelector('#selectedSpeakers');
const selectedSpeakers = [];

const addSpeaker = (e) => {
    if (selectedSpeakers.length < 3) {
        selectedSpeakers.push(e.target.textContent);
    } else {
        alert("You may only choose three speakers.")
    }    

    selectedSpeakersText.textContent = (selectedSpeakers.join(" "));
}

for (let i of speakerList) {
    i.addEventListener("click", addSpeaker);
}