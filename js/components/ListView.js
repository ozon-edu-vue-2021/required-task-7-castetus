import Component from './Component.js';

export default class ListView extends Component {
  constructor(tag, className, data = []) {
    super(tag, className);
    this.data = data;
    this.addList();
    this.addItems();
  }

  addList() {
    this.list = document.createElement('ul');
    this.list.classList.add('contacts-list');
    this.el.append(this.list);
  }

  addListener() {
    this.el.addEventListener('click', () => {

    });
  }

  addItems() {
    this.data.forEach((element) => {
      const item = document.createElement('li');
      if (element && element.name) {
        item.innerHTML = `<strong>${element.name}</strong>`;
        this.list.append(item);
      }
    });
  }
}