// setting the variable to store the quote and author to post on twitter
// plus a var to store the gifs that change.
  var currentAuthor = '', currentQuote ='';
  var pokemonGif = ['charmander.gif','Charmeleon.gif','flareon.gif','pikachu.gif','bulbasauro.gif','squartle.gif','magikarp.gif','grouwleaf.gif','meaw.gif','dratine.gif','odish.gif','snorlax.gif'];

   function typeWriter(quote, author, nQ, nA){
    if(nQ < quote.length){
      $('#content').html(quote.substring(0,nQ+1));
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
// for some strnge reason the ajax stoped working so created another one to get the quote
/*  function getQuote(){
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

        // Setting the quote to Twitter and sending it to the typeWrite function
        currentQuote = data.quote + ' - '+ data.author;
        $('#content').empty();
        $('#author').empty();
        typeWriter(data.quote, '- '+ data.author, 0,0);

        var image = 'images/'+ pokemonGif[Math.floor(Math.random()*pokemonGif.length)];
        $('#pokemon').fadeOut(500, function(){
          $('#pokemon').attr('src',image);
          $('#pokemon').fadeIn(500);
        });
      },
      error: function(){
        alert("Error to get a quote");
      }
    })
  } */

  var quoteUrl =
  "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&jsonp=?&lang=en";
  function GetQuote() {
  $.getJSON(quoteUrl, function(json) {
    if (json.quoteText.length + json.quoteAuthor.length > 240) {
      GetQuote();
    } else{
        currentAuthor = json.quoteAuthor;
        currentQuote = json.quoteText;
      if (json.quoteAuthor == "") {
        $("#author-text").text("-" + "Unknown");
        currentAuthor = "Unknown";
      }

        $('#content').empty();
        $('#author').empty();
        typeWriter(json.quoteText, '- '+currentAuthor , 0,0);

        var image = 'images/'+ pokemonGif[Math.floor(Math.random()*pokemonGif.length)];
        $('#pokemon').fadeOut(500, function(){
          $('#pokemon').attr('src',image);
          $('#pokemon').fadeIn(500);
        });
    }
  });
}

// Function to post the quote to a tumblr page
  function postTumblr(){
  var txt =document.getElementById('content').innerHTML+' '+document.getElementById('author').innerHTML;
  var link = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+'&content=' + txt+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';
  window.open(link, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

// Function to post the quote to a twitter page
function postTwitter(){
 var url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(currentQuote+' -'+currentAuthor);
 window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

// calling all functions
  $(document).ready(function(){
    //getQuote();
    GetQuote();
    $('#quote').on('click', GetQuote);
    $('#socialTwitter').on('click',postTwitter);
    $('#socialTumblr').on('click',postTumblr);
  });