export default class Component {
  constructor(cb, tag, className = null) {
    this.className = className;
    this.el = document.createElement(tag);
    this.cb = cb;
  }

  render() {
    this.el.classList.add(this.className);
    return this.el;
  }
}