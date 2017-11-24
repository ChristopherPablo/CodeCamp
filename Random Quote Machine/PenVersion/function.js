// variable to store the random quote and the colors too
 var currentQuote = '';
 var colors = ["#c72923","#116063","#57aefc","#ed674d","#9c5b93", "#4dd3ed", "#000000", "#55515e"];

// function to make the typeWriter animation
 function typewriter(text, n, def){
  if(n < (text.length)){
    $(def).html(text.substring(0, n+1));
    n++;
    setTimeout(function(){
      typewriter(text, n, def)
    },50);
  }
 }

// Getting the random quote and displaying it
  function getQuote(){
    $.ajax({
      headers: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        Accept: "application/json",
        'Content-Type' : "application/x-www-form-urlencoded"
      },

      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',

      success: function(data){
        if(typeof data === 'string'){
          data = JSON.parse(data);
        }
        currentQuote = data.quote + '  - '+ data.author;
        typewriter(currentQuote,0,'#quote');
        //Changing the background color
        var color = colors[Math.floor(Math.random()*colors.length)];

        $('body').animate({
          backgroundColor : color,
          color : color
        },1000);
      },
      error: function(){
        alert('Error to get a quote');
      }
    })
  }

// Function to post the quote to a twitter page
function posttwitter(){
 var url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote);
 window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

// calling all functions
  $(document).ready(function(){
    getQuote();
    $('#bot').on('click', getQuote);
    $('#tweet-quote').on('click',posttwitter)
  });