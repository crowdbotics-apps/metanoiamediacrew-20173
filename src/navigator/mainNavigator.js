import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen299917Navigator from '../features/BlankScreen299917/navigator';
import BlankScreen199916Navigator from '../features/BlankScreen199916/navigator';
import BlankScreen099915Navigator from '../features/BlankScreen099915/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
