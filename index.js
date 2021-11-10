function getTime() {
  var day = new Date();
  var whatDay = day.getDay();
  var hour = day.getHours();
  var minute = day.getMinutes();

  if ((whatDay === 6 || 0)) {//---------closed sign on Saturday and Sunday
    $("#sign").attr("src", "images/neon-closed.jpeg");
  } else if ((hour <= 10 || (hour === 10 && minute > 30) || hour >= 15)) {//----------closed sign between the hours of 3pm and 10am
    $("#sign").attr("src", "images/neon-closed.jpeg");
  } else {
    $("#sign").attr("src", "images/neon-open.jpeg");
  }
  console.log(hour);
  console.log(day);//-------works; ouputs Sunday as 0 & Saturday as 6
}

function openClose() {
  var day = new Date();
  var whatDay = day.getDay();
  var hour = day.getHours();
  var minute = day.getMinutes();

  if ((whatDay === 6 || 0)) {//---------closed sign on Saturday and Sunday
    $(".open-close").text("Sorry, we're closed!");
  } else if ((hour <= 10 || (hour === 10 && minute > 30) || hour >= 15)) {//----------closed sign between the hours of 3pm and 10am
    $(".open-close").text("Sorry, we're closed!");
  } else {
    $(".open-close").text("We're open; Call now to order!");
  }
  console.log(hour);
  console.log(day);//-------works; ouputs Sunday as 0 & Saturday as 6
}

getTime();
openClose();

function signFlicker() {
  $("#sign").animate({opacity: 0.2}, 400).animate({opacity: 1}, 200).animate({opacity: 0.3}, 400).animate({opacity: 1}, 200).animate({opacity: 0.4}, 400).animate({opacity: 1}, 200).animate({opacity: 0.5}, 400).animate({opacity: 1}, 200).animate({opacity: 0.6}, 400).animate({opacity: 1}, 200).animate({opacity: 0.7}, 400).animate({opacity: 1}, 200);
}

signFlicker();
