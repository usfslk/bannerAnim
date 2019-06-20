// Youssef Selkani
// 2019

let banner = document.documentElement;
let now = new Date().getTime();
let t = endDate - now;

// Check timer
if (t >= 0) {
   toTop();
} else {
   timerLoop();
}

function toTop() {
   banner.style.setProperty('--clip1', '100%');
   banner.style.setProperty('--clip2', '100%');
   banner.style.setProperty('--clip3', 0);
   banner.style.setProperty('--clip4', '100%');
   banner.style.setProperty('--clip5', 0);
   banner.style.setProperty('--clip7', '100%');
   nAnimate.start(duration, function (rate) {
      let position = -100 + (rate * 100);
      console.log(Math.abs(position))
      banner.style.setProperty('--clip6', Math.abs(position) + "%");
      banner.style.setProperty('--clip8', Math.abs(position) + "%");
      if (Math.abs(position) < 25) {
         timerLoop();
      }
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
   nAnimate.start(duration, function (rate) {
      let position = 0 + (rate * 100);
      banner.style.setProperty('--clip3', Math.abs(position) + "%");
      banner.style.setProperty('--clip5', Math.abs(position) + "%");
      if (Math.abs(position) > 25) {
         timerLoop();
      }
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
   banner.style.setProperty('--clip1', '100%');
   banner.style.setProperty('--clip2', 0);
   banner.style.setProperty('--clip3', 0);
   banner.style.setProperty('--clip4', 0);
   banner.style.setProperty('--clip5', 0);
   banner.style.setProperty('--clip7', '100%');
   nAnimate.start(duration, function (rate) {
      let position = 0 + (rate * 100);
      banner.style.setProperty('--clip6', Math.abs(position) + "%");
      banner.style.setProperty('--clip8', Math.abs(position) + "%");
      if (Math.abs(position) > 25) {
         timerLoop();
      }
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
   nAnimate.start(duration, function (rate) {
      let position = -100 + (rate * 100);
      banner.style.setProperty('--clip1', Math.abs(position) + "%");
      banner.style.setProperty('--clip7', Math.abs(position) + "%");
      if (Math.abs(position) < 25) {
         timerLoop();
      }
      if (Math.abs(position) === 0) {
         let now = new Date().getTime();
         let t = endDate - now;
         if (t >= 0) {
            banner.style.setProperty('--clip1', '100%');
            banner.style.setProperty('--clip2', '100%');
            banner.style.setProperty('--clip3', 0);
            banner.style.setProperty('--clip4', '100%');
            toTop();
         } else {
            timerLoop();
         }
      }
   }, easing);
}