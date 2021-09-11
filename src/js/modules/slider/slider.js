export default class Slider {
    constructor({ container = "", btns = "", next = "", prev = "" } = {}) {
        this.container = document.querySelector(container);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }
}