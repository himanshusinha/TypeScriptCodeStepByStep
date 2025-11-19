var headingEl = document.querySelector("h1") as HTMLHeadingElement;
var anchor1 = document.querySelector("a") as HTMLAnchorElement;

var headingClass = document.querySelector(
  ".headingStyle"
) as HTMLHeadingElement;
var anchorElClass = document.querySelector(".anchorStyle") as HTMLAnchorElement;

console.log(headingEl.classList);
console.log(anchor1.href);
console.log(headingClass.textContent);
console.log(anchorElClass.classList);
