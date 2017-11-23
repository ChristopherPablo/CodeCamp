/* All quotes are saved in this array.
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

var text;

//function to tke the array length and using the random math property set an
//random quote from the array to text.
function randomQuote(){
	text = data[Math.floor(Math.random()*(data.length))];
	document.getElementById('content').innerHTML = text.quote;
	document.getElementById('author').innerHTML ="- " + text.author;
}

function socialTwitter(){
	var txt = document.getElementById('content').innerHTML+' '+document.getElementById('author').innerHTML;
	var link = "https://twitter.com/intent/tweet?text="+txt+"&hashtags=quote";
	window.open(link, '_blank');
}

function socialTumblr(){
	var txt =document.getElementById('content').innerHTML+' '+document.getElementById('author').innerHTML;
	var link = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+'&content=' + txt+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';
	window.open(link, '_blank');
} */


  var currentQuote = '', currentAuthor = '';

  function getQuote(){
    $.ajax({
      headers: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
         Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function(data){
        if(typeof data === 'string'){
          data = JSON.parse(data);
        }
        currentQuote = data.quote;
        currentAuthor = data.author;

        $('.box').animate({
          opacity:0
        },500, function(){
          $(this).animate({
            opacity:1
          },500);
          $("#content").text(data.quote);
        });
      },
      error: function(){
        alert("Error to get a quote");
      }
    })
  }

  $(document).ready(function(){
   //getQuote();
    $('#quote').on('click', getQuote);
  });