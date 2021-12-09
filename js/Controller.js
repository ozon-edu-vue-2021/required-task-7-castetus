import ListView from './components/ListView.js';
import DetailsView from './components/DetailsView.js';
import Slicer from './Slicer.js';

export default class Controller {
  constructor(data, el) {
    this.card = null;
    this.data = data;
    this.root = el;
  }

  init(){
    this.root.append(new ListView(this.showCard.bind(this), 'div', 'list-view', this.data).render());
  }

  hideCard() {
    this.details.removeListener();
    this.root.removeChild(this.card);
    this.root.classList.remove('details');
  }

  showCard(id) {
    this.root.classList.add('details');
    const person = this.data.find((item) => item.id === id);
    if (!person) {
      return;
    }
    const slicer = new Slicer(this.data);
    const cardData = [];
    cardData.push(slicer.selectFriends(person));
    cardData.push(slicer.selectNotFriends(person));
    cardData.push(slicer.selectMostPopular());

    this.details = new DetailsView(this.hideCard.bind(this), 'div', 'details-view', cardData, person.name);
    this.card = this.details.render();
    this.root.append(this.card);
  }
}