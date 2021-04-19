import browserDetect from "./browserDetect.js";
browserDetect.minimumVersions({
  Chrome: 100,
  Firefox: 60,
  IE: 10,
  Edge: 100,
  Opera: 50,
  Safari: 12
});
console.log(browserDetect.browser);
browserDetect.isSupported(() => {
  alert('You are using an old browser. Please Upgrade')
});
