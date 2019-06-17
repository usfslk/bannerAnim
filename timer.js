// Youssef Selkani
// 2019

var timer = setInterval(function () {
   let now = new Date().getTime();
   let t = endDate - now;
   if (t >= 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((t % (1000 * 60)) / 1000);

      oldDays = document.getElementsByClassName("days");
      for (i = 0; i < oldDays.length; i++) {
         oldDays[i].innerHTML = days + ":<br/><h6 class='time-label'>Days</h6>";
      }

      oldHours = document.getElementsByClassName("hours");
      for (i = 0; i < oldHours.length; i++) {
         oldHours[i].innerHTML = ("0" + hours).slice(-2) + ":<br/><h6 class='time-label'>Hours </h6>";
      }

      oldMinutes = document.getElementsByClassName("minutes");
      for (i = 0; i < oldMinutes.length; i++) {
         oldMinutes[i].innerHTML = ("0" + mins).slice(-2) + ":<br/><h6 class='time-label'>Minutes </h6>";
      }

      oldSeconds = document.getElementsByClassName("seconds");
      for (i = 0; i < oldSeconds.length; i++) {
         oldSeconds[i].innerHTML = ("0" + secs).slice(-2) + "<br/><h6 class='time-label'>Seconds </h6>";
      }

      OldStatus = document.getElementsByClassName("status");
      for (i = 0; i < OldStatus.length; i++) {
         OldStatus[i].innerHTML = "coming soon";
      }

   } else {
      OldStatus = document.getElementsByClassName("status");
      for (i = 0; i < OldStatus.length; i++) {
         OldStatus[i].innerHTML = "The countdown is over.";
      }
   }
}, 1000);
