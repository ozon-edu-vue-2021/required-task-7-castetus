export default class Slicer {
  constructor(data) {
    this.data = data;
  }

  sortByField(arr, field, secondField) {
    return arr.sort((a, b) => {
      if (a[field] > b[field]) {
        return 1;
      }
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[secondField] > b[secondField]) {
        return 1;
      }
      if (a[secondField] < b[secondField]) {
        return -1;
      }
      return 0;
    });
  }

  selectFriends(person) {
    const result = {
      title: 'Друзья',
      data: this.data.filter((item) => {
        return person.friends.includes(Number(item.id));
      }).splice(0, 3)
    };
    return result;
  }

  selectNotFriends(person) {
    const result = {
      title: 'Не в друзьях',
      data: this.data.filter((item) => {
        return !person.friends.includes(Number(item.id));
      }).splice(0, 3)
    };
    return result;
  }

  selectMostPopular() {
    const popularList = this.data.map((person) => {
      return {
        id: person.id,
        name: person.name,
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
    const result = {
      title: 'Популярные люди',
      data: this.sortByField(popularList, 'popularity', 'name').splice(0, 3)
    };
    return result;
  }
}