function switcherTheme(){
const rootElem=document.documentElement
let dataTheme=rootElem.getAttribute('data-theme'), newTheme;
newTheme=(dataTheme==="light")?'dark': 'light';
rootElem.setAttribute('data-theme', newTheme)
}
document.querySelector("#theme_switcher").addEventListener('click',switcherTheme)








const text=document.querySelector(".fullName");
const strText=text.textContent;
const splitText=strText.split("");
text.textContent="";
for(let i=0; i<splitText.length; i++){
    text.innerHTML +="<span>" + splitText[i] + "</span>";
}

let char=0;
let timer=setInterval(onTick ,50);

function onTick(){
    const span=text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char==splitText.length){
      finish();
       return;
    }
}

function finish(){
    clearInterval(timer);
    timer=null;
}


