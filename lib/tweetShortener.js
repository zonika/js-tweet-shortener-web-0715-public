'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.replace(/ to /ig,' 2 ').replace(/ and /ig,' & ').replace(/ for /ig,' 4 ').replace(/ too /ig,' 2 ').replace(/ be /ig,' b ').replace(/ at /ig,' @ ').replace(/ you /ig,' u ');
  },
  bulkShortener: function(tweets){
    var a = []
    tweets.forEach(function(i){
      a.push(i.replace(/ to /ig,' 2 ').replace(/ and /ig,' & ').replace(/ for /ig,' 4 ').replace(/ too /ig,' 2 ').replace(/ be /ig,' b ').replace(/ at /ig,' @ ').replace(/ you /ig,' u '));
    });
    return a;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140){
      return this.wordSubstituter(tweet);
    }else{
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length > 140){
      return this.wordSubstituter(tweet).slice(0,137)+'...'
    }else{
      return tweet;
    }
  },
};
