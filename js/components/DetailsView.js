import Component from './Component.js';

export default class DetailsView extends Component {
  constructor(cb, tag, className, data = [], personName = '') {
    super(cb, tag, className);
    this.data = data;
    this.personName = personName;
    this.addElems();
    this.addLists();
    this.addListener();
    this.el.style.zIndex = 1;
  }

  addElems() {
    this.backButton = document.createElement('div');
    this.backButton.classList.add('back');
    const background = document.createElement('div');
    background.classList.add('background');
    const title = document.createElement('div');
    title.classList.add('card-title');
    title.innerHTML = `${this.personName}`;
    background.append(title);
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('lists-wrapper');
    this.el.append(this.backButton);
    this.el.append(background);
    this.el.append(this.wrapper);
  }

  addLists() {
    this.data.forEach((element) => {
      const list = document.createElement('ul');
      list.classList.add('list-wrapper');
      const listTitle = document.createElement('li');
      listTitle.classList.add('people-title');
      listTitle.textContent = element.title;
      list.append(listTitle);
      element.data.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<i class="fa fa-male"></i><span >${item.name}</span>`;
        list.append(listItem);
      })
      this.wrapper.append(list);
    });
  }

  addListener() {
    this.backButton.addEventListener('click', this.cb);
  }

  removeListener() {
    this.backButton.removeEventListener('click', this.cb);
  }
}