// Create three questions that will apear when the "watch Video" button is clicked
// If these three questions are correct allow the user to watch the video
// if they are not however, bring up another prompt asking another series of three questions that are easier

$(document).ready(function(){

	$("#video").click(function() {
		var question1 = prompt("Who was the first president of the United States?");
		if (question1 == "George Washington") {
			alert("well done, just two more questions");
		}

		var question2 = prompt("What is the capitol of Mexico?");
		if (question2 == "Mexico City") {
			alert("Ok smarty pants almost there!");
		}

		var question3 = prompt("Do you love Daily Dosage?");
		if (question3 == "yes") {
			alert("We love you too! Here is the video of the day!");
		}
	});
});