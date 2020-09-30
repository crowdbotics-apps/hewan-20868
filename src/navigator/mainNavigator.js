import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile117605Navigator from '../features/UserProfile117605/navigator';
import Maps117586Navigator from '../features/Maps117586/navigator';
import Settings117564Navigator from '../features/Settings117564/navigator';
import Settings117549Navigator from '../features/Settings117549/navigator';
import NotificationList117548Navigator from '../features/NotificationList117548/navigator';
import Maps117547Navigator from '../features/Maps117547/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile117605: { screen: UserProfile117605Navigator },
Maps117586: { screen: Maps117586Navigator },
Settings117564: { screen: Settings117564Navigator },
Settings117549: { screen: Settings117549Navigator },
NotificationList117548: { screen: NotificationList117548Navigator },
Maps117547: { screen: Maps117547Navigator },

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
