const quotes = [
  {
    quote: '"Be realistic, demand the impossible!"',
    author: "Che Guevara",
  },
  {
    quote:
      '"For believe me: the secret for harvesting from existence the greatest fruitfulness and greatest enjoyment is - to live dangerously."',
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      '"Only those who will risk going too far can possibly find out how far one can go."',
    author: "T. S. Eliot",
  },
  {
    quote: `"If you don't risk anything, you risk even more."`,
    author: "Erica Jong",
  },
  {
    quote: '"The journey is the reward."',
    author: "Steve Jobs",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = chosenQuote.quote;
author.innerText = chosenQuote.author;
