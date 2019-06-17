// Youssef Selkani
// 2019

function main() {
   window.endDate = new Date("Jun 30, 2019 00:00:00").getTime();
   var timer = setInterval(function () {
      let now = new Date().getTime();
      let t = endDate - now;
      if (t >= 0) {
         let days = Math.floor(t / (1000 * 60 * 60 * 24));
         let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
         let secs = Math.floor((t % (1000 * 60)) / 1000);

         document.getElementById("days").innerHTML =
            days + ":<br/><h6 class='time-label'>Days</h6>";

         document.getElementById("hours").innerHTML =
            ("0" + hours).slice(-2) + ":<br/><h6 class='time-label'>Hours </h6>";

         document.getElementById("minutes").innerHTML =
            ("0" + mins).slice(-2) + ":<br/><h6 class='time-label'>Minutes </h6>";

         document.getElementById("seconds").innerHTML =
            ("0" + secs).slice(-2) + "<br/><h6 class='time-label'>Seconds </h6>";

         document.getElementById("days-overlay").innerHTML =
            days + ":<br/><h6 class='time-label'>Days</h6>";

         document.getElementById("hours-overlay").innerHTML =
            ("0" + hours).slice(-2) + ":<br/><h6 class='time-label'>Hours </h6>";

         document.getElementById("minutes-overlay").innerHTML =
            ("0" + mins).slice(-2) + ":<br/><h6 class='time-label'>Minutes </h6>";

         document.getElementById("seconds-overlay").innerHTML =
            ("0" + secs).slice(-2) + "<br/><h6 class='time-label'>Seconds</h6>";

         document.getElementById("status").innerHTML = "coming soon";
         document.getElementById("status-overlay").innerHTML = "coming soon";

      } else {
         document.getElementById("status").innerHTML = "The countdown is over.";
         document.getElementById("status-overlay").innerHTML = "The countdown is over.";
      }
   }, 1000);
}

main();