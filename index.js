
const text = document.getElementById("text-container");

let array = [
    "Discover conceptually what workflows and GitHub actions are",
    "Whereas recognition of the inherent dignity",
    "Learn what terms like action, step, job, event, workflow, etc.. mean",
    "Some lectures will require some basic docker knowledge (it's not necessary if you want to skip it)",
    "Using GitHub Actions you will find a lot of official and community pre-made workflows and also the actions marketplace.",
    "In this GitHub Actions Tutorial we go through the following topics",
    "After that I explain the basic concepts of GitHub Actions, including the GitHub Events and Actions and workflow and HOW GitHub Actions actually automates these workflows using these components.",
    "I will explain shortly why it is not just another ci/cd tool or what are the benefits of GitHub Actions ci cd pipeline."
];

window.addEventListener("load", () => {
    var init = 0;
    var sentence_index = 0;
    setInterval(() => {
        const sentence = array[sentence_index];
        init++;
        text.innerText = sentence.slice(0, init);
        if (sentence.length == init) {
            init = 0;
            sentence_index < array.length - 1 ? sentence_index++ : sentence_index = 0;
        }
    }, 50);
});




