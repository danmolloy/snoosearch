'use strict';

function authenticate(){
  var authenticationUrl = snoowrap.getAuthUrl({
   clientId: 'kT0PnulWLycbxQ',
   scope: ['read'],
   redirectUri: 'chrome-extension://ogdopngajbehhonnaomellopfhechpmo/auth.html',
   permanent: true,
   state: 'authStateString' // a random string, this could be validated when the user is redirected back
  });
  // --> 'https://www.reddit.com/api/v1/authorize?client_id=foobarbaz&response_type=code&state= ...'

  console.log(authenticationUrl);
  window.location = authenticationUrl; // send the user to the authentication url

}

function authWithCode(){
  console.log(window.location);
}




// const r = new snoowrap({
//   userAgent: 'SnooSearch; Chrome extension',
//   clientId: 'kT0PnulWLycbxQ',
//   clientSecret: '',
//   refreshToken: ''
// });

//r.getHot().map(post => post.title).then(console.log);
