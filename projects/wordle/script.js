const gameArea = document.querySelector('#gamearea');
const keyboardArea = document.querySelector('#keyboard');
const _ = (selector) => {
    return document.getElementById(selector)
}
const gameRows = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
]
gameRows.forEach((row,rowindex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id','row'+rowindex)
    rowElement.setAttribute('class','rows')
    row.forEach((col,colindex) => {
        const colElement = document.createElement('div')
        colElement.setAttribute('id','row'+rowindex+'-col'+colindex)
        colElement.setAttribute('class','cols')
        rowElement.append(colElement)
    })
    gameArea.append(rowElement)
})
const keys = ['Q','W','E','R','T','Y','U','I','O',
'P','A','S','D','F','G','H','J','K','L','ENTER',
'Z','X','C','V','B','N','M','<<'];
keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id',key)
    buttonElement.setAttribute('class','keyboard-keys')
    buttonElement.addEventListener('click',() => buttonClicked(key))
    keyboardArea.append(buttonElement)
})  
let currentRow = 0;
let currentCol = 0;
const buttonClicked = (key) => {
    console.log("clicked"+key);
    if(key === 'ENTER'){
        console.log("check row")
        return
    }
    if(key === '<<'){
        deleteLetter()
        return
    }    
    addLetter(key)
}
const addLetter = (guess) => {
   if(currentRow < 6 && currentCol < 5){
    const guessBox = _('row'+currentRow+'-col'+currentCol)
    guessBox.textContent = guess
    guessBox.setAttribute('data',guess)
    gameRows[currentRow][currentCol] = guess
    console.log(gameRows)
    currentCol++
   }
}
const deleteLetter = () => {
    if(currentCol > 0){
        currentCol--
        const guessBox = _('row'+currentRow+'-col'+currentCol)
        guessBox.textContent = ''
        guessBox.setAttribute('data','')
        gameRows[currentRow][currentCol] = ''
    }
}