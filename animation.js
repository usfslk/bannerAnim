// Youssef Selkani
// 2019

let now = new Date().getTime();
let root = document.documentElement;
let loop = 10; var i;
var endDate = new Date("Jun 30, 2019 00:00:00").getTime();

 let t = endDate - now;
   if (t >= 0) {
      console.log(t);
      bottomLoop();
   }

function bottomLoop() {
   console.log('bottomLoop');
   // White BG
   root.style.setProperty('--clip1', 0);
   root.style.setProperty('--clip2', '100%');
   root.style.setProperty('--clip3', '100%');
   root.style.setProperty('--clip4', '100%');
   root.style.setProperty('--clip5', '100%');
   root.style.setProperty('--clip6', '100%');
   root.style.setProperty('--clip7', 0);
   root.style.setProperty('--clip8', '100%');
   var clip = 100;
   var intervalId = setInterval(function () {
      if (clip < 0) {
         console.log('done!');
         leftLoop();
         clearInterval(intervalId);
         return;
      }
      root.style.setProperty('--clip2', clip + "%");
      root.style.setProperty('--clip4', clip + "%");
      // console.log('B/' + clip);
      clip--;
   }, loop + 1);
}

function leftLoop() {
   console.log('leftLoop');
   var clip = 0;
   var intervalId = setInterval(function () {
      if (clip > 100) {
         topLoop();
         clearInterval(intervalId);
         return;
      }
      root.style.setProperty('--clip1', clip + "%");
      root.style.setProperty('--clip7', clip + "%");
      // console.log('L/' + clip);
      clip++;
   }, loop);
}

function topLoop() {
   console.log('topLoop');
   root.style.setProperty('--clip1', 0);
   root.style.setProperty('--clip2', 0);
   root.style.setProperty('--clip3', '100%');
   root.style.setProperty('--clip4', 0);
   root.style.setProperty('--clip5', '100%');
   root.style.setProperty('--clip6', 0);
   root.style.setProperty('--clip7', 0);
   root.style.setProperty('--clip8', 0);
   var clip = 0;
   var intervalId = setInterval(function () {
      if (clip > 100) {
         rightLoop();
         clearInterval(intervalId);
         return;
      }
      root.style.setProperty('--clip8', clip + "%");
      root.style.setProperty('--clip6', clip + "%");
      // console.log('T/' + clip);
      clip++;
   }, loop);
}

function rightLoop() {
   console.log('rightLoop');
   var clip = 100;
   var intervalId = setInterval(function () {
      if (clip < 0) {
         bottomLoop();
         clearInterval(intervalId);
         return;
      }
      root.style.setProperty('--clip3', clip + "%");
      root.style.setProperty('--clip5', clip + "%");
      //console.log('R/' + clip);
      clip--;
   }, loop);
}