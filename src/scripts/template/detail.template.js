import RESTAURANT_IMAGE from '../globals/restaurant-image-endpoint';

export const generateDetailTemplate = ({
  id,
  name,
  rating,
  city,
  address,
  categories,
  description,
  pictureId,
  menus,
  customerReviews,
}) => `
  <div class="">
    <div class="my-2">
      <a href="/#/" class="detail__back">
        <svg svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25H20Z"/></svg>
        Go Back
      </a>
    </div>
    <div class="relative">
      <picture class="detail__thumbnail">
        <source type="image/png" media="(max-width: 480px)" srcset="${RESTAURANT_IMAGE.small(pictureId)}" />
        <source type="image/png" media="(max-width: 768px)" srcset="${RESTAURANT_IMAGE.medium(pictureId)}" />
        <img data-src="${RESTAURANT_IMAGE.large(pictureId)}" alt="${name}" class="lazyload" />
      </picture>
      <div class="detail__rating">
        ${city} | 
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#f7cb3c" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        ${rating}
      </div>
    </div>
    <div>
      <h1 class="detail__title">${name}</h1>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg> 
        ${address}
      <p>
      <div class="flex gap-2 mb-2 detail__categories">
        ${categories.map((category) => `
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M13 20l-9-9V4h7l9 9M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5Z"/></svg>
            ${category.name}
          </span>
        `).join('')}
      </div>
      <p>
        ${description}
      </p>
      <div class="grid md:grid-cols-2 gap-12">
        <div class="detail__menus">
          <h2>Menus</h2>
          <div class="mb-6">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 26 26"><g fill="none"><defs><mask id="pepiconsPopKniveForkCircleFilled0"><path fill="#fff" d="M0 0h26v26H0z"/><g fill="#000"><path fill-rule="evenodd" d="M14.27 8.506c0 1.942 1.063 3.308 3 3.994V14a1 1 0 1 0 2 0V4.5a1 1 0 0 0-1.442-.897c-2.316 1.141-3.558 2.799-3.558 4.903Zm2 0c0-.82.319-1.535 1-2.161v3.971c-.695-.411-1-.999-1-1.81Z" clip-rule="evenodd"/><path d="M16.27 20.5v-5a2 2 0 1 1 4 0v5a2 2 0 0 1-4 0ZM6.283 5.45a1 1 0 1 1 1.998.1c-.08 1.603.002 2.682.2 3.158c.095.23.253.315.712.288a1 1 0 1 1 .114 1.997c-1.258.073-2.229-.446-2.674-1.519c-.343-.828-.444-2.142-.35-4.024Z"/><path d="M13.717 5.45a1 1 0 1 0-1.998.1c.08 1.603-.002 2.682-.2 3.158c-.096.23-.253.315-.712.288a1 1 0 1 0-.115 1.997c1.258.073 2.23-.446 2.675-1.519c.343-.828.444-2.142.35-4.024Z"/><path d="M9 5.5a1 1 0 0 1 2 0v9a1 1 0 1 1-2 0v-9Z"/><path d="M8 20.5v-5a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0Z"/></g></mask></defs><circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopKniveForkCircleFilled0)"/></g></svg>
              Foods
            </h3>
            <div>
              <div class="grid grid-cols-3 gap-4 detail__menu_list">
                ${menus.foods.map((food) => `
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.51 12.48a1 1 0 1 0 1 1a1 1 0 0 0-1-1Zm0-4.48a1 1 0 1 0 1 1a1 1 0 0 0-1-1ZM12 10a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm8.5-1.43a3 3 0 0 0-2.3-.29a2.9 2.9 0 0 0-1.09.56L5.51 2.13a1 1 0 0 0-1 0A1 1 0 0 0 4 3v13.17A2.94 2.94 0 0 0 2 19a3 3 0 0 0 2.92 3h.58a18.57 18.57 0 0 0 16.11-9.41a3 3 0 0 0-1.1-4.02ZM6 4.73l9.89 5.71A12.57 12.57 0 0 1 6 16Zm13.87 6.88A16.58 16.58 0 0 1 5 20a1 1 0 0 1-1-1a1 1 0 0 1 .3-.72A1 1 0 0 1 5 18h.51a14.5 14.5 0 0 0 12.62-7.37a.9.9 0 0 1 .58-.44a1 1 0 0 1 .75.09a1 1 0 0 1 .42 1.33Z"/></svg>
                    ${food.name}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="mb-6">
            <h3>
              <svg svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 26 26"><g fill="none"><defs><mask id="pepiconsPopSoftDrinkCircleFilled0"><path fill="#fff" d="M0 0h26v26H0z"/><g fill="#000"><path fill-rule="evenodd" d="M16.411 7H9.589a2.502 2.502 0 0 0-2.481 2.803l1.22 10A2.5 2.5 0 0 0 10.809 22h4.385a2.5 2.5 0 0 0 2.481-2.198l1.218-10A2.5 2.5 0 0 0 16.41 7ZM9.529 9.004A.5.5 0 0 1 9.589 9h6.822a.5.5 0 0 1 .496.56l-1.217 10a.5.5 0 0 1-.496.44h-4.385a.5.5 0 0 1-.496-.44l-1.22-10a.5.5 0 0 1 .436-.556Z" clip-rule="evenodd"/><path d="M12.217 17.72a.75.75 0 0 1-1.434-.44l4-13a.75.75 0 1 1 1.434.44l-4 13Z"/><path d="M8.5 13.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5h-9Zm6.818-8.022a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 1 1-.364 1.456l-4-1Z"/></g></mask></defs><circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopSoftDrinkCircleFilled0)"/></g></svg>
              Drinks
            </h3>
            <div>
              <div class="grid grid-cols-3 gap-4 detail__menu_list">
                ${menus.drinks.map((drink) => `
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zM12 14.197L8.535 9h6.93L12 14.197zM18.132 5l-1.333 2H7.201L5.868 5h12.264z"/></svg>
                    ${drink.name}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Customer Reviews</h2>
          <div class="mb-4">
            ${customerReviews.map((customer) => `
              <div class="flex gap-4">
                <div>
                  <img src="https://cdn.statically.io/avatar/shape=circle/${customer.name}" alt="${customer.name}" height="50" width="50" style="min-height: 50px; min-width: 50px;" />
                </div>
                <div>
                  <div class="mb-2">
                    <h4 class="py-0">${customer.name}</h4>
                    <span class="text-gray">${customer.date}</span>
                  </div>
                  <p>${customer.review}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="mb-4 p-4 rounded bg-gray detail__review">
            <h4>Add your review</h4>
            <form>
              <input name="name" placeholder="Enter your name" />
              <textarea name="review" placeholder="Enter your review"></textarea>
              <button type="submit" class="btn primary w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <fab-favorite-restaurant
      id="${id}"
      pictureId="${pictureId}"
      name="${name}"
      city="${city}"
      rating="${rating}"
      description="${description}"
    ></fab-favorite-restaurant>
  </div>
  `;

export default '';
