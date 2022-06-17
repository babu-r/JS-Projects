let image = document.querySelector(".image");
let vertical = document.querySelector(".vertical");
let horizontal = document.querySelector(".horizontal");

vertical.addEventListener("input", function () {
    image.style.top = vertical.value + "%";
	console.log(vertical.value,horizontal.value);
});

horizontal.addEventListener("input", function () {
    image.style.left = horizontal.value + "%";
	console.log(vertical.value,horizontal.value);
});

