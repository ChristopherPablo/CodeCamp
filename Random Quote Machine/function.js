// All quotes are saved in this array.*/
var data =[
  {
    "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
    "author": "Ayn Rand",
  },
  {
    "quote": "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
    "author": "A. J. Liebling",
  },
  {
    "quote": "This book fills a much-needed gap.",
    "author": "Moses Hadas in a review",
  },
  {
    "quote": "A mathematician is a device for turning coffee into theorems.",
    "author": "Paul Erdos",
  },
  {
    "quote": "The only difference between me and a madman is that I'm not mad.",
    "author": "Salvador Dali",
  },
  {
    "quote": "Never interrupt your enemy when he is making a mistake.",
    "author": "Napoleon Bonaparte",
  },
  {
    "quote": "If you are going through hell, keep going.",
    "author": "Sir Winston Churchill ",
  },
  {
    "quote": "He who has a 'why' to live, can bear with almost any 'how'.",
    "author": "Friedrich Nietzsche",
  },
  {
    "quote": "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
    "author": "Frank Lloyd Wright",
  },
  {
    "quote": "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
    "author": "Sir Winston Churchill",
  }
];


//function to tke the array length and using the random math property set an
//random quote from the array to text.
function randomQuote(){
	text = data[Math.floor(Math.random()*(data.length))];
	document.getElementById('content').innerHTML = text.quote;
	document.getElementById('author').innerHTML ="- " + text.author;
}
