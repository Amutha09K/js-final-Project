// menu animation
// menu 2
var menuArray = ["menu", "menuIcon", "menu-list", "left", "right"];
menuArray[0] = document.getElementsByClassName("menu")[0];
menuArray[1] = document.getElementById("menuIcon");

var menuLastScrollTop = (400 / 1000);
window.addEventListener("scroll", function() {
	var st = window.pageYOffset
	if (st > menuLastScrollTop) {
		// downscroll code
		menuArray[0].style.display = "none";
		menuArray[1].style.display = "block";

	} else {
		// //       // upscroll code
		menuArray[0].style.display = "none";
		menuArray[1].style.display = "block";
	}
	// //    menuLastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});

function menuChanging() {

	document.getElementById("menuIcon").style.setProperty("display", "none");
	document.getElementById("menu").style.setProperty("display", "block");
	document.getElementsByClassName("left")[0].style.setProperty("display", "block");
	document.getElementsByClassName("right")[0].style.setProperty("display", "block");
	document.getElementById("menu").style.setProperty("transform", "translateX(34.5%) scaleY(1) scaleX(1)");
	document.getElementsByClassName("menu-list")[0].style.setProperty("transform", "scale(1)");

}

// function for set light image opacity
var a = 0;

function opacity() {
	console.log(j);
	if (j == 6) {
		a = 1;
	}
	process.style.setProperty("opacity", a + "." + j);
	story.style.setProperty("opacity", a + "." + j);
}

// feedBack animation box creation
var dotGIF = document.getElementById("msgBox");
for (i = 1; i <= 3; i++) {
	var msgAnimationDot = document.createElement("div");
	dotGIF.appendChild(msgAnimationDot).id = "Dot" + i + "";
}


// Menu - About page script 
function preAward() {

}

function nextAward() {

}

// about.html process content
let process = document.getElementById("ourProcess");
let storyli = document.getElementById("ourStoryLi");
let processli = document.getElementById("ourProcessLi");
var j = 0;

function ourProcess() {
	if (j == 6) {
		j = 0;
	}
	process.style.setProperty("opacity", "0");
	process.className = "ourProcess";
	for (var i = 0; j <= 5; i++) {
		setTimeout(opacity, 50);
		j++;
	}
	story.className = "display";
	processli.classList.add("border");
	storyli.classList.remove("border");
}

let story = document.getElementById("ourStory");

function ourStory() {
	if (j == 6) {
		j = 0;
	}
	story.style.setProperty("opacity", "0");
	story.className = "ourStory";
	for (var i = 0; j <= 5; i++) {
		setTimeout(opacity, 50);
		j++;
	}
	process.className = "display";
	storyli.classList.add("border");
	processli.classList.remove("border");
}
// feedBack()
var feedArray = ["feedWholeDiv", "feedBackContainer", "feedPlace", "startCreatingDiv", "startCreating", "dummyDiv", "dummy", "callUsDiv", "callUs", "h1Creation", "h1", "pCreation", "p"];
//feedArray[1] -->  feedBackcontainer
feedArray[1] = document.getElementById("feedBackContainer");
// feedArray[1].style.cssText="height:100%;width:100%;margin:-8px;position:fixed;z-index:102;display:flex;justify-content:center;align-items:center;background:#00000075;";

//feedArray[0] -->  feedWholeDiv
feedArray[0] = document.createElement("div");
feedBackContainer.appendChild(feedArray[0]).id = feedArray[2];
feedArray[2] = document.getElementById(feedArray[2]); //feedArray[2] --> feedBack form
feedArray[2].style.cssText = "height:39%;width:39%;padding: 19px;background:#fcba77;border-radius: 21px;";

//start creating content side( feedArray[3]--> startCreatingDiv ; feedArray[4]--> startCreating)
feedArray[3] = document.createElement("div");
feedArray[2].appendChild(feedArray[3]).id = feedArray[4];
feedArray[4] = document.getElementById(feedArray[4]);
feedArray[4].style.cssText = "height:100%;width:48%;float:left;overflow:hidden;";
// h3 contents
feedArray[9] = document.createElement("h1");
feedArray[4].appendChild(feedArray[9]).id = feedArray[10];
feedArray[10] = document.getElementById(feedArray[10]);
feedArray[10].innerText = "Let's Start Creating!";
feedArray[10].style.cssText = "color:black;margin-bottom: 0%;";
// p tag contents
feedArray[10] = document.createElement("p");
feedArray[4].appendChild(feedArray[10]).id = feedArray[11];
feedArray[11] = document.getElementById(feedArray[11]);
feedArray[11].innerText = "Fill out the fields below and send us a message. Look forward to hearing from you!";
feedArray[11].style.cssText = "color: rgb(0 0 0 / 69%);font-size: 19.5px;width: 81%;margin-top: 3%;";

// inputs creation
var startArr = ["nameInputCreation", "name", "emailInputCreation", "email", "msgInputCreation", "msg", "sendMsg", "sendMsgBtn", "btn"];

// input box for name  / startArr[0] --> nameInputCreation
startArr[0] = document.createElement("input");
feedArray[4].appendChild(startArr[0]).id = startArr[1];
// put styles and attributes / startArr[1] --> name
startArr[1] = document.getElementById(startArr[1]);
startArr[1].style.cssText = "color: rgb(0 0 0);font-size: 19.5px;font-weight:bold;width: 84%;height: 9%;margin: -2% 0% 2% 0%;border: 2px;padding:2px 5px;";
startArr[1].setAttribute("type", "text");
startArr[1].setAttribute("placeholder", "Name");
startArr[1].setAttribute("autoComplete", "off");
// input box for Email / startArr[2] --> emailInputCreation
startArr[2] = document.createElement("input");
feedArray[4].appendChild(startArr[2]).id = startArr[3];
// put styles and attributes / startArr[3] --> email
startArr[3] = document.getElementById(startArr[3]);
startArr[3].style.cssText = "color: rgb(0 0 0);font-size: 19.5px;font-weight:bold;width: 84%;height: 9%;margin: 2% 0%;border: 2px;padding:2px 5px;";
startArr[3].setAttribute("type", "email");
startArr[3].setAttribute("placeholder", "Email");
startArr[3].setAttribute("autoComplete", "off");
// input box for Message / startArr[5] --> msgInputCreation
startArr[5] = document.createElement("textarea");
feedArray[4].appendChild(startArr[5]).id = startArr[6];
// put styles and attributes / startArr[6] --> sendMsg
startArr[6] = document.getElementById(startArr[6]);
startArr[6].style.cssText = "color: rgb(0 0 0);font-size: 19.5px;font-weight:bold;font-family: sans-serif;width: 84%;height: 15%;resize: none;margin: 2% 0%;border: 2px;padding:2px 5px;";
startArr[6].setAttribute("rows", "50");
startArr[6].setAttribute("cols", "50");
startArr[6].setAttribute("placeholder", "Message");
startArr[6].setAttribute("autoComplete", "off");
// input button for send message / startArr[7] --> sendMsgBtn
startArr[7] = document.createElement("button");
feedArray[4].appendChild(startArr[7]).id = startArr[8];
// put styles and attributes / startArr[8] --> btn
startArr[8] = document.getElementById(startArr[8]);
startArr[8].style.cssText = "font-size: 17.5px;font-family: sans-serif;font-weight: bold;width: 50%;height: 11%;margin: 0%;border: 2px;padding:2px 5px;background:rgb(0 157 208);color:white";
startArr[8].innerText = "SEND MESSAGE";


btn.addEventListener("click",function()
{
    console.log("hiii");
	startArr[6].value="";
	startArr[3].value="";
	startArr[1].value="";
} )
// mouse over event for buttons
startArr[1].addEventListener("mouseover", function() {
	startArr[1].style.setProperty("background", "#e9e8e8");
});
startArr[1].addEventListener("mouseleave", function() {
	startArr[1].style.setProperty("background", "white");
});
// mouse over event for buttons
startArr[3].addEventListener("mouseover", function() {
	startArr[3].style.setProperty("background", "#e9e8e8");
});
startArr[3].addEventListener("mouseleave", function() {
	startArr[3].style.setProperty("background", "white");
});
// mouse over event for buttons
startArr[6].addEventListener("mouseover", function() {
	startArr[6].style.setProperty("background", "#e9e8e8");
});
startArr[6].addEventListener("mouseleave", function() {
	startArr[6].style.setProperty("background", "white");
});
// mouse over event for buttons
startArr[8].addEventListener("mouseover", function() {
	console.log("mouseOver");
	startArr[8].style.setProperty("background", "rgb(8 185 243)");
});
startArr[8].addEventListener("mouseleave", function() {
	console.log("mouseLeave");
	startArr[8].style.setProperty("background", "rgb(0, 157, 208)");
});

// dummy div for center line (feedArray[5]--> dummyDiv ; feedArray[6]--> dummy)
feedArray[5] = document.createElement("div");
feedArray[2].appendChild(feedArray[5]).id = feedArray[6];
feedArray[6] = document.getElementById(feedArray[6]);
feedArray[6].style.cssText = "height:100%;width:1.5%;background:black;float: left;box-shadow: 6px 9px 1.5px 0px #0000003b;margin-left: 7px;margin-right: 7px;";

// right side div (feedArray[7]--> callUsDiv ; feedArray[8]--> callUs)
feedArray[7] = document.createElement("div");
feedArray[2].appendChild(feedArray[7]).id = feedArray[8];
feedArray[8] = document.getElementById(feedArray[8]);
feedArray[8].style.cssText = "height:54%;width:44%;transform: translateY(38%);float: right;color:black";

// call us contents
var callUs = ["callUsH1", "callUsTxt1", "callUsP", "callUsTxt2", "callUsBtn", "callBtn", "numTxt", "feedNumber", "closeBtn", "close"];
// call us p tag ( callUs[0] --> callUsH1 ; callUs[1] --> callUsTxt1)
callUs[0] = document.createElement("h1");
feedArray[8].appendChild(callUs[0]).id = callUs[1];
callUs[1] = document.getElementById(callUs[1]);
callUs[1].innerText = "Call Us Today!"
callUs[1].style.cssText = "margin-bottom: 0%;";
// call us p tag ( callUs[2] --> callUsP ; callUs[3] --> callUsTxt2)
callUs[2] = document.createElement("p");
feedArray[8].appendChild(callUs[2]).id = callUs[3];
callUs[3] = document.getElementById(callUs[3]);
callUs[3].innerText = "Perhaps a phone conversation is more your style? No worries!"
callUs[3].style.cssText = "color: rgb(0 0 0 / 69%);font-size: 19.5px;width: 81%;margin-top: 3%;";
// call us p tag ( callUs[4] --> callUsBtn ; callUs[5] --> callBtn)
callUs[4] = document.createElement("button");
feedArray[8].appendChild(callUs[4]).id = callUs[5];
callUs[5] = document.getElementById(callUs[5]);
callUs[5].innerText = "Call Us Directly!"
callUs[5].style.cssText = "font-size: 24.5px;font-family: sans-serif;font-weight: bold;width:74%;height: 20%;border: 2px;padding:2px 5px;background: rgb(0, 157, 208);color:white;"; //hover{background-color: rgb(8 185 243);}";
// mouse over event for buttons
callUs[5].addEventListener("mouseover", function() {
	console.log("mouseOver");
	callUs[5].style.setProperty("background", "rgb(8 185 243)");
});
callUs[5].addEventListener("mouseleave", function() {
	console.log("mouseLeave");
	callUs[5].style.setProperty("background", "rgb(0, 157, 208)");
});

// call us p tag ( callUs[6] --> numTxt ; callUs[1] --> feedNumber)
callUs[6] = document.createElement("h1");
feedArray[8].appendChild(callUs[6]).id = callUs[7];
callUs[7] = document.getElementById(callUs[7]);
callUs[7].innerText = "619.734.9265";
callUs[7].style.cssText = "margin-bottom: 0%;font-size: 37px;transform: translate(9px, 0px);";

callUs[8] = document.createElement("button");
feedArray[8].appendChild(callUs[8]).id = callUs[9];
callUs[9] = document.getElementById(callUs[9]);
callUs[9].setAttribute("onclick", "feedClose()")
callUs[9].innerText = "X";
callUs[9].style.cssText = "height: 15%;width: 11%;transform: translate(19rem, -23rem);font-size: 20px;font-weight: bolder;text-shadow: 3px 1px 3px #00000054;border: none;border-radius: 24px;background: white;color: red;";

document.getElementById("feedBackContainer").style.display = "none";

function feedback() {
	feedArray[1].style.cssText = "height:100%;width:100%;margin:-8px;position:fixed;z-index:102;display:flex;justify-content:center;align-items:center;background:#00000075;";

}

function feedClose() {
	document.getElementById("feedBackContainer").style.display = "none";
}

// 3d room rotation
let roomDivRotation = document.getElementById("3dRoom");
let trash = document.getElementsByClassName("trash")[0];
let computerScene1 = document.getElementsByClassName("computerScene")[0];
let lamp = document.getElementsByClassName("lamp")[0];
window.addEventListener('scroll', function() {
	var value = 97 + window.scrollY * 0.0032;
	roomDivRotation.style.transform = `translate(-17.5%, 18.3%) rotate3d(-7, -200, 0, 24deg) rotateY(${value}deg) scaleX(3)`;

	var compValue = window.scrollY * -0.003;
	computerScene1.style.transform = `translate3d(853px, 139px, 0px) rotateY(${compValue}deg)`;

	var lampValue = window.scrollY * 0.015 + 39;
	lamp.style.transform = `scale(.82) translate3d(-73rem, -10%,25px) rotateY(${lampValue}deg) scaleX(1.3)`;
});

// meet mober creation
var moberCreation = document.getElementById("Mob"); //mob creation first div
var moberContents = document.createElement("div");
moberCreation.appendChild(moberContents).className = "moberContents";

// Meet the mob display contents
var moberContentsH1 = document.createElement("h1"); //creation of h1 tag (Meet mobers)
moberContents.appendChild(moberContentsH1).className = "moberContentsH1";
document.getElementsByClassName("moberContentsH1")[0].innerText = "Meet The Mob";

var moberContentsP = document.createElement("p"); // creation of p tag (Meet mobers)
moberContents.appendChild(moberContentsP).className = "moberContentsP";
document.getElementsByClassName("moberContentsP")[0].innerText = "Our team is made up of designers, developers, strategists and writers. We pride ourselves on collaborative development and flexibility, resulting in projects that consistently exceed the expectations of our partners and their customers. In simple terms, we like what we do.";

var moberContentBtn = document.createElement("button");
moberContents.appendChild(moberContentBtn).className = "mobContentBtn";
moberContents.appendChild(moberContentBtn).innerText = "ABOUT US";
var btnOnClick = document.getElementsByClassName("mobContentBtn")[0];
btnOnClick.setAttribute("onclick", "redirectAbout()");

function redirectAbout() {
	window.location.href = "about.html";
}

var bricks = document.createElement("div");
moberCreation.appendChild(bricks).className = "bricks";

var mobsterDiv = document.createElement("div");
moberCreation.appendChild(mobsterDiv).id = "mobster";
moberCreation.appendChild(mobsterDiv).className = "mobster";

// create sub elements for position the mobster images and initialize the id and className
for (var index = 1; index <= 9; index++) {
	var mobsterDiv = document.createElement("div");
	var mobsterDiv2 = document.createElement("div");
	mobster.appendChild(mobsterDiv).id = "mobster" + index + "";
	var mobsterIndex = document.getElementById("mobster" + index + "");
	mobsterIndex.appendChild(mobsterDiv2).id = "mob" + index + "";
	mobster.appendChild(mobsterDiv).className = "mobster mobster" + index + "";
}

// meet mobster image animation
lastScrollTop = 0;
let Room = document.querySelectorAll(".mobster");
window.addEventListener("scroll", function() {
	var st = window.pageYOffset
	var i = 1,
		sum = 0,
		cls = "";

	// mobers entry animation
	for (i = 1; i <= 9; i++) {
		cls = "mob" + i;
		if (st > 1198) {
			document.getElementById(cls).style.setProperty("background-position-y", "0rem");
		} else {
			// upscroll code
			document.getElementById(cls).style.setProperty("background-position-y", "11.45rem");

			console.log("pageOffset : " + st);
		}
		lastScrollTop = st <= 0 ? 0 : st; // For negative scrolling
	}
});

//Creation of What We Do Part
let What_We_Do_BottomBlack = document.getElementsByClassName("parent")[0];
let what_We_DoBlackBg = document.getElementsByClassName("what_We_DoBlackBg")[0];
let What_We_Do_BottomBlackImg = document.createElement("div");
what_We_DoBlackBg.appendChild(What_We_Do_BottomBlackImg).className = "blackBottomImg"; // set className for What_We_Do_BottomBlackImg
// set style for What_We_Do_BottomBlackImg
document.getElementsByClassName("blackBottomImg")[0].style.cssText = "background: url(img/what/top.svg) no-repeat;height: 18vh;width:100.555vw;transform: translate(-1vw,59vh);"

// create h1 tag into What_We_Do_BottomBlackImg div
let What_We_Do_BottomBlackH1 = document.createElement("h1");
what_We_DoBlackBg.appendChild(What_We_Do_BottomBlackH1).id = "What_We_Do_H1";
let What_We_Do_H1 = document.getElementById("What_We_Do_H1");
What_We_Do_H1.innerText = "What We Do";
What_We_Do_H1.style.cssText = "color:white;font-size:3.2vw;transform: translate(42vw, 4vh);width:19vw;display: inline-block;";

// style for bagContainer section 
let What_We_Do_BagContainer = document.getElementsByClassName("bagContainer")[0];
What_We_Do_BagContainer.style.cssText = "height:69vh;width:101.555vw;transform:translate(-1vw, -172vh);background-image:linear-gradient(to bottom, #1D71B2 0%,#1D71B2 36%,#1b74b9 100%);z-index:-1;position:relative;";


// bag active section div creation
//add bags into What_We_Do_BagContainer
let bagActive = document.getElementsByClassName("bags")[0]; // select bags(div) for bags creation

// bigBag handle
let bigBagHandleDiv = document.createElement("div");
bagActive.appendChild(bigBagHandleDiv).id = "bigBagHandle";
let bagHandle = document.getElementById("bigBagHandle");
bagHandle.style.cssText = "background:url(img/what/bag1-handle.svg) no-repeat;transition:all 1s cubic-bezier(0.1, 0.27, 0.57, 1.09) 0s;background-position-y:7rem;height:13%;width:4.9%;transform: translate(43.08rem, -98%);";

// bigBag 
let bigBagDiv = document.createElement("div");
bagActive.appendChild(bigBagDiv).id = "bigBag";
let bigBag = document.getElementById("bigBag")
bigBag.style.cssText = "height:46%;width:15.8%;transition:all 1s cubic-bezier(0.1, 0.27, 0.57, 1.09) 0s;background:url(img/what/bag1.svg) no-repeat;transform: translate(36.5rem, -37%);";

//bag2 
// bag2 flap
let bag2Flap = document.createElement("div");
bagActive.appendChild(bag2Flap).id = "bag2Flap";
let bagFlap = document.getElementById("bag2Flap")
bagFlap.style.cssText = "height:17.3%;width:18.8%;transition:all 1s cubic-bezier(0.33, 0.02, 0.57, 0.9) 0s;background:url(img/what/bag2-flap.svg) no-repeat;position:relative;z-index:1;transform:translate(52rem, -256%);";
//bag2 paper
let bag2Paper = document.createElement("div");
bagActive.appendChild(bag2Paper).id = "bag2Paper";
let paper = document.getElementById("bag2Paper")
paper.style.cssText = "display:inline-block;height:40%;width:16%;transition:all 1s cubic-bezier(0.1, 0.27, 0.57, 1.09) 0s;background:url(img/what/bag2-paper.svg) no-repeat;background-position-y:23.45rem;position:relative;z-index:1;transform:translate(53.7rem, -219%);overflow:hidden";
// paper content
paper.innerHTML = "<p id=\"paperPara\">We sufficiently handle the marketing needs of a variety of clients, specializing in a range of services, such as: content marketing, web design and development, branding, and more. We're capable and ready to take your company to new heights.</p><br><a href=\"showRoom.html\"><button id=\"paperBtn\">SHOWROOM</button></a>"

// bag2
let bag2 = document.createElement("div");
bagActive.appendChild(bag2).id = "bag2";
let bag2Img = document.getElementById("bag2")
bag2Img.style.cssText = "height:33%;width:19%;transition:all 1s cubic-bezier(0.1, 0.27, 0.57, 1.09) 0s;background:url(img/what/bag2.svg) no-repeat;position:relative;z-index:0;transform:translate(52rem, -315%);";

// guitar
let guitar = document.createElement("div");
bagActive.appendChild(guitar).id = "guitar";
let guitarImg = document.getElementById("guitar")
guitarImg.style.cssText = "height:58%;width:19%;transition:all 1s cubic-bezier(0.1, 0.27, 0.57, 1.09) 0s;background:url(img/what/guitar.svg) no-repeat;position:relative;z-index:-1;transform:translate(72rem, -291.3%);";

// bag3
let bag3 = document.createElement("div");
bagActive.appendChild(bag3).id = "bag3";
let bag3Img = document.getElementById("bag3")
bag3Img.style.cssText = "height:58%;width:19%;transition:all 1s cubic-bezier(0.1, 0.27, 0.57, 1.09) 0s;background:url(img/what/bag3.svg) no-repeat;position:relative;z-index:-1;transform:translate(78rem, -326%) scaleX(1.02);background-size: 58%;";

// bag opening animation
window.addEventListener("scroll", function() {
	var st = window.pageYOffset;
	var lastScrollTop = 0;
	let paperPara = document.getElementById("paperPara");
	let paperBtn = document.getElementById("paperBtn");
	if (st > 2040) {
		bagHandle.style.setProperty("background-position-y", "0rem");
		bagFlap.style.setProperty("transform", "translate(52rem, -350%) rotateX(173deg)");
		paper.style.setProperty("transition", "all 2s cubic-bezier(0, -1.91, 0.57, 1.09) 0s"); // cubic-bezier(0.3, -0.08, 0.02, 1.26) 0s");
		paper.style.setProperty("background-position-y", "0rem");
		paperPara.style.setProperty("transition", "all 2s cubic-bezier(0, -1.91, 0.57, 1.09) 0s"); // cubic-bezier(0.3, -0.08, 0.02, 1.26) 0s");
		paperPara.style.setProperty("transform", "translate(9%, -55%)");
		paperBtn.style.setProperty("transition", "transform 2s cubic-bezier(0, -1.91, 0.57, 1.09) 0s"); // cubic-bezier(0.3, -0.08, 0.02, 1.26) 0s");
		paperBtn.style.setProperty("transform", "translate(22%,-20.5rem)");
		guitarImg.style.setProperty("transform", "translate(73rem, -291.3%) rotate(11deg)");
	} else {
		bagHandle.style.setProperty("background-position-y", "7rem");
		bagFlap.style.setProperty("transform", "translate(52rem, -256%)");
		paper.style.setProperty("transition", "all 1.3s cubic-bezier(0.18, 0.25, 0.16, 1.16) 0s");
		paper.style.setProperty("background-position-y", "23.45rem");
		paperPara.style.setProperty("transition", "all 1.3s cubic-bezier(0.18, 0.25, 0.16, 1.16) 0s"); // cubic-bezier(0.3, -0.08, 0.02, 1.26) 0s");
		paperPara.style.setProperty("transform", "translate(9%, 4%)");
		paperBtn.style.setProperty("transition", "transform 1.3s cubic-bezier(0.18, 0.25, 0.16, 1.16) 0s"); // cubic-bezier(0.3, -0.08, 0.02, 1.26) 0s");
		paperBtn.style.setProperty("transform", "translate(22%, -1.5rem)");
		guitarImg.style.setProperty("transform", "translate(72rem, -291.3%) rotate(0deg)");
	}
	lastScrollTop = st <= 0 ? 0 : st; // For negative scrolling
});

// fish pole
let fishPoleDiv = document.createElement("div");
bagActive.appendChild(fishPoleDiv).id = "fishPole";
let fishPole = document.getElementById("fishPole");
fishPole.style.cssText = "background:url(img/what/fishingpole.png) no-repeat;height:15.5vh;width:53.4vw;transform:translate(19vw, -192.5vh);display: inline-block;";

//fishPole Handle
let fishPoleHandleDiv = document.createElement("div");
bagActive.appendChild(fishPoleHandleDiv).id = "fishPoleHandle";
let fishPoleHandle = document.getElementById("fishPoleHandle");
fishPoleHandle.style.cssText = "display:inline-block;background:url(img/what/fishingpole-handle.svg) no-repeat;height:5.1vh;width:3.2vw;transform-origin: 0vw 4.2vh;transform: translate(-24.2vw, -195vh) rotateX(1977deg) rotate(50deg)";

//fishPole Hook With Worm
let fishPoleHookDiv = document.createElement("div");
bagActive.appendChild(fishPoleHookDiv).id = "fishPoleHook";
let fishPoleHook = document.getElementById("fishPoleHook");
fishPoleHook.style.cssText = "display:inline-block;height: 246px; display: flex; justify-content: end; align-items: end; width: 10vw; border-right: 4px solid black; transform:translate(62.1vw, -208.1vh) rotate(1deg); animation: 4s ease 0s infinite alternate none running fishHook;transform-origin: top;";

// //worm Eye
let wormEyeDiv = document.createElement("div")
fishPoleHook.appendChild(wormEyeDiv).id = "wormEye";
let wormEyeImg = document.getElementById("wormEye");
wormEyeImg.style.setProperty("background", "url(img/services/worm-eyes.svg) no-repeat");
wormEyeImg.style.setProperty("background-position-x", " -1px");
wormEyeImg.style.setProperty("background-size", "16px");


setInterval(wormEye, 1000);
var eye = "open";

function wormEye() {
	if (eye == "open") {
		wormEyeImg.style.setProperty("background-position-x", "-1px");
		eye = "close";
	} else if (eye == "close") {
		wormEyeImg.style.setProperty("background-position-x", "-10px");
		eye = "open";
	}
}

//worm
let wormDiv = document.createElement("img")
fishPoleHook.appendChild(wormDiv).id = "worm";
let wormImg = document.getElementById("worm");
wormImg.setAttribute("src", "img/services/worm.svg");
wormImg.style.setProperty("transform", "translate(22%, 85%)");

// fish pole handle rotation
window.addEventListener("scroll", function() {
	var st = window.pageYOffset;
	var lastScrollTop = 0;
	var height = 1400;
	// var Eye=19.2;
	if ((st > 2480) && (st < 3114)) {
		var rotate = st - 2455; // st->2500 -> 2450=>actual fishPoleHandle rotation is 55deg.->2040-50=1990
		height -= 1;
		var Eye = ((st - 19.2) - 2500);
		fishPoleHandle.style.setProperty("transform", "translate(-24.2vw, -195vh) rotateX(1977deg) rotate(" + rotate + "deg)");
		fishPoleHook.style.setProperty("height", rotate + "px");
		height++;
	} else {
		fishPoleHandle.style.setProperty("transform", "translate(-24.2vw, -195vh) rotateX(1977deg) rotate(45deg)");
	}
	lastScrollTop = st <= 0 ? 0 : st; // For negative scrolling
});


// water section
let waterFlow = document.getElementById("waterFlow");

// water wave creation
for (i = 1; i <= 6; i++) {
	var WaveOfWater = "WaveOfWater" + i;
	var waterWaveId = "wave" + i;
	WaveOfWater = document.createElement("div");
	waterFlow.appendChild(WaveOfWater).id = waterWaveId;
	waterWaveId = document.getElementById(waterWaveId);
}
// watre wave 1 style
wave1.style.cssText = "background:url(img/services/topWave.png);height: 13vh;transform:translate(0vw, -7vh);animation:4s cubic-bezier(0.25, 0.1, 0.39, 1.2) 1s infinite normal none running wave;";

// watre wave 2 style
wave2.style.cssText = "background:url(img/services/wave2.svg);height: 13vh;transform:translate(0VW, -15vh);animation:3s cubic-bezier(0, 0.57, 1, 0.61) 0.8s infinite normal none running wave";

// watre wave 3 style
wave3.style.cssText = "background:url(img/services/wave3.svg);height: 13vh;transform:translate(0VW, -22vh);animation:4s cubic-bezier(0.25, 0.1, 0.39, 1.2) 1s infinite normal none running wave;";

// blur fish div creation
for (i = 1; i <= 6; i++) {
	var DivForFish = "DivForFish" + i;
	var fishDivId = "fishDivId" + i;
	DivForFish = document.createElement("div");
	waterFlow.appendChild(DivForFish).id = fishDivId;
	fishDivId = document.getElementById(fishDivId);
}

// fishDivId1
fishDivId1.style.cssText = "height:17%;width:5%;transform: translate(90rem, -19rem);animation:6s cubic-bezier(0.25, 0.1, 0.39, 1.2) 1s infinite fishWiggle ;";

// fishDivId2
fishDivId2.style.cssText = "height:12%;width:4%;transform: translate(2rem, -18rem);animation:9s cubic-bezier(0, 0, 0.94, 0.39) 1s infinite fish2Wiggle;";

// fishDivId3
fishDivId3.style.cssText = "height:20%;width:7%;transform: translate(4rem, -20rem);animation: 22s infinite ease-in-out fish3Wiggle;";

// fishDivId4
fishDivId4.style.cssText = "height:19%;width:5%;transform: translate(113rem, -29.5rem);animation: 11s ease 0s infinite normal none running fish4Wiggle";

// fishDivId5
fishDivId5.style.cssText = "height:17%;width:7%;transform: translate(26rem, -29.5rem);animation:fish5Wiggle 8s infinite ease;"

// fishDivId6
fishDivId6.style.cssText = "height:12%;width:4%;transform: translate(103rem, -32rem);animation:fish6Wiggle 15s infinite ease;";

// blur fish div creation
for (i = 1; i <= 6; i++) {
	var blurFish1Div = "blurFish1Div" + i;
	var id = "blurFish" + i;
	var fishDiv = "fishDivId" + i;
	fishDiv = document.getElementById(fishDiv);
	blurFish1Div = document.createElement("div");
	fishDiv.appendChild(blurFish1Div).id = id;
	id = document.getElementById(id);
}

// // sea inner scenery
// blurFish1
blurFish1.style.cssText = "height:100%;width:100%;background:url(img/services/fish-blur1.png) no-repeat;animation:1s fishWiggleMovement infinite ease-in-out";

// blurFish2
blurFish2.style.cssText = "height:100%;width:100%;background:url(img/services/fish-blurry2.png) no-repeat;animation:1s fishWiggleMovement infinite ease-in-out";

// blurFish3
blurFish3.style.cssText = "height:100%;width:100%;background:url(img/services/fish-blur3.png) no-repeat;animation:1s fishWiggleMovement infinite ease-in-out";

// blurFish4
blurFish4.style.cssText = "height:100%;width:100%;background:url(img/services/fish-blurry4.png) no-repeat;animation:1s fishWiggleMovement infinite ease-in-out";

// blurFish5
blurFish5.style.cssText = "height:100%;width:98%;background:url(img/services/fish-blurry5.png) no-repeat;animation:1s fishWiggleMovement infinite ease-in-out";

// blurFish6
blurFish6.style.cssText = "height:100%;width:100%;background:url(img/services/fish-blurry2.png) no-repeat;animation:1s fishWiggleMovement infinite ease-in-out";


// seaWeed creation in waterFlow section 1
for (i = 1; i <= 2; i++) {
	var seaWeed1Div = "seaWeed1Div" + i;
	var seaDivId = "seaWeed" + i;
	seaWeed1Div = document.createElement("div");
	waterFlow.appendChild(seaWeed1Div).id = seaDivId;
	seaDivId = document.getElementById(seaDivId);
}

// seaWeed1
seaWeed1.style.cssText = "height:16vh;width:23vw;background:url(img/services/seaweed-blurry1.png) no-repeat;transform: translate(-1vw, -53vh) scaleX(1.1);position: relative;z-index: 2;display: inline-block;";

// seaWeed2
seaWeed2.style.cssText = "height:42%;width:23.4%;background:url(img/services/seaweed-blurry2.png) no-repeat;transform: translate(77vw, -70.7vh) scaleX(1.1);position: relative;z-index: 2;";

// seaDeepScene
let waterFlow2 = document.getElementById("seaDeepScene");

// blur fish div2 creation
for (i = 1; i <= 4; i++) {
	var Div2ForFish = "Div2ForFish" + i;
	var fishDiv2Id = "fishDiv2Id" + i;
	Div2ForFish = document.createElement("div");
	waterFlow2.appendChild(Div2ForFish).id = fishDiv2Id;
	fishDiv2Id = document.getElementById(fishDiv2Id);
}
// fishDiv2Id1
fishDiv2Id1.style.cssText = "height:33%;width:8%;transform: translate(4rem, 5rem);animation :19s cubic-bezier(0, 0.4, 0.91, 0) 0s infinite normal none running fish7Wiggle;" //animation:6s cubic-bezier(0.25, 0.1, 0.39, 1.2) 1s infinite fishWiggle ;";

// fishDiv2Id2
fishDiv2Id2.style.cssText = "height:19%;width:7.3%;transform: translate(110rem, -6.5rem);animation : 10s fish8Wiggle infinite ease-in-out"; //animation:9s cubic-bezier(0, 0, 0.94, 0.39) 1s infinite fish2Wiggle;";

// fishDiv2Id3
fishDiv2Id3.style.cssText = "height:28.8%;width:8.5%;transform: translate(95rem, -3rem);z-index: 1; position: relative;animation : 3s fish9Wiggle infinite ease-in-out"; //animation: 22s infinite ease-in-out fish3Wiggle;";

// fishDiv2Id4
fishDiv2Id4.style.cssText = "height:17.53%;width:6.2%;transform: translate(282%, -130%);z-index: 1; position: relative;animation : 22s fish10Wiggle infinite ease-in-out"; //animation: 11s ease 0s infinite normal none running fish4Wiggle";


// blur fish div2 creation
for (i = 1; i <= 4; i++) {
	var divFish = "divFish" + i;
	var fish = "fish" + i;
	var fishDiv2Id = "fishDiv2Id" + i;
	fishDiv2Id = document.getElementById(fishDiv2Id);
	divFish = document.createElement("div");
	fishDiv2Id.appendChild(divFish).id = fish;
	fish = document.getElementById(fish);
}
// fish1
fish1.style.cssText = "height:100%;width:100%;background:url(img/services/fish1.svg) no-repeat;animation:1s fishWiggleMovement infinite ease-in-out ;";
// fish2
fish2.style.cssText = "height:100%;width:100%;background:url(img/services/fish3.svg) no-repeat;animation:1s fishWiggleMovement infinite ease-in-out ;";
// fish3
fish3.style.cssText = "height:100%;width:100%;background:url(img/services/fish4.svg) no-repeat;animation:1s fishWiggleMovement infinite ease-in-out ;";
// fish4
fish4.style.cssText = "height:100%;width:100%;background:url(img/services/fish2.svg) no-repeat;animation:1s fishWiggleMovement infinite ease-in-out ;";

let seaWeed3Div = document.createElement("div");
waterFlow2.appendChild(seaWeed3Div).id = "seaWeed3";
let seaWeed3 = document.getElementById("seaWeed3");
seaWeed3.style.cssText = "height:22.53%;width:13.5%;background:url(img/services/seaweed3.svg)  no-repeat;transform: translate(101rem, -25rem);z-index: 0; position: relative;";

let seaWeed4Div = document.createElement("div");
waterFlow2.appendChild(seaWeed4Div).id = "seaWeed4";
let seaWeed4 = document.getElementById("seaWeed4");
seaWeed4.style.cssText = "height:31.53%;width:12.5%;background:url(img/services/seaweed1.svg)  no-repeat;transform: translate(21rem, -31rem);z-index: 0; position: relative;";

let starFishDiv = document.createElement("div");
waterFlow2.appendChild(starFishDiv).id = "starFish";
let starFish = document.getElementById("starFish");
starFish.style.cssText = "height:11.1%;width:6%;background:url(img/services/starfish.svg)  no-repeat;transform: translate(481%, -808%);";

let seaWeed5Div = document.createElement("div");
waterFlow2.appendChild(seaWeed5Div).id = "seaweed5";
let seaweed5 = document.getElementById("seaweed5");
seaweed5.style.cssText = "height:12.53%;width:8%;background:url(img/services/seaweed2.svg)  no-repeat;transform: translate(82%, -668%);";

// sea Bottom side
let seaBottomSide = document.getElementById("seaBottom");
seaBottomSide.style.cssText = "height:49vh;background:url(img/connect/sediment.svg) #124066  no-repeat;transform:translate(-0.5vw, -254.6vh) scaleX(1.01);"

let section1Div = document.createElement("div");
seaBottomSide.appendChild(section1Div).id = "seaBottomSec1";
let seaBottomSec1 = document.getElementById("seaBottomSec1");
seaBottomSec1.style.cssText = "height:100%;width:100%;";

let seaWeed6Div = document.createElement("div");
seaBottomSec1.appendChild(seaWeed6Div).id = "seaweedWithRoot";
let seaweedWithRoot = document.getElementById("seaweedWithRoot");
seaweedWithRoot.style.cssText = "height:53%;width:10.2%;background:url(img/connect/seaweed-with-root.svg);transform: translate(641%, -41%) scale(2.2);";

// services content
let servicesDiv = document.createElement("div");
waterFlow.appendChild(servicesDiv).id = "BottmServiceContents"; //waterFlow2 is a seaDeepScene div tag 
BottmServiceContents.style.cssText = "width: 36%; height: 112%;position:relative;z-index:5;text-align:center;transform: translate(33vw, -114vh);display: inline-block;";

let serviceVarArray = ["servicesH1Div", "servicesPDiv", "servicesP2Div", "marketingDiv", "designDiv", "developDiv", "onlineMarktDiv", "p1", "p2", "p3", "p4", "viewMoreBtn"];
let serviceElementVar = ["serviceH1", "servicesP", "servicesP2", "marketing", "design", "develop", "onlineMarkt", "p1", "p2", "p3", "p4", "viewMore"];
let serviceTagsArray = ["h1", "p", "p", "div", "div", "div", "div", "p", "p", "p", "p", "a"];

for (i = 0; i < serviceVarArray.length; i++) {
	serviceVarArray[i] = document.createElement(serviceTagsArray[i]);
	servicesDiv.appendChild(serviceVarArray[i]).id = serviceElementVar[i];
	serviceElementVar[i] = document.getElementById(serviceElementVar[i]);
}

serviceElementVar[7].style.cssText = "width: 6vw;height: 3vh;font-size: .74vw;font-weight: 600;color: white;transform:translate(-17.25vw, 3.6vh);display: inline-block;";
serviceElementVar[7].innerText = "CONTENT MARKETING";


serviceElementVar[8].style.cssText = "width: 4vw;height: 3vh;font-size: .74vw;font-weight: 600;color: white;transform: translate(-16.5vw, 3.5vh);display: inline-block;";
serviceElementVar[8].innerText = "WEB DESIGN";


serviceElementVar[9].style.cssText = "width: 6vw;height: 3vh;font-size: .74vw;font-weight: 600;color: white;transform: translate(10.8vw, -2vh);display: inline-block;";
serviceElementVar[9].innerText = "WEB DEVELOPMENT";


serviceElementVar[10].style.cssText = "width: 6vw;height: 3vh;font-size: .74vw;font-weight: 600;color: white;transform:translate(10.7vw, -2vh);display: inline-block;";
serviceElementVar[10].innerText = "ONLINE MARKETING";

serviceElementVar[11].setAttribute("href", "services.html");
let viewBtn = document.createElement("button");
serviceElementVar[11].appendChild(viewBtn).id = "viewMoreBtn";
let viewMoreBtn = document.getElementById("viewMoreBtn");
viewMoreBtn.innerText = "VIEW MORE";
viewMoreBtn.style.cssText = "padding: 1vh 2vw;font-size: 1vw;font-weight: 900;border-radius: 0.5vw; border: 4px solid black;transform: translate(-6vw, 3vh);color: white;background: black;transition: 1s;";
viewMoreBtn.addEventListener("mouseover", function() {
	viewMoreBtn.style.cssText = "padding: 1vh 2vw;font-size: 1vw;font-weight: 900;border-radius: 0.5vw; border: 4px solid black;transform: translate(-6vw, 3vh);color: white;background: transparent;transition: 0.5s;";

	// alert("hii");
});
viewMoreBtn.addEventListener("mouseleave", function() {
	viewMoreBtn.style.cssText = "padding: 1vh 2vw;font-size: 1vw;font-weight: 900;border-radius: 0.5vw; border: 4px solid black;transform: translate(-6vw, 3vh);color: white;background: black;transition: 1s;";

	// alert("hii");
});

//service h1 tag
serviceH1.innerText = "Services";
serviceH1.style.cssText = "font-size: 62px;";

//service p tag
servicesP.innerText = "Among the services we offer include web design and develospment, content marketing, and online marketing. Needless to say, we understand scripting languages, are well-versed in mobile responsiveness, intuitively understand UX/UI design, and possess a thorough grasp of search engine optimization principles. Rest assured, we have your needs met.";
servicesP.style.cssText = "width: 87%;font-size: 20px;padding: 0px 44px;color: #ffffffb8;";

//content marketing div 
marketing.style.cssText = "height: 9.1vh;width: 5.2vw;background: url(/img/icons-perdy.svg) -0.2vw -0.1vh / 424% no-repeat;transform:translate(4vw, 0.2vh);border-radius: 8vw;display: inline-block;"

//design div 
design.style.cssText = "height: 9.1vh;width: 5.2vw;background: url(/img/icons-perdy.svg) -5.7vw -0.1vh/ 424% no-repeat white;transform: translate(4.5vw, 0.2vh); border-radius: 8vw;display: inline-block;"

// development div 
develop.style.cssText = "height: 9.1vh;width: 5.2vw;background: url(/img/icons-perdy.svg) -11.2vw -0.1vh / 424% no-repeat white;transform: translate(5vw, 0.2vh); border-radius: 8vw;display: inline-block;"

//online onlineMarketing div 
onlineMarkt.style.cssText = "height: 9.1vh;width: 5.2vw;background: url(/img/icons-perdy.svg)  -16.75vw -0.25vh/ 424% no-repeat white;transform:translate(5.5vw, 0.5vh); border-radius: 8vw;display: inline-block;"

servicesP2.innerText = "We encourage you to learn more about our services below:";
servicesP2.style.cssText = "width: 87%;font-size: 20px;padding: 0px 44px;color: #ffffffb8;";

let nameTxtId=document.getElementById("inputNameTxt").value;
let emailTxtId=document.getElementById("inputEmailTxt").value;
let teleTxtId=document.getElementById("tele").value;
function msgSend()
{
    document.getElementById("inputNameTxt").value="";
    document.getElementById("inputEmailTxt").value="";
    document.getElementById("tele").value="";
    document.getElementById("msgTxt").value="";
}



