var countDownDate = new Date("August 29, 2022 11:05:00").getTime();
var countDownDateTag = document.getElementById("countDownDate").innerHTML = countDownDateT.toDateString() + " at " + countDownDateT.getHours() + ":" + String(countDownDateT.getMinutes()).padStart(2, "0") + "am";

var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("demo").innerHTML = days + "<span><sup>D</sup></span> " + hours + "<span><sup>H</sup></span> " +
		minutes + "<span><sup>M</sup></span> " + seconds + "<span><sup>S</sup></span>";

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "Malcolm is on his way to the United States of America!";
	}
}, 1000);
