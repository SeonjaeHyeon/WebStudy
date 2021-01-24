const resize = function () {
	const items = document.getElementsByClassName('item');

	[...items].forEach((item) => (item.textContent = item.clientWidth));
};
window.onresize = resize;
window.onload = resize;
