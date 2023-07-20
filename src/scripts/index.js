import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.scss';
import './components/my-header';
import './components/my-footer';
import './components/restaurant-item';
import './components/category-item';
import './components/loading-error';
import './components/no-result-found';
import './components/not-found-404';

import App from './app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#main'),
});

window.addEventListener('load', async () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
