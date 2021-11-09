function getTime() {
  var day = new Date();
  var day = day.getDay();
  if (day === 6 || 0 || 2) {
    $("#sign").attr("src", "images/neon-closed.jpeg");
  }
  console.log(day);//-------works; ouputs Sunday as 0 & Saturday as 6
}

getTime();
