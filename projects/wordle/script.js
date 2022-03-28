const gameArea = document.querySelector('#gamearea')
const keyboardArea = document.querySelector('#keyboard')
const messageDisplay = document.querySelector('#message')
const _ = (selector) => {
    return document.getElementById(selector)
}

// Game Rows creation - 6 rows as there are 6 guesses allowed and 5 columns since the wordle is a 5 letter word
const gameRows = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
]
// For each row, we create a div element dynamically
gameRows.forEach((row,rowindex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id','row'+rowindex)
    rowElement.setAttribute('class','rows')
    row.forEach((col,colindex) => {             // For each col in a row, a div element is created
        const colElement = document.createElement('div')
        colElement.setAttribute('id','row'+rowindex+'-col'+colindex)
        colElement.setAttribute('class','cols')
        rowElement.append(colElement)        
    })
    gameArea.append(rowElement)     // The divs are added to game-area section of the page
})
// Keyboard Creation
const keys = ['Q','W','E','R','T','Y','U','I','O',
'P','A','S','D','F','G','H','J','K','L','ENTER',
'Z','X','C','V','B','N','M','<<']
keys.forEach(key => {           // For each key in the keys[], a div element is created
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id',key)
    buttonElement.setAttribute('class','keyboard-keys')
    buttonElement.addEventListener('click',() => buttonClicked(key))
    keyboardArea.append(buttonElement)
})  

let wordle = "GUESS"        // word of the day
let currentRow = 0          
let currentCol = 0
let isGameOver = false
// Adding functionality to KeyBoard Keys
const buttonClicked = (key) => {
    if(key === 'ENTER' && isGameOver == false){    // If enter is clicked, check the letters in the current row. If it's wrong, go for the next attempt (i.e, next row), if possible
        checkRow()
        return
    }
    if(key === '<<'|| key === 'BACKSPACE'){       // If delete is clicked, delete the last entered letter
        deleteLetter()
        return
    }    
    addLetter(key)      // Populate the game area with the letter entered
}
const addLetter = (guess) => {
   if(currentRow < 6 && currentCol < 5){
    const guessBox = _('row'+currentRow+'-col'+currentCol)
    guessBox.textContent = guess
    guessBox.setAttribute('data',guess)         
    gameRows[currentRow][currentCol] = guess    // edits the gameRows array accordingly
    console.log(gameRows)
    currentCol++                                // move to the next box
   }
}
const deleteLetter = () => {
    if(currentCol > 0 && isGameOver == false){         // Checking whether current col is valid for deletion
        currentCol--
        const guessBox = _('row'+currentRow+'-col'+currentCol) // fetching tile of given id
        guessBox.textContent = ''               // value of tile
        guessBox.setAttribute('data','')        // data attribute value of tile
        gameRows[currentRow][currentCol] = ''   // modifying gameRows array
    }
} 
const checkRow = () => {
    let validWords = retrieveFromLocal("Valid_Words")
    if(currentCol > 4){   // currentCol becomes incremented by 1 at index 4 due to addLetter()
        const guess = gameRows[currentRow].join('')         // this is the user input
        
        if(guess == wordle){                            // if input is same as wordle, then you've won
            flipTile()                                      // flipping tile animation
            showMessage("Congrats!")            
            isGameOver = true                           // the game is over
            return
        }
        else if(validWords.includes(guess)){
            flipTile()                                      // flipping tile animation
            if(currentRow >=5 && isGameOver == false){                        // If you use up all 6 attempts, the game is over
                showMessage(wordle)                         // Displays the wordle
                isGameOver = true
                return
            }
            else if(currentRow < 5){                        // If you've remaining attempts, move to the next row
                currentRow++
                currentCol = 0              // go to first tile in new row
            }
        }
        else{
            showMessage("Word not in list")  
        }
    }    
}
const showMessage = (message) => {                      
    const messageElement = document.createElement('p')          // p tag in which message is added
    messageElement.textContent = message
    messageDisplay.append(messageElement)                       // added to the message section
    setTimeout(() => messageDisplay.removeChild(messageElement),2000)   // message to be removed after 2s
}
const addKeyColour = (keyLetter,colour) => {
    const key = document.getElementById(keyLetter)
    key.classList.add(colour)
}
const flipTile = () => {            
    const rowTiles = document.querySelector('#row'+currentRow).childNodes       // collecting all cols of current row
    let word = wordle                       // assigning wordle to a temporary variable, word
    rowTiles.forEach((tile,index) => {
        const tileLetter = tile.getAttribute('data')    // getting the letter of given tile
        if(tileLetter == wordle[index]){
            word = word.replace(tileLetter,'')      // Removing the green-overlay letters from word so that they won't be coloured yellow. This bug occurs when there are repeated letters in wordle. Eg, GUESS has 2 S. If we input SSSSS, the first two S's would be yellow and last two would be green. To avoid this, we remove green-overlay letters from wordle earlier itself. We don't keep this inside setTimeout() to avoid messing with flipping tiles animation.
        }
        setTimeout(() => {
            tile.classList.add('flip')
            if(tileLetter == wordle[index]){
                tile.classList.add('green-overlay')     // Green overlay to letters at correct position
                addKeyColour(tileLetter,'green-overlay')
            }
            else if(word.includes(tileLetter)){
                tile.classList.add('yellow-overlay')    // Yellow overlay to letters at wrong position
                word = word.replace(tileLetter,'')      // Removing yellow-overlay letters from word to remove repeated letters bug issue.
                addKeyColour(tileLetter,'yellow-overlay')
            }
            else{
                tile.classList.add('grey-overlay')      // Grey overlay to letters not present in wordle
                addKeyColour(tileLetter,'grey-overlay')
            }
        },500*index)    // Each tile flips at a gap of 0.5s in the order of their index.
    })
}

// Adding on key press functionality in addition to on screen keyboard
window.addEventListener('keydown', function (e) {
    if((e.key.length==1 && e.key.charAt(0).match(/[a-z]/i)) || e.key.toUpperCase() === 'ENTER' || e.key.toUpperCase() == 'BACKSPACE') {
        buttonClicked(e.key.toUpperCase())
    }
    
  }, false);

let wordle_words = [];
let valid_words = [];
//Converting csv to arrays
var data;
function convertToCSV(fileName){
    $.ajax({
        type: "GET",  
        url: fileName,
        dataType: "text",       
        success: function(response)  
        {
            data = formWords(response)
            setToLocal(fileName.split(".")[0],data)     // storing the word lists in local storage with file name as the key   
        }   
      });
}
// Refining the word list response
const formWords = (wordList) => {
    let words = wordList.split("\n")
    for (let index = 0; index < words.length; index++) {
        words[index] = words[index].substring(1,words[index].length-1)
    }
    return words
}
// Storing word lists in local storage
function setToLocal(key,arr){
    localStorage.setItem(key, JSON.stringify(arr));     // storing array as a String
}
function retrieveFromLocal(key){
    let arr = localStorage.getItem(key);    // retrieving data
    return JSON.parse(arr)      // converting it back to array
}
console.log(retrieveFromLocal("Valid_Words"))
convertToCSV("Wordle_Words.csv")
convertToCSV("Valid_Words.csv")  