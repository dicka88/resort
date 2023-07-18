import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

import './components/my-header';
import './components/my-footer';
import './components/restaurant-item';
import './components/fab-favorite-restaurant';
import './components/loading-error';
import './components/no-result-found';
import './components/not-found-404';

import App from './app';

const app = new App({
  content: document.querySelector('#main'),
});

window.addEventListener('load', async () => {
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
