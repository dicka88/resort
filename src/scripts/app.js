import routes from './routes/routes';
import UrlParser from './routes/url-parser';

class App {
  constructor({
    content,
  }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();

    const page = routes[url];

    if (!page) {
      this._content.innerHTML = `
        <not-found-404></not-found-404>
      `;
      return;
    }

    const pageHTML = await page.render();

    this._content.innerHTML = pageHTML;
    await page.afterRender();

    const skipLink = document.querySelector('.skip-to-main-content-link');
    const mainContent = document.querySelector('#main');

    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      skipLink.blur();
    });
  }
}

export default App;
