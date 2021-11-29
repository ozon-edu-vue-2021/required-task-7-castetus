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
    this.root.append(new ListView(this.openCard, 'div', 'list-view', this.data).render());
  }

  backWard() {
    console.log('test');
    // this.root.removeChild(this.card);
  }

  openCard(id) {
    const person = this.data.find((item) => item.id === id);
    if (!person) {
      return;
    }
    const cardData = new Slicer().selectFriends(person);
    console.log(this);
    this.card = new DetailsView(this.backWard, 'div', 'details-view', cardData).render();
    this.root.append(this.card);
  }
}