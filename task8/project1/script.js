let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [{
    quote: `I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.`,
    author: ` Charlotte Brontë`
},
{
    quote: `It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity.`,
    author: ` Charles Dickens`
}, {
    quote: `Beware; for I am fearless, and therefore powerful`,
    author: ` Mary Shelley`
}, {
    quote: `I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand.`,
    author: ` Harper Lee`
}, {
    quote: `This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man`,
    author: `  William Shakespeare`
}, {
    quote: `I took a deep breath and listened to the old brag of my heart: I am, I am, I am.`,
    author: `  Sylvia Plath`
}, {
    quote: `And so we beat on, boats against the current, borne back ceaselessly into the past`,
    author: `   F. Scott Fitzgerald`
}, {
    quote: `Generally, by the time you are Real, most of your hair has been loved off, and your eyes drop out and you get loose in the joints and very shabby.`,
    author: `  Margery Williams`
}, {
    quote: `There are years that ask questions and years that answer`,
    author: `  Zora Neale Hurston`
}, {
    quote: `All happy families are alike; each unhappy family is unhappy in its own way.`,
    author: ` Leo Tolstoy`
}];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})