import { jsonData } from '../data.js';

export default class Slicer {
  constructor() {
    this.data = JSON.parse(jsonData);
  }

  sortByField(arr, field) {
    return arr.sort((a, b) => {
      return a[field] - b[field];
    });
  }

  selectFriends(person) {
    // return this.data.filter((item) => {
    //   person.friends.includes(item.id);
    // });
    return this.data.splice(0, 3);
  }

  selectNotFriends(person) {
    return this.data.filter((item) => {
      !person.friends.includes(item.id);
    }).splice(0, 2);
  }

  selectMostPopular() {
    const popularList = this.data.map((person) => {
      return {
        id: person.id,
        popularity: 0,
      };
    });
    popularList.forEach((item) => {
      this.data.forEach((person) => {
        if (person.friends.includes(item.id)) {
          item.popularity += 1;
        }
      });
    });
    return this.sortByField(popularList, popularity).splice(0, 2);
  }
}