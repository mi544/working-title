import { createAppContainer } from "react-navigation";

import { createDrawerNavigator } from "react-navigation-drawer";

import TabsNavigator from "./TabsNavigator";
import MyProfileStackNavigator from "./MyProfileStackNavigator";

const MainNavigator = createDrawerNavigator({
    Feed: {
        screen: TabsNavigator,
        navigationOptions: { drawerLabel: "Feed" }
    },
    MyProfile: {
        screen: MyProfileStackNavigator,
        navigationOptions: { drawerLabel: "Profile" }
    },
    Messages: {
        screen: TabsNavigator,
        navigationOptions: { drawerLabel: "Messages" }
    },
    Settings: {
        screen: TabsNavigator,
        navigationOptions: { drawerLabel: "Settings" }
    }
});

export default createAppContainer(MainNavigator);
