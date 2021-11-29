import Component from './Component.js';

export default class DetailsView extends Component {
  constructor(cb, tag, className, data = []) {
    super(cb, tag, className);
    this.data = data;
    this.addList();
    this.addItems();
    this.addListener();
  }

  addElems() {
    this.backButton = document.createElement('div');
    backButton.classList.add('back');
    const background = document.createElement('div');
    background.classList.add('background');
    this.el.append(backButton);
    this.el.append(background);
  }

  addLists() {
    this.data.forEach((element) => {
      const list = document.createElement('ul');
      list.classList.add('list-wrapper');
      element.forEach((item) => {
        list.append.this.createSublist(item);
      })
    });
    this.el.append(list);
  }

  addListener() {
    this.backButton.addEventListener('click', () => {
      this.cb();
    });
  }

  createSublist(arr) {
    arr.map((item) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<i class="fa fa-male"></i><span >${item.name}</span>`;
    });
  }
}