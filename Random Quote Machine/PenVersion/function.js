// variable to store the random quote and the colors too
 var currentQuote = '';
 var colors = ["#b3c2bf","#a8b6bf","#9ad3de","#89bdd3","#9068be","#e62739","#173e43","#3fb0ac","#22264b","#b56969","#283018"];

// function to make the typeWriter animation

 function typeWriter(quote, author, nQ, nA){
  if(nQ < quote.length){
    $('#quote').html(quote.substring(0,nQ+1));
    nQ++;
    setTimeout(function(){
      typeWriter(quote, author, nQ,nA);
    }, 50);
  }

  else if(nA < author.length){
    $('#author').html(author.substring(0,nA+1));
    nA++;
    setTimeout(function(){
      typeWriter(quote, author, nQ,nA);
    }, 50);
  }
 }

// Getting the random quote from external address
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
        // Setting the quote to Twitter and sending it to the typeWrite function
        currentQuote = data.quote +' - '+ data.author;
        $('#author').empty();
        $('#quote').empty();
        typeWriter(data.quote,('- '+data.author),0,0);

        //Changing the background color and animating it
        var color = colors[Math.floor(Math.random()*colors.length)];
        $('body').animate({
          backgroundColor : color,
          color : color
        },1000);

        $('.button').animate({
          backgroundColor : color
        }, 1000);
      },
      error: function(){
        alert('Error to get a quote');
      }
    })
  }

// Function to post the quote to a twitter page
function posttwitter(){
 var url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(currentQuote);
 window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

// calling all functions
  $(document).ready(function(){
    getQuote();
    $('#bot').on('click', getQuote);
    $('#tweet-quote').on('click',posttwitter)
  });