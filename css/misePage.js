window.addEventListener("load", animateText);
//écrire le texte mot par mot
function animateText() {
    const text = document.querySelector(".pAlter1");
    const textTwo = document.querySelector(".pAlter2");
    let textContent1 = text.textContent;
    let textContent2 = textTwo.textContent;
    let index1 = 0;
    let index2 = 0;

    const interval1 = setInterval(() => {
        if (index1 < textContent1.length) {
            index1++;
            text.innerHTML = textContent1.substring(0, index1);
        } else {
            clearInterval(interval1);
        }
    }, 100);

    const interval2 = setInterval(() => {
        if (index2 < textContent2.length) {
            index2++;
            textTwo.innerHTML = textContent2.substring(0, index2);
        } else {
            clearInterval(interval2);
        }
    }, 100);
}


