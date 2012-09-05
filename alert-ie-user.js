// CONSTRUCTION

// css
var ieStyle =

'#ieAlertBg { width: 100%; height: 100%; background: #000; opacity: 0.5; position: absolute; left: 0px; top: 0px; z-index: -1; }'+
'#ieAlertBox { width: 656px; height: 480px; margin: auto; margin-top: 100px; background: #fff; border: 1px solid #777; border-radius: 3px; box-shadow: 3px 3px 30px 9px #222; }'+
'#ieCloserBlock { height: 28px; }'+
'#ieCloseButton { float: right; padding: 10px; padding-bottom: 8px; padding-top: 3px; font: 14px Verdana, Arial, sans-serif; color: #222; cursor: pointer; }'+
'#ieCloseButton:hover { text-decoration: none; }'+
'#ieContentBlock { width: 600px; height: 424px; margin: auto; }'+
'#ieMessageBlock { font: 19px Times, serif; padding-top: 20px; color: #444; }'+
'#ieImgBlock { height: 200px; padding-top: 30px; }'+
'.ieLogo { height: 200px; width: 200px; }'+
'.ieLink { height: 100px; width: 200px; float: left; text-align: center; text-decoration: none; font: bold 28px Helvetica, Arial, sans-serif; color: #47b; }';


// html
var ieLinks =

'<a class="ieLink" href="http://www.google.com/chrome">Download Chrome</a>'+
'<a class="ieLink" href="http://www.firefox.com">Download Firefox</a>'+
'<a class="ieLink" href="http://www.opera.com">Download Opera</a>';

var ieLogos = 

'<img class="ieLogo" src="http://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Google_Chrome_2011_computer_icon.svg/200px-Google_Chrome_2011_computer_icon.svg.png"></img>'+
'<img class="ieLogo" src="http://upload.wikimedia.org/wikipedia/commons/e/e7/Mozilla_Firefox_3.5_logo_256.png"></img>'+
'<img class="ieLogo" src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Opera_O.svg/200px-Opera_O.svg.png"></img>';

var ieMessage = 

"We see that you're using Internet Explorer. Even newer \
versions of Internet Explorer are slow to adopt modern standards and \
make the internet a worse place for everyone. Please consider using \
a better browser. Any of the ones below are great choices.";

var ieBlockBody = 

'<div id="ieAlertBg" onClick="closeIeAlert()"></div>'+

'<div id="ieAlertBox" onClick="preventPropagation()">'+
	'<div id="ieCloserBlock">'+
		'<a id="ieCloseButton" onClick="closeIeAlert()">x</a>'+
	'</div>'+
	'<div id="ieContentBlock">'+
		'<div id="ieMessageBlock">' + ieMessage + '</div>'+
		'<div id="ieImgBlock">' + ieLogos + '</div>'+
		'<div id="ieLinksBlock">' + ieLinks + '</div>'+
	'</div>'+
'</div>';


// FUNCTIONS

function closeIeAlert() {
	ieAlert = document.getElementById("ieAlertMain");
	document.body.removeChild(ieAlert);
}

function preventPropagation() {
	event.stopPropagation();
}


// MAIN

// html
var ieMainBlock = document.createElement("div");

ieMainBlock.style.position = "fixed";
ieMainBlock.style.left = "0px";
ieMainBlock.style.top = "0px";
ieMainBlock.style.width = "100%";
ieMainBlock.style.height = "100%";
ieMainBlock.style.zIndex = "9999";

ieMainBlock.setAttribute("id", "ieAlertMain");
ieMainBlock.setAttribute("onClick", "closeIeAlert()");

ieMainBlock.innerHTML = ieBlockBody;

document.body.appendChild(ieMainBlock);

// css
var ieStyleSheet = document.createElement("style");
ieStyleSheet.innerHTML = ieStyle;
document.body.appendChild(ieStyleSheet);
