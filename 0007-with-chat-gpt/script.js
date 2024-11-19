// // Select the button
// const button = document.getElementById("colorButton");

// //Function to generate a random color
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

// // Add a click event listener to the button
// button.addEventListener('click', () => {
//     document.body.style.backgroundColor = getRandomColor();
// });


// me
const bodyEl = document.getElementById("forBody");

const color = ["yellow", "blue", "orange", "green", "black", "pink", "red"];

colorIndex = 0;

function colorButton() {
    bodyEl.style.backgroundColor = color[colorIndex];
    colorIndex++;

    if (colorIndex === color.length) {
        colorIndex = 0;
    }
}



// const BodyEl = document.getElementById("forBody");

// const sign = "#";

// let number = 101010;

// function colorButton() {
//     BodyEl.style.backgroundColor = sign + number;
//     number = number + 1000;

//     setTimeout(colorButton, 400);
// }
