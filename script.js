//your JS code here. If required.
let lin = document.getElementById("line");
let angle=0;
function rotateLin(){
	angle += 2;
	lin.style.transform = `translateX(-50%) rotate(${angle}deg)`;
	requestAnimationFrame(rotateLin);
}
requestAnimationFrame(rotateLin);
// rotateLin();