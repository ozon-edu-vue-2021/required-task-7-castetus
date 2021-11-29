import Component from './Component.js';

export default class DetailsView extends Component {
  constructor(cb, tag, className, data = []) {
    super(cb, tag, className);
    this.data = data;
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
    this.el.append(this.backButton);
    this.el.append(background);
  }

  addLists() {
    this.data.forEach((element) => {
      const list = document.createElement('ul');
      list.classList.add('list-wrapper');
      element.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<i class="fa fa-male"></i><span >${item.name}</span>`;
        list.append(listItem);
      })
      this.el.append(list);
    });
  }

  addListener() {
    this.backButton.addEventListener('click', this.cb);
  }

  removeListener() {
    this.backButton.removeEventListener('click', this.cb);
  }

  // createSublist(arr) {
  //   const test = arr.map((item) => {
  //     const listItem = document.createElement('li');
  //     listItem.innerHTML = `<i class="fa fa-male"></i><span >${item.name}</span>`;
  //     console.log(listItem)
  //     return listItem;
  //   });
  //   console.log(test)
  // }
}