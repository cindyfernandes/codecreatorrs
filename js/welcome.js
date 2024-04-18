const text = "Your High Quality Digital Agency Based in Ireland!"
const container = document.getElementById ('welcome_text');
let index = 0;
const charactersPerLine = 38;

function Welcome_Text (){
    if (index < text.length){

        container.innerHTML += text.charAt (index);
        index++;
        setTimeout(Welcome_Text, 30);
    } else {
        underlineLastWord();
    }
}
function underlineLastWord() {
    const words = text.split(" ");
    const lastWord = words[words.length - 1];
    const lastIndex = container.innerHTML.lastIndexOf(lastWord);
    const newHTML = container.innerHTML.substring(0, lastIndex) +
        "<span class='underline'>" + lastWord + "</span>";
    container.innerHTML = newHTML;
}

Welcome_Text();
