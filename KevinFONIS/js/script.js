var quotes = [
  {
    quote: "No Grit, No Pearl.",
    source: "Anonymous",
    tags: ["Grit", "Determination", "Success"]
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    tags: ["Just Do It", "Sports"]
  },
  {
    quote: "Fall seven times, stand up eight.",
    source: "Japanese Proverb",
    tags: ["Determination", "Grit"]
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won&#39;t work.",
    source: "Thomas A. Edison",
    tags: ["Perserverance", "Innovation"]
  },
  {
    quote: "Done is better than perfect.",
    source: "Sheryl Sandberg",
    tags: ["Just Do It", "Tech"]
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "First Inaugural Address",
    year: 1933,
    tags: ["Hope", "Politics"]
  }
];


var CSS_COLOR_NAMES = ["Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chocolate", "Coral", "CornflowerBlue", "Crimson", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "FireBrick", "ForestGreen", "Fuchsia", "Green", "HotPink", "IndianRed", "Indigo", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "Pink", "Plum", "PowderBlue", "Purple", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SlateBlue", "SlateGray", "SlateGrey", "SpringGreen", "SteelBlue", "Teal", "Thistle", "Tomato", "Turquoise", "Violet"];

var quoteIndex = 0;
var colorIndex = 0;
var quotesUsed = [];
var intervalID;


var NUMBER_OF_QUOTES = 6;
var CHANGE_INTERVAL = 10000;


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function emptyQuotesArray() {
  quotesUsed = [];
  console.log("Emptied queue; Start fresh.");
}

function allQuotesUsed() {
  return (quotesUsed.length === NUMBER_OF_QUOTES);
}

function getRandomQuote() {

  do {

    quoteIndex = getRandomIntInclusive(0, 5);

  } while (quotesUsed.includes(quoteIndex));

  quotesUsed.push(quoteIndex);

  logQuoteToConsole(quoteIndex);

  if (allQuotesUsed()) {
    emptyQuotesArray();
  }

  return quotes[quoteIndex];
}

function getRandomColor() {

  colorIndex = getRandomIntInclusive(0, CSS_COLOR_NAMES.length - 1);
  return CSS_COLOR_NAMES[colorIndex];
}

function logQuoteToConsole(quoteIndex) {
  console.log(quoteIndex, ': ', quotes[quoteIndex].quote.slice(0, 20));
}

function formatQuote(quote) {

  var formattedQuote =
    '<p class="quote">' + quote.quote + '</p>' +
    '<p class="source">' + quote.source;


  if (typeof quote.citation !== "undefined") {
    formattedQuote += '<span class="citation">' + quote.citation + '</span>';
  }
  if (typeof quote.year !== "undefined") {
    formattedQuote += '<span class="year">' + quote.year + '</span>';
  }
  if (typeof quote.tags !== "undefined") {
    formattedQuote += '<p class="tags">' + quote.tags.join(', ') + '</p>';
  }

  formattedQuote += '</p>';
  return formattedQuote;

}

function changeBackground() {

  document.getElementById("bgcolor").style.backgroundColor = getRandomColor();

}

function resetTimer() {

  if (intervalID) {
    window.clearInterval(intervalID);
    intervalID = setInterval(printQuote, CHANGE_INTERVAL);
  }

}

function printQuote() {

  resetTimer();
  document.getElementById('quote-box').innerHTML = formatQuote(getRandomQuote());
  changeBackground();

}

printQuote();

intervalID = window.setInterval(printQuote, CHANGE_INTERVAL);


document.getElementById('loadQuote').addEventListener("click", printQuote, false);















var pomodoro = {
  
  started : false,
  minutes : 0,
  seconds : 0,
  interval : null,
  minutesDom : null,
  secondsDom : null,
  currentStatus : null,
  currentStatusMess : null,
  
  init : function() {
      var self = this;

      currentStatus = document.getElementById('currentStatus'),

      this.minutesDom = document.getElementById('minutes');
      this.secondsDom = document.getElementById('seconds');
      this.interval = setInterval(function(){
        self.intervalCallback.apply(self);
      }, 1000);
      document.getElementById('work').onclick = function(){
        self.startWork.apply(self);
      };
      document.getElementById('shortBreak').onclick = function(){
        self.startShortBreak.apply(self);
      };
      document.getElementById('longBreak').onclick = function(){
        self.startLongBreak.apply(self);
      };
      document.getElementById('stop').onclick = function(){
        self.stopTimer.apply(self);
      };
    },

    resetVariables : function(mins, secs, started) {
      this.minutes = mins;
      this.seconds = secs;
      this.started = started;
    },

    setcurrentStatus : function(s) {
      if(s=='') {
        currentStatus.innerHTML = 'Spreman za akciju!?';
      }
      else {

        const fileUrl = 'obaveza.txt'
        fetch(fileUrl)
       .then( r => r.text() )
       .then( t => currentStatusMess = s + t )
      
        currentStatus.innerHTML = currentStatusMess;
      }
      
    },

    startWork: function() {
      this.setcurrentStatus('Učim: ');
      this.resetVariables(25, 0, true);
    },

    startShortBreak : function(){
      this.setcurrentStatus('Kratko pauziram od učenja: ');
      this.resetVariables(5, 0, true);
    },

    startLongBreak : function(){
      this.setcurrentStatus('Dugo pauziram od učenja: ');
      this.resetVariables(15, 0, true);
    },

    stopTimer : function stopTimer(){
      this.setcurrentStatus('');
      this.resetVariables(25, 0, false);
      this.updateDom();
    },

    toDoubleDigit : function(num){
      if(num < 10) {
        return "0" + parseInt(num, 10);
      }
      return num;
    },

    updateDom : function(){
      this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
      this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
    },

    intervalCallback : function(){
      if(!this.started) return false;
      if(this.seconds == 0) {
        if(this.minutes == 0) {
          this.timerComplete();
          return;
        }
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      this.updateDom();
    },
    timerComplete : function(){
      this.started = false;
    }
};

window.onload = function(){
  pomodoro.init();
};