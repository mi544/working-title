import { createAppContainer } from "react-navigation";

import { createDrawerNavigator } from "react-navigation-drawer";

import TabsNavigator from "./TabsNavigator";

const MainNavigator = createDrawerNavigator({
    Profile: { screen: TabsNavigator, navigationOptions: { drawerLabel: "Profile" } },
    Messages: { screen: TabsNavigator, navigationOptions: { drawerLabel: "Messages" } },
    MusicSheet: { screen: TabsNavigator, navigationOptions: { drawerLabel: "Create a _" } },
    Settings: { screen: TabsNavigator, navigationOptions: { drawerLabel: "Settings" } }
});


export default createAppContainer(MainNavigator);