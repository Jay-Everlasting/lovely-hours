function updateClock() {
  const amsterdamTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Europe/Amsterdam",
    hour12: false,
  });
  const brisbaneTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Australia/Brisbane",
    hour12: false,
  });

  document.getElementById(
    "amsterdamClock"
  ).textContent = `Amsterdam: ${amsterdamTime}`;
  document.getElementById(
    "brisbaneClock"
  ).textContent = `Brisbane: ${brisbaneTime}`;
}

function startClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

document.addEventListener("DOMContentLoaded", startClock);
