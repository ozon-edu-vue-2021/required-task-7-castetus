export default class Component {
  constructor(tag, className = null) {
    this.className = className;
    this.el = document.createElement(tag);
  }

  render() {
    this.el.classList.add(this.className);
    return this.el;
  }
}