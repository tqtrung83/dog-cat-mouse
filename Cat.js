function Cat() {
	// body...
	this.stomach = [];

Cat.prototype.eat = function (mouse) {
	this.stomach.push(mouse);
	// body...
}
}
module.exports = Cat;