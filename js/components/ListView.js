import Component from './Component.js';

export default class ListView extends Component {
  constructor(cb, tag, className, data = []) {
    super(cb, tag, className);
    this.data = data;
    this.addList();
    this.addItems();
    this.addListener();
  }

  addList() {
    this.list = document.createElement('ul');
    this.list.classList.add('contacts-list');
    this.el.append(this.list);
  }

  addListener() {
    this.el.addEventListener('click', (e) => {
      let target = e.target;
      if (!target.dataset.id) {
        target = target.parentElement;
      }
      const currentId = target.dataset.id
      this.cb(Number(currentId));
    });
  }

  addItems() {
    this.data.forEach((item) => {
      const element = document.createElement('li');
      if (item && item.name) {
        element.innerHTML = `<strong>${item.name}</strong>`;
        element.dataset.id = item.id;
        this.list.append(element);
      }
    });
  }
}