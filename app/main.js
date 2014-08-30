// Create three questions that will apear when the "watch Video" button is clicked
// If these three questions are correct allow the user to watch the video
// if they are not however, bring up another prompt asking another series of three questions that are easier

$(document).ready(function(){

	$("#video").click(function() {
		window.location.href = 'video/index.html';
    	return false;
		// var question1 = prompt("First! riddle me this. How many kids were in the Brady Bunch?");
		// if (question1 == 6) {
		// 	alert("Enjoy");
		// }
		// else {
		// 	alert("oops think again...");
		// }

	});
});