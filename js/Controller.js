import { jsonData } from '../data.js';

export default class Controller {
  constructor() {
    this.data = JSON.parse(jsonData);
  }

  sortByField(arr, field) {

  }

  selectFriends(person) {
    return this.data.filter((item) => {
      person.friends.includes(item.id);
    });
  }

  selectNotFriends(person) {
    return this.data.filter((item) => {
      !person.friends.includes(item.id);
    }).splice(0, 2);
  }

  selectMostPopular() {
    
  }
}