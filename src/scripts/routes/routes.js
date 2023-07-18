import Index from '../pages';
import Detail from '../pages/detail';
import Favorite from '../pages/favorite';

const routes = {
  '/': Index,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
