function getTime() {
  var day = new Date();
  var whatDay = day.getDay();
  var hour = day.getHours();
  var minute = day.getMinutes();

  if (whatDay === 6 || 0) {
    $("#sign").attr("src", "images/neon-closed.jpeg");
  } else if (hour <= 10 && minute < 30 || hour >= 15) {
    $("#sign").attr("src", "images/neon-closed.jpeg");
  } else {
    $("#sign").attr("src", "images/open-neon.jpeg");
  }
  console.log(hour);
  console.log(day);//-------works; ouputs Sunday as 0 & Saturday as 6
}

getTime();
