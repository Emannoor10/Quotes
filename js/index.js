var quotes = [
    {
        quote: '“We accept the love we think we deserve..”',
        author: '--Stephen Chbosky'
    },
    {
       quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        author: '--Mahatma Gandhi'
    },
    {
        quote: '“Don’t walk behind me… I may not lead Walk beside me… just be my friend”',
        author: '--Albert Camus'
    },
    {
        quote: '“You only live once, but if you do it right, once is enough.”',
        author: '--Mae West'
    },
    {
        quote: '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
        author: '-- Ralph Waldo Emerson'
    },
    
    {
        quote: '“Good friends, good books, and a sleepy conscience: this is the ideal life.”',
        author: '--Mark Twain'
    },
    {
        quote: '“So many books, so little time.”',
        author: '--Frank Zappa'
    }
];


var previousQuote = -1;
function showRandomQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex ===previousQuote);
    previousQuote = randomIndex;
    var randomQuote = quotes[randomIndex];
    document.getElementById('quote').innerHTML = randomQuote.quote;
    document.getElementById('author').innerHTML = randomQuote.author;
}




