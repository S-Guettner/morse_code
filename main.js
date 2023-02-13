const textInput = document.querySelector("#textInput")
const button = document.querySelector("#button")
const morseCodeOutput = document.querySelector("#morseCodeOutput")
const textOutput = document.querySelector("#textOutput")
const newInput = document.querySelector(".newInput")

let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];

const letterArray = []
const morseCodeArray = []
const inputLetterArray = []
const morseCode = []

morseAlphabet.forEach((item) =>{
    letterArray.push(item.letter)
})
morseAlphabet.forEach((item) =>{
    morseCodeArray.push(item.morseCode)
})

button.addEventListener('click', () => {
    let text = textInput.value
    button.style.display="none"
    for(let i = 0; i < text.length; i++){
        inputLetterArray.push(text.charAt(i).toUpperCase())
        morseCode.push(morseAlphabet[letterArray.indexOf(inputLetterArray[i])].morseCode)
    }
    textOutput.innerHTML = inputLetterArray.join("|")
    morseCodeOutput.innerHTML = morseCode.join("|")
    newInput.style.display="block"
})

