'use strict'
authWithCode();

function authWithCode(){
  var code = new URL(window.location.href).searchParams.get('code');

  snoowrap.fromAuthCode({
    code: code,
    userAgent: 'SnooSearch',
    clientId: 'kT0PnulWLycbxQ',
    redirectUri: 'chrome-extension://ogdopngajbehhonnaomellopfhechpmo/authSuccess.html'
  }).then(console.log(r))
}
