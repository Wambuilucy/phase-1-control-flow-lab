{
  "stats"; {
    "suites"; 4,
    "tests"; 8,
    "passes"; 8,
    "pending"; 0,
    "failures"; 0,
    "start"; "2022-02-07T12:28:13.141Z",
    "end"; "2022-02-07T12:28:13.851Z",
    "duration"; 710
  },
  "tests"; [
    {
      "title": "gives customers a free sample if the ride is less than or equal to 400 feet",
      "fullTitle": "index.js scuberGreetingForFeet() gives customers a free sample if the ride is less than or equal to 400 feet",
      "duration": 2,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "charges 30 dollars for a distance over 2000 feet",
      "fullTitle": "index.js scuberGreetingForFeet() charges 30 dollars for a distance over 2000 feet",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "does not allow rides over 2500 feet",
      "fullTitle": "index.js scuberGreetingForFeet() does not allow rides over 2500 feet",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "returns \"Ok, sounds good.\" when the city is NYC",
      "fullTitle": "index.js ternaryCheckCity() returns \"Ok, sounds good.\" when the city is NYC",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "should return \"No go.\" if the destination city is not NYC",
      "fullTitle": "index.js ternaryCheckCity() should return \"No go.\" if the destination city is not NYC",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "should return \"Thank you so much.\" if the tip is generous",
      "fullTitle": "index.js switchOnCharmFromTip() should return \"Thank you so much.\" if the tip is generous",
      "duration": 1,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "should return \"Thank you.\" if the tip is not as generous",
      "fullTitle": "index.js switchOnCharmFromTip() should return \"Thank you.\" if the tip is not as generous",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "should return \"Bye.\" if anything else",
      "fullTitle": "index.js switchOnCharmFromTip() should return \"Bye.\" if anything else",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    }
  ],
  "pending"; [],
  "failures"; [],
  "passes"; [
    {
      "title": "gives customers a free sample if the ride is less than or equal to 400 feet",
      "fullTitle": "index.js scuberGreetingForFeet() gives customers a free sample if the ride is less than or equal to 400 feet",
      "duration": 2,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "charges 30 dollars for a distance over 2000 feet",
      "fullTitle": "index.js scuberGreetingForFeet() charges 30 dollars for a distance over 2000 feet",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "does not allow rides over 2500 feet",
      "fullTitle": "index.js scuberGreetingForFeet() does not allow rides over 2500 feet",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "returns \"Ok, sounds good.\" when the city is NYC",
      "fullTitle": "index.js ternaryCheckCity() returns \"Ok, sounds good.\" when the city is NYC",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "should return \"No go.\" if the destination city is not NYC",
      "fullTitle": "index.js ternaryCheckCity() should return \"No go.\" if the destination city is not NYC",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "should return \"Thank you so much.\" if the tip is generous",
      "fullTitle": "index.js switchOnCharmFromTip() should return \"Thank you so much.\" if the tip is generous",
      "duration": 1,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "should return \"Thank you.\" if the tip is not as generous",
      "fullTitle": "index.js switchOnCharmFromTip() should return \"Thank you.\" if the tip is not as generous",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    },
    {
      "title": "should return \"Bye.\" if anything else",
      "fullTitle": "index.js switchOnCharmFromTip() should return \"Bye.\" if anything else",
      "duration": 0,
      "currentRetry": 0,
      "err": {}
    }
  ]
}
function scuberGreetingForFeet(){
  return (feet > 2500)? 'No can do.' : (feet <= 400)? 'This one is on me!' :'I will gladly take your thirty bucks.';// Write your code here!
}

function ternaryCheckCity(city){
  return (city === 'NYC')? 'Ok, sounds good.' : 'No go.';// Write your code here!
}

function switchOnCharmFromTip(){
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.';
  }// Write your code here!
}