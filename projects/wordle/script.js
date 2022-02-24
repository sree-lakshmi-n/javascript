gamepageSetup();
function _(selector){
    return document.getElementById(selector);
}
function gamepageSetup(){
    for(let i = 1; i <= 6; i++){
        _("gamearea").innerHTML += "<div id='row"+i+"' class='rows gamearea-elements'></div>";
        for (let j = 1; j <= 5; j++){
             _("row"+i).innerHTML += "<div class='col"+j +" cols'></div>";
        }
    }
}
const buttonClicked = () => {
    console.log("clicked");
}
const keys = ['Q','W','E','R','T','Y','U','I','O',
'P','A','S','D','F','G','H','J','K','L','ENTER',
'Z','X','C','V','B','N','M','<<'];
keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id',key)
    buttonElement.setAttribute('class','keyboard-keys')
    buttonElement.addEventListener('click',buttonClicked)
    _('keyboard').append(buttonElement)
})  