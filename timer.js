// Youssef Selkani
// 2019

let root = document.documentElement;

function timerLoop() {
   let now = new Date().getTime();
   let t = endDate - now;
   if (t >= 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((t % (1000 * 60)) / 1000);
      oldDays = document.getElementsByClassName("days");
      for (i = 0; i < oldDays.length; i++) {
         if (days < 10) {
            oldDays[i].innerHTML = 
               oldDays[i].innerHTML = ("0" + days).slice(-3) + "<br/><h6 class='time-label'>Days</h6>";
         } else if (days > 10) {
            oldDays[i].innerHTML = days + "<br/><h6 class='time-label'>Days</h6>";
         }
      }
      oldHours = document.getElementsByClassName("hours");
      for (i = 0; i < oldHours.length; i++) {
         oldHours[i].innerHTML = ("0" + hours).slice(-2) + "<br/><h6 class='time-label'>Hours</h6>";
      }
      oldMinutes = document.getElementsByClassName("minutes");
      for (i = 0; i < oldMinutes.length; i++) {
         oldMinutes[i].innerHTML = ("0" + mins).slice(-2) + "<br/><h6 class='time-label'>Minutes</h6>";
      }
      oldSeconds = document.getElementsByClassName("seconds");
      for (i = 0; i < oldSeconds.length; i++) {
         oldSeconds[i].innerHTML = ("0" + secs).slice(-2) + "<br/><h6 class='time-label'>Seconds</h6>";
      }
      oldStatus = document.getElementsByClassName("status");
      for (i = 0; i < oldStatus.length; i++) {
         oldStatus[i].innerHTML = "coming soon";
      }
      oldDots = document.getElementsByClassName("dots");
      for (i = 0; i < oldDots.length; i++) {
         oldDots[i].innerHTML = ":";
      }
      oldDotsForDays = document.getElementsByClassName("dots-days");
      for (i = 0; i < oldDotsForDays.length; i++) {
         if (days !== 0) {
            oldDotsForDays[i].innerHTML = ":";
            root.style.setProperty('--visible', 'initial');
         } else {
            root.style.setProperty('--visible', 'none');
         }
      }
   }
   else {
      oldStatus = document.getElementsByClassName("status");
      for (i = 0; i < oldStatus.length; i++) {
         oldStatus[i].innerHTML = "The countdown is over.";
      }
      oldDays = document.getElementsByClassName("days");
      for (i = 0; i < oldDays.length; i++) {
         oldDays[i].innerHTML = '';
      }
      oldHours = document.getElementsByClassName("hours");
      for (i = 0; i < oldHours.length; i++) {
         oldHours[i].innerHTML = '';
      }
      oldMinutes = document.getElementsByClassName("minutes");
      for (i = 0; i < oldMinutes.length; i++) {
         oldMinutes[i].innerHTML = '';
      }
      oldSeconds = document.getElementsByClassName("seconds");
      for (i = 0; i < oldSeconds.length; i++) {
         oldSeconds[i].innerHTML = '';
      }
      oldDots = document.getElementsByClassName("dots");
      for (i = 0; i < oldDots.length; i++) {
         oldDots[i].innerHTML = '';
      }
   }
}
