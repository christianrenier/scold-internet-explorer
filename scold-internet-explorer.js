// STYLE VARIABLE

var ieStyle =

'#ieAlertBg { width: 100%; height: 100%; background: #000; opacity: 0.5; filter: alpha(opacity=50); position: absolute; left: 0px; top: 0px; z-index: -1; }'+
'#ieAlertBox { width: 656px; height: 480px; margin: auto; margin-top: 100px; background: #fff; border: 1px solid #fff; border-radius: 3px; box-shadow: 3px 3px 30px 9px #222; }'+
'#ieCloserBlock { height: 28px; }'+
'#ieCloseButton { float: right; padding: 10px; padding-bottom: 8px; padding-top: 3px; font: 14px Verdana, Arial, sans-serif; color: #222; cursor: pointer; }'+
'#ieCloseButton:hover { text-decoration: none; }'+
'#ieContentBlock { width: 600px; height: 424px; margin: auto; }'+
'#ieMessageBlock { font: 19px Times, serif; padding-top: 20px; color: #444; }'+
'#ieImgBlock { height: 200px; padding-top: 30px; }'+
'.ieLogo { height: 200px; width: 200px; }'+
'.ieLink { height: 100px; width: 200px; float: left; text-align: center; text-decoration: none; font: bold 28px Helvetica, Arial, sans-serif; color: #47b; }';



// MARKUP VARIABLES

var ieLinks =

'<a class="ieLink" href="http://www.google.com/chrome" target="_blank">Download Chrome</a>'+
'<a class="ieLink" href="http://www.firefox.com" target="_blank">Download Firefox</a>'+
'<a class="ieLink" href="http://www.opera.com" target="_blank">Download Opera</a>';

var ieLogos = 

'<a href="http://www.google.com/chrome" target="_blank">'+
	'<img class="ieLogo" src="http://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Google_Chrome_2011_computer_icon.svg/200px-Google_Chrome_2011_computer_icon.svg.png"></img>'+
'</a>'+
'<a href="http://www.firefox.com" target="_blank">'+
	'<img class="ieLogo" src="http://upload.wikimedia.org/wikipedia/commons/e/e7/Mozilla_Firefox_3.5_logo_256.png"></img>'+
'</a>'+
'<a href="http://www.opera.com" target="_blank">'+
	'<img class="ieLogo" src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Opera_O.svg/200px-Opera_O.svg.png"></img>'+
'</a>';

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
		'<div>' + ieLinks + '</div>'+
	'</div>'+
'</div>';



// ON CLICK METHODS

function closeIeAlert() {
	ieAlert = document.getElementById("ieAlertMain");
	document.body.removeChild(ieAlert);
}

function preventPropagation(e) {
	// If event object was not sent, user is on IE, so use IE equivalent of event object
	if (!e) { e = window.event; }

	// If stopPropagation method exists, user is on IE9, so call the method
	if (e.stopPropagation) { e.stopPropagation(); }
	// If not, do the IE8 and below equivalent of stopPropagation
	else e.cancelBubble = true;
}



// MAIN FUNCTIONS

function finishMain() {

	// Adds conditional comments to a non-null body element
	var pageBody = document.getElementsByTagName('body')[0];
	pageBody.appendChild(elementToAppend);


	// If conditional comments created elements, build the pop-up
	var userOnInternetExplorer = document.getElementById("ieActive");
	if (userOnInternetExplorer) {


		// Build HTML
		var ieMainBlock = document.createElement("div");

		ieMainBlock.style.position = "fixed";
		ieMainBlock.style.left = "0px";
		ieMainBlock.style.top = "0px";
		ieMainBlock.style.width = "100%";
		ieMainBlock.style.height = "100%";
		ieMainBlock.style.zIndex = "9999";
		// Fixes spacing bug in IE7
		if (document.getElementById("ltIe8Active")) { ieMainBlock.style.paddingTop = "100px"; }

		ieMainBlock.setAttribute("id", "ieAlertMain");
		ieMainBlock.setAttribute("onClick", "closeIeAlert()");

		ieMainBlock.innerHTML = ieBlockBody;

		document.body.appendChild(ieMainBlock);


		// Build CSS
		var ieStyleSheet = document.createElement("style");
		ieStyleSheet.type = 'text/css';

		if (ieStyleSheet.styleSheet) {
	    	ieStyleSheet.styleSheet.cssText = ieStyle;
		} else {
	    	ieStyleSheet.appendChild(document.createTextNode(ieStyle));
		}

		pageHead = document.getElementsByTagName('head')[0];
		pageHead.appendChild(ieStyleSheet);
	}
}

function continueOnBodyLoad() {
	var pageBody = document.getElementsByTagName('body')[0];
	// Recursive, timed, calls until body element is loaded
	if (!pageBody) { setTimeout(finishMainOnBodyLoad, 10); }
	else finishMain();
};



// MAIN - Pop-up is created only if certain elements exist. They'll only be created on IE

//Create conditional comments (Inefficient code necessary to avoid a bug)
var elementToAppend = document.createElement("span");

var conditionalComments = '<!--[if IE]><span id="ieActive"></span><![endif]-->';
conditionalComments += '<!--[if lt IE 8]><span id="ltIe8Active"></span><![endif]-->';

elementToAppend.innerHTML = conditionalComments;

// Finish rest of script after body element has loaded
continueOnBodyLoad();
