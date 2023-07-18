import CONFIG from './config';

const RESTAURANT_API = {
  LISTS: `${CONFIG.API_BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.API_BASE_URL}/detail/${id}`,
  SEARCH: (query) => `${CONFIG.API_BASE_URL}/search?q=${query}`,
  ADD_REVIEW: `${CONFIG.API_BASE_URL}/review`,
};

export default RESTAURANT_API;
