var arr = [
    `“Be yourself; everyone else is already taken.”
    ― Oscar Wilde`,
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    ― Marilyn Monroe`,
    `“So many books, so little time.”
    ― Frank Zappa`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`
];

var previousQuote = '';

function takeRandom() {
    var randomQuote;

    do {
        randomQuote = arr[Math.floor(Math.random() * arr.length)];
    } while (randomQuote === previousQuote);

    previousQuote = randomQuote;

    var h = `<h3 class="Hehe">${randomQuote}</h3>`;
    document.getElementById('quote').innerHTML = h;
}
s