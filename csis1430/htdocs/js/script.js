let quotes = [
    'Be yourself; everyone else is already taken. - Oscar Wilde',
    'Two things are infinite: the universe and human stupidity; and I am not sure about the universe. - Albert Einstein',
    'So many books, so little time. - Frank Zappa',
    'A room without books is like a body without a soul. - Marcus Tullius Cicero',
    'Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind. - M. Baruch',
    'You know you are in love when you can not fall asleep because reality is finally better than your dreams. - Dr. Seuss',
    'In three words I can sum up everything I have learned about life: it goes on. - Robert Frost',
    'If you tell the truth, you do not have to remember anything. - Mark Twain',
    'Always forgive your enemies; nothing annoys them so much. - Oscar Wilde',
    'A friend is someone who knows all about you and still loves you. - Elbert Hubbard',
    'We accept the love we think we deserve. - Stephen Chbosky',
]

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
