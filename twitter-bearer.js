const getBearerToken = require('get-twitter-bearer-token');
const dotenv = require('dotenv').config();
 
const twitter_consumer_key = process.env.KEY
const twitter_consumer_secret = process.env.SECRET
 
getBearerToken(twitter_consumer_key, twitter_consumer_secret, (err, res) => {
  if (err) {
  	console.log(twitter_consumer_key)
  	console.log(twitter_consumer_secret)
    console.log("error");
  } else {
  
    // bearer token 
    console.log(res.body.access_token)
  }
})