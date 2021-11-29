'use strict';

import { jsonData } from '../data.js';
import ListView from './components/ListView.js';

document.addEventListener('DOMContentLoaded', () => {
  init('#container');
});

const data = JSON.parse(jsonData);

function init(el) {
  const root = document.querySelector(el);
  root.append(new ListView('div', 'list-view', data).render());
}
