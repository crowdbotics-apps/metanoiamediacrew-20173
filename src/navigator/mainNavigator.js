import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList99919Navigator from '../features/ArticleList99919/navigator';
import ArticleList99918Navigator from '../features/ArticleList99918/navigator';
import BlankScreen299917Navigator from '../features/BlankScreen299917/navigator';
import BlankScreen199916Navigator from '../features/BlankScreen199916/navigator';
import BlankScreen099915Navigator from '../features/BlankScreen099915/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList99919: { screen: ArticleList99919Navigator },
ArticleList99918: { screen: ArticleList99918Navigator },
BlankScreen299917: { screen: BlankScreen299917Navigator },
BlankScreen199916: { screen: BlankScreen199916Navigator },
BlankScreen099915: { screen: BlankScreen099915Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
