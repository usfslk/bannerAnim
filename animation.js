// Youssef Selkani
// 2019

var endDate = new Date("Jun 30, 2019 00:00:00").getTime();
let root = document.documentElement;
let now = new Date().getTime();
let loop = 10; var i;
let t = endDate - now;
if (t >= 0) {
   bottomLoop();
}

function bottomLoop() {
   root.style.setProperty('--clip1', 0);
   root.style.setProperty('--clip2', '100%');
   root.style.setProperty('--clip3', '100%');
   root.style.setProperty('--clip4', '100%');
   root.style.setProperty('--clip5', '100%');
   root.style.setProperty('--clip6', '100%');
   root.style.setProperty('--clip7', 0);
   root.style.setProperty('--clip8', '100%');
   nAnimate.start(2000, function (rate) {
      let position = -100 + (rate * 100);
      root.style.setProperty('--clip2', Math.abs(position) + "%");
      root.style.setProperty('--clip4', Math.abs(position) + "%");
      if (Math.abs(position) === 0) {
          leftLoop();
      }
   }, "easeOutExpo");
}

function leftLoop() {
   nAnimate.start(2000, function (rate) {
      let position = 0 + (rate * 100);
      root.style.setProperty('--clip1', Math.abs(position) + "%");
      root.style.setProperty('--clip7', Math.abs(position) + "%");
      if (position === 100) {
         topLoop();
      }
   }, "easeOutExpo");
}

function topLoop() {
   root.style.setProperty('--clip1', 0);
   root.style.setProperty('--clip2', 0);
   root.style.setProperty('--clip3', '100%');
   root.style.setProperty('--clip4', 0);
   root.style.setProperty('--clip5', '100%');
   root.style.setProperty('--clip6', 0);
   root.style.setProperty('--clip7', 0);
   root.style.setProperty('--clip8', 0);
   nAnimate.start(2000, function (rate) {
      let position = 0 + (rate * 100);
      root.style.setProperty('--clip8', Math.abs(position) + "%");
      root.style.setProperty('--clip6', Math.abs(position) + "%");
      if (position === 100) {
         rightLoop();
      }
   }, "easeOutExpo");
}

function rightLoop() {
   nAnimate.start(2000, function (rate) {
      let position = -100 + (rate * 100);
      root.style.setProperty('--clip3', Math.abs(position) + "%");
      root.style.setProperty('--clip5', Math.abs(position) + "%");
      if (Math.abs(position) === 0) {
          bottomLoop();
      }
   }, "easeOutExpo");
}