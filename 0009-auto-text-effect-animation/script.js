// const forContainer2 = document.querySelector(".container");

// const forArray2 = ["programming", "coding", "help to others",];

// function displayIt3() {
//     let timer = 0;

//     for(let i = 0; i < forArray2.length; i++) {
//         setTimeout(() => {
//             forContainer2.innerHTML = `My wish is ${forArray2[i]}`;
//         }, timer);

//         timer = timer + 5000;
//     }
// }

// displayIt3();



const containerEl = document.querySelector(".container");

const careers = ["Programmer", "Web Developer", "Freelancer", "Instructor", "Coder"];


let careerIndex = 0;

let characterIndex = 0;

// m. to display each element with letter + letter, not with word + word;
function updateText() {
    characterIndex++;
     // m. for write the letters and match with an or a.
    containerEl.innerHTML = `<h1>My Wish is become ${careers[careerIndex].slice(0, 1) === "I" ? "an": "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    // m. to don't stop after a word become complete, display new element. (word)
    if (careers[careerIndex].length === characterIndex) {
        careerIndex++;
        characterIndex = 0;
    };
    // To loop. (circle) (from 0)
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
// m. to repeat our function.
    setTimeout(updateText, 400);
}

updateText();