
const text = document.getElementById("text-container");

let array = [
    "Discover conceptually what workflows and GitHub actions are",
    "Whereas recognition of the inherent dignity"
];

window.addEventListener("load", () => {
    let init = 0;
    let sentence_index = 0;
    setInterval(() => {
        const sentence = array[sentence_index];
        init++;
        text.innerText = sentence.slice(0, init);
        if (sentence.length == init) {
            init = 0;
            sentence_index < array.length - 1 ? sentence_index++ : sentence_index = 0;
        }
    }, 100);
});




