// showRoom page
// button hover 1

let overDiv1 = document.getElementById("hoverDiv1");
let projBtn1 = document.getElementById("viewProjBtn1");
overDiv1.addEventListener("mouseover", function() {
	projBtn1.style.cssText = "transition:all .5s;color: white;background:#0096d7;font-size:14px;padding: 1.8% 3.5% 1.8% 3%;";
	projBtn1.innerText = "View Project >"

});
overDiv1.addEventListener("mouseleave", function() {
	projBtn1.style.cssText = "transition:all .5s;color: #0096d7;background:transparent;padding: 1.8% 3%;";
	projBtn1.innerText = "View Project"
});
// button hover 2

let overDiv2 = document.getElementById("hoverDiv2");
let projBtn2 = document.getElementById("viewProjBtn2");
overDiv2.addEventListener("mouseover", function() {
	projBtn2.style.cssText = "transition:all .5s;color: white;background:#0096d7;padding: 2.5% 3.5% 2.5% 3%;";
	projBtn2.innerText = "View Project >"

});
overDiv2.addEventListener("mouseleave", function() {
	projBtn2.style.cssText = "transition:all .5s;color: #0096d7;background:transparent;padding: 2.5% 3%;";
	projBtn2.innerText = "View Project"
});
// button hover 3

let overDiv3 = document.getElementById("hoverDiv3");
let projBtn3 = document.getElementById("viewProjBtn3");
overDiv3.addEventListener("mouseover", function() {
	console.log("Hiii");
	projBtn3.style.cssText = "transition:all .5s;color: white;background:#0096d7;padding: 2.5% 3.5% 2.5% 3%;";
	projBtn3.innerText = "View Project >"

});
overDiv3.addEventListener("mouseleave", function() {
	console.log("Hiii");
	projBtn3.style.cssText = "transition:all .5s;color: #0096d7;background:transparent;padding: 2.5% 3%;";
	projBtn3.innerText = "View Project"
});
// button hover 2

let overDiv4 = document.getElementById("hoverDiv4");
let projBtn4 = document.getElementById("viewProjBtn4");
overDiv4.addEventListener("mouseover", function() {
	console.log("Hiii");
	projBtn4.style.cssText = "transition:all .5s;color: white;background:#0096d7;padding: 2.5% 3.5% 2.5% 3%;";
	projBtn4.innerText = "View Project >"

});
overDiv4.addEventListener("mouseleave", function() {
	console.log("Hiii");
	projBtn4.style.cssText = "transition:all .5s;color: #0096d7;background:transparent;padding: 2.5% 3%;";
	projBtn4.innerText = "View Project"
});