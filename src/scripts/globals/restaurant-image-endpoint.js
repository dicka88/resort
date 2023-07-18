import CONFIG from './config';

const RESTAURANT_IMAGE = {
  small: (pictureId) => `${CONFIG.API_BASE_URL}/images/small/${pictureId}`,
  medium: (pictureId) => `${CONFIG.API_BASE_URL}/images/medium/${pictureId}`,
  large: (pictureId) => `${CONFIG.API_BASE_URL}/images/large/${pictureId}`,
};

export default RESTAURANT_IMAGE;
