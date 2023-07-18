import Index from '../views';
import Detail from '../views/detail';
import Favorite from '../views/favorite';

const routes = {
  '/': Index,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
