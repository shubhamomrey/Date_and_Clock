function time() {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let dateTime = `${h}:${m}:${s} ${session}`;
  return dateTime;
  
}
function dayOfWeek() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let a = new Date();
    let day = days[a.getDay()];
    return day;
}

function date() {
    let a = new Date();
    let d = a.getDate();
    let mn = a.getMonth() + 1; // Month is zero-based, so add 1 to get the correct month
    let y = a.getFullYear();
    let day = dayOfWeek();
    let date = `${mn}/${d}/${y} <br> ${day}`;
    return date;
}
let Time = setInterval(() => {
  currentTime = time();
  currentDate = date();
  document.getElementById("time").innerHTML = currentTime;
  document.getElementById("date").innerHTML = currentDate;
}, 1000);
