// Youssef Selkani
// 2019

let banner = document.documentElement;

toTop();

function toTop() {
   timerLoop();
   banner.style.setProperty('--clip1', 0);
   banner.style.setProperty('--clip2', '100%');
   banner.style.setProperty('--clip3', '100%');
   banner.style.setProperty('--clip4', '100%');
   banner.style.setProperty('--clip5', '100%');
   banner.style.setProperty('--clip6', '100%');
   banner.style.setProperty('--clip7', 0);
   banner.style.setProperty('--clip8', '100%');
   nAnimate.start(duration, function (rate) {
      let position = -100 + (rate * 100);
      banner.style.setProperty('--clip2', Math.abs(position) + "%");
      banner.style.setProperty('--clip4', Math.abs(position) + "%");
      if (Math.abs(position) === 0) {
         let now = new Date().getTime();
         let t = endDate - now;
         if (t >= 0) {
            toRight();
         } else {
            timerLoop();
         }
      }
   }, easing);
}

function toRight() {
   timerLoop();
   nAnimate.start(duration, function (rate) {
      let position = 0 + (rate * 100);
      banner.style.setProperty('--clip1', Math.abs(position) + "%");
      banner.style.setProperty('--clip7', Math.abs(position) + "%");
      if (position === 100) {
         let now = new Date().getTime();
         let t = endDate - now;
         if (t >= 0) {
            toBottom();
         } else {
            timerLoop();
         }
      }
   }, easing);
}

function toBottom() {
   timerLoop();
   banner.style.setProperty('--clip1', 0);
   banner.style.setProperty('--clip2', 0);
   banner.style.setProperty('--clip3', '100%');
   banner.style.setProperty('--clip4', 0);
   banner.style.setProperty('--clip5', '100%');
   banner.style.setProperty('--clip6', 0);
   banner.style.setProperty('--clip7', 0);
   banner.style.setProperty('--clip8', 0);
   nAnimate.start(duration, function (rate) {
      let position = 0 + (rate * 100);
      banner.style.setProperty('--clip8', Math.abs(position) + "%");
      banner.style.setProperty('--clip6', Math.abs(position) + "%");
      if (position === 100) {
         let now = new Date().getTime();
         let t = endDate - now;
         if (t >= 0) {
            toLeft();
         } else {
            timerLoop();
         }
      }
   }, easing);
}

function toLeft() {
   timerLoop();
   nAnimate.start(duration, function (rate) {
      let position = -100 + (rate * 100);
      banner.style.setProperty('--clip3', Math.abs(position) + "%");
      banner.style.setProperty('--clip5', Math.abs(position) + "%");
      if (Math.abs(position) === 0) {
         let now = new Date().getTime();
         let t = endDate - now;
         if (t >= 0) {
            toTop();
         } else {
            timerLoop();
         }
      }
   }, easing);
}