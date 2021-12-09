import { jsonData } from '../data.js';
import Controller from './Controller.js';
import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(jsonData);
  const el = document.querySelector('#container');
  const controller = new Controller(data, el);
  controller.init();
});
