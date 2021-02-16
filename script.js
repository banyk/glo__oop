'use strict';

const DOMElement = function (selector, height, width, bg, fontSize) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
};

DOMElement.prototype.createElem = function () {
	let newElem;
	if (this.selector[0] === '.') {
		newElem = document.createElement('div');
		let className = this.selector.substring(1);
		newElem.classList.add(className);
	} else if (this.selector[0] === '#') {
		newElem = document.createElement('p');
		let idName = this.selector.substring(1);
		newElem.setAttribute('id', idName);
	}
	newElem.style.cssText = `height: ${this.height}px;
	width:  ${this.width}px;
	background-color:	${this.bg};
	font-size: ${this.fontSize}px;
	`;
	newElem.textContent = 'Подвинь меня';
	document.body.prepend(newElem);
};

let newElement = new DOMElement('.block', 100, 100, '#ff3000');

document.addEventListener('DOMContentLoaded', newElement.createElem());
let elementOnPage = document.querySelector('.block');
elementOnPage.style.position = 'absolute';
document.addEventListener('keydown', function (e) {
	let computed = getComputedStyle(elementOnPage),
		computedTop = parseFloat(computed.top),
		computedLeft = parseFloat(computed.left);
	if (e.code === 'ArrowDown') {
		elementOnPage.style.top = computedTop + 10 + 'px';
	} else if (e.code === 'ArrowLeft') {
		elementOnPage.style.left = computedLeft - 10 + 'px';
	} else if (e.code === 'ArrowRight') {
		elementOnPage.style.left = computedLeft + 10 + 'px';
	} else if (e.code === 'ArrowUp') {
		elementOnPage.style.top = computedTop - 10 + 'px';
	}
});