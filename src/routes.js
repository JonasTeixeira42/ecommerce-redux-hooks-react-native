import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import User from './pages/User';

const routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  })
);

export default routes;