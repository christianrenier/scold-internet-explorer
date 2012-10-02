Scold Internet Explorer
=======================

Let Internet Explorer users visiting your site know that their browser is harming the internet and they should upgrade to a better one.

Description
-----------

A self-contained, easy to install javascript file that will display an alert box any time an Internet Explorer user visits your site, telling them how harmful their browser of choice is and offering alternatives to choose from, complete with logos and links to their download page. The alert box is fixed and users can easily click on the dimmed background or the close button to remove the window, similar to lightbox or fancybox.

![ScreenShot](https://raw.github.com/christianrenier/scold-internet-explorer/master/screenshot.png)

####Features

* Supports Internet Explorer 9.
* Supports Internet Explorer 8.
* Supports Internet Explorer 7.
* Self-contained, single file solution.
* One line installation.
* Completely disabled if visitors are not using Internet Explorer.

Usage
-----

All you have to do is drop the javascript file `scold-internet-explorer.js` into your website's file directory and then link to it from any page that you want the alert to show on.

*Example of linking to the javascript file from index.html, if they were stored in the same directory:*

	<html>
	<head>
		<script src="scold-internet-explorer.js"></script>
	</head> 
	
	<body>
	...
	</body>
	</html>
	
Contribution
------------

I chose to hotlink the logos from Wikimedia so the script is self-contained and simple to install without any users meeting trouble from relative and absolute path confusion, and to allow for more efficient usage in the future via content delivery networks. Unfortunately, this means the script must be updated if the Wikimedia links are removed or altered. If you have a better, more stable solution for how the logos should be served and/or a decent CDN that might allow for frequent editing, let me know. If you find any bugs, let me know as well.