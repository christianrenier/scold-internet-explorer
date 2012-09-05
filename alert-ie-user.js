// FUNCTIONS

function closeIeAlert() {
	ieAlert = document.getElementById("ieAlertMain");
	document.body.removeChild(ieAlert);
}

// MAIN

var ieMainBlock = document.createElement("div");

ieMainBlock.style.position = "absolute";
ieMainBlock.style.left = "0px";
ieMainBlock.style.top = "0px";
ieMainBlock.style.width = "100%";
ieMainBlock.style.height = "100%"

ieMainBlock.setAttribute("id", "ieAlertMain");
ieMainBlock.setAttribute("onClick", "closeIeAlert()");

document.body.appendChild(ieMainBlock);