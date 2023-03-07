let ratingCard = document.getElementById('rating-card');
let thanksCard = document.getElementById('thanks-card');
let selectedNumber = null;

function selectNumber(number) {
// Reset the previous active button
if (selectedNumber !== null) {
	document.getElementById("button" + selectedNumber).classList.remove("active");
}

// Set the selected number and add the active class to the selected button
selectedNumber = number;
	document.getElementById("button" + selectedNumber).classList.add("active");
}

function submitSelection() {
	if (selectedNumber !== null) {
	  ratingCard.style.display = 'none';
    thanksCard.style.display = 'flex';
		document.getElementById("output").textContent = selectedNumber;
	} else {
		alert("Please select a number before submitting.");
	}
}
