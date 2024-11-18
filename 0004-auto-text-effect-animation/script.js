const containerEl = document.querySelector(".container");

const careers = ["Programmer", "Web Developer", "Freelancer", "Coder"];



// m.
// let careers = [];

// m.
// const forButton1 = document.getElementById("forButton1");

// function displayIt1() {
//     const forInput1 = document.getElementById("forInput1");
//     // const forP1 = document.getElementById("forP1");
//     // forP1.innerHTML = forInput1.value;
//     const forPush1 = careers.push(forInput1.value);
//     return forPush1;
// }

// forButton1.onclick = displayIt1;




let careerIndex = 0;

let characterIndex = 0;

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<h1>My wish is to become ${careers[careerIndex].slice(0,1) === "I" ? "an": "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>
    `;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400);
}

updateText();



//m.

// const forContainer1 = document.querySelector(".container");

// const forArray1 = ["programmer", "coder", "web developer", "remoter worker"];


// function displayIt2(pr1) {
//     for (let i = 0; i < forArray1.length; i++) {
//         forContainer1.innerHTML = `My wish is become ${pr1[i]}`;
//     }
// }

// displayIt2(forArray1);
